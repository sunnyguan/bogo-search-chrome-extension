function waitForElm(selector) {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(mutations => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}


function waitForElmChange(selector, val) {
  return new Promise(resolve => {
    if (document.querySelector(selector) && document.querySelector(selector).getAttribute('href') !== val) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(mutations => {
      if (document.querySelector(selector) && document.querySelector(selector).getAttribute('href') !== val) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}

function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes.
  return div.firstChild;
}

function createRoom() {
  const room_name = document.querySelector("#create-room-id").value;
  chrome.runtime.sendMessage({type: "create_room", data: {name: username, room_name: room_name, difficulties: [1, 2, 1]}}, function(response) {
    console.log(response);
  });
}

function joinRoom() {
  const room = document.querySelector("#join-room-id").value;
  console.log("Trying to join room", room);
  chrome.runtime.sendMessage({type: "join_room", data: {room_id: room, name: username}}, function(response) {
    console.log(response);
  });
}

function leaveRoom() {
  console.log("Leaving current room");
  document.querySelector('#room-id').textContent = "Not In Room";
  document.querySelector('#room-name').textContent = "Rooms";
  document.querySelector('#join-or-create').style.display = "block";
  document.querySelector('#room-size').textContent = "";
  document.querySelector("#chats").innerHTML = "";
  document.querySelector("#chat-leave").style.display = 'none';
  chrome.runtime.sendMessage({type: "leave_room"}, function(response) {
    console.log(response);
  });
}

function sendMsg() {
  let msg = document.querySelector("#chatbox").value;
  chrome.runtime.sendMessage({type: "message", data: {message: msg, name: username}}, function(response) {
    console.log(response);
  });
}

function inputEnterMsg(e) {
  if (e.key === "Enter") {
    const chatbox = document.querySelector("#chatbox");
    if (chatbox.value !== "") {
      sendMsg();
      document.querySelector("#chatbox").value = "";
    }
  }
}

function currentQuestionId() {
  let i = 0;
  for (const question of questions) {
    const q_name = question[1].split("problems/")[1].split("/")[0];
    const curr_name = window.location.href.split("problems/")[1].split("/")[0];
    if (q_name === curr_name)
      return i;
    i++;
  }
  return -1;
}

function prevQuestion() {
  const currId = currentQuestionId();
  if (currId !== 0 && currId !== -1)
    window.location.href = questions[currId - 1][1];
}

function nextQuestion() {
  const currId = currentQuestionId();
  if (currId !== questions.length - 1 && currId !== -1)
    window.location.href = questions[currId + 1][1];
}

function showLeaderboard() {
  if (questions.length === 0) return;
  document.querySelector("#leaderboard-modal").style.display = "flex";
  chrome.runtime.sendMessage({type: "leaderboard"}, function(response) {
    console.log(response);
  });
}

function closeLeaderboard() {
  document.querySelector("#leaderboard-modal").style.display = "none";
}

const chatStyle = 'background-color: #5da3f5; color: white; padding: 10px;border-radius: 0.75rem; clear: both; float: left;';

let questions = [];

function addMessage(data) {
  let user = data.name;
  let message = data.message;
  let type = data.type;
  let newChat;
  if (type === "submission") {
    newChat = createElementFromHTML(`<p style='${chatStyle}'><b>Submission</b>: ${message} </p>`);
  } else if (type === "chat") {
    newChat = createElementFromHTML(`<p style='${chatStyle}'><b>${user}</b>: ${message} </p>`)
  } else if (type === "admin") {
    newChat = createElementFromHTML(`<p style='${chatStyle}'><b>Admin</b>: ${message} </p>`);
  }
  const chats = document.querySelector("#chats");
  chats.appendChild(newChat);
  chats.scrollTop = chats.scrollHeight;
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(request);
      if (request.type === "room_info") {
        if ('players' in request.data) {
          document.querySelector('#room-size').innerHTML = "<b>Players: </b>" + request.data.players.join(", ");
        }

        if ('room_id' in request.data) {
          console.log("here")
          document.querySelector('#room-id').textContent = "In Room";
          document.querySelector('#chat-leave').style.display = "flex";
          document.querySelector('#join-or-create').style.display = "none";
          document.querySelector('#room-name').textContent = request.data.room_name + " (id=" + request.data.room_id + ")";
        }

        if ('questions' in request.data) {
          questions = request.data.questions;
          let question_str = "";
          for (let question of request.data.questions) {
            let question_name = question[0];
            let question_url = question[1];
            question_str += `<p><a href='${question_url}'>${question_name}</a></p>`
          }
          // document.querySelector('#questions').innerHTML = question_str;

          if (currentQuestionId() === -1) {
            console.log("about to redirect");
            console.log(window.location.href);
            window.location.href = request.data.questions[0][1];
          }
        }

        // chatlogs
        if ('chatlog' in request.data) {
          document.querySelector("#chats").innerHTML = "";
          for (const chat of request.data.chatlog) {
            addMessage(chat);
          }
        }
      } else if (request.type === "message") {
        addMessage(request.data);
      } else if (request.type === "leaderboard") {
        const response = request.data;
        console.log(request.data);
        let table = `
        <table id="scoreboard">
          <thead>
          <tr id="scoreboard-header">
              <td>Name</td>
        `;
        for (const question of questions)
          table += `<td>${question[0]}</td>`
        table += '<td>Score</td></tr><tbody>'
        for (const ranking of response.rankings) {
          let row = `
            <tr><td>${ranking[0]}</td>
          `;
          for (const status of response.question_status[ranking[0]]) {
            let show = "−";
            if (status === 2) {
              show = "✅";
            } else if (status === 1) {
              show = "❌";
            }
            row += `<td>${show}</td>`
          }
          row += `<td>${ranking[1]}</td></tr>`;
          table += row;
        }

        table += `
          </tbody>
        </table>`;

        const original = document.querySelector("#scoreboard");
        original.outerHTML = table;
      }
    }
);

const divider = `<div style="width: 10px;background-color: #eeeeee;height: 100%"></div>`;

const sidebar = `
<div style="display: flex;flex-direction: column; max-width:30%;min-width: 15%;background-color: #fafafa;">
    <div style="background: rgb(250, 250, 250); margin: 20px 20px 0 20px; padding-bottom: 10px; border-bottom: 1px solid lightgray" id="room-name" class="css-v3d350">Rooms</div>
    <div style="
    padding: 20px;
    display: flex;
    flex-direction: column;
    height: fit-content;
    flex-grow: 1;
">
<style>
button.join-create-room {
    background: rgb(93, 163, 245);
    border: 2px solid rgb(93, 163, 245);
    border-radius: 0.5rem;
    color: white;
    cursor: pointer;
    font-weight: bold;
    margin: auto;
    padding: 6px;
}
button.join-create-room:hover {
    border: 2px solid blue;
}
button.join-create-room:active {
    background: dodgerblue;
}
#leave-room {
    border: 2px solid salmon;
    background: lightsalmon;
    padding: 4px;
}
#leave-room:hover {
    border: 2px solid orangered;
}
#leave-room:active {
    background: orangered;
}
.input-box {
    flex-grow: 1;
    padding: 5px;
    border: 2px solid rgb(93, 163, 245);
    border-radius: 0.5rem;
    margin-bottom: 8px;
}
#chatbox {
  margin-right: 0;
}

/* The Modal (background) */
#leaderboard-modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
}

/* The Close Button */
#close-leaderboard {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  margin-right: 16px;
}

#close-leaderboard:hover,
#close-leaderboard:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

#scoreboard td {
    text-align: center; 
    vertical-align: middle;
}

#scoreboard {
    width: 100%;
    border-spacing: 16px 10px;
    border-collapse: separate;
}

#scoreboard thead tr {
    font-weight: bold;
}
}
</style>
<div style="display: flex; flex-direction: column;
">

<div id="join-or-create" style="margin: auto">
<div style="display: flex; flex-direction: column; margin-bottom: 16px;">
  <input type="text" id="join-room-id" class="input-box" />
  <button id="join-room" class="join-create-room" data-no-border="true" icon="information">
          Join Room
  </button>
</div>
<div style="display: flex; flex-direction: column; margin-bottom: 10px;">
  <input type="text" id="create-room-id" class="input-box" />
  <button id="create-room" class="join-create-room" data-no-border="true" icon="information">
          Create Room
  </button>
</div>
</div>
</div>
<div id="chat-leave" style="display: none; height: 100%; flex-direction: column;">
<div style="display: flex;margin-bottom: 10px;">
<span style="margin: auto 0 auto 0"><b>Status: </b></span>
<div id="room-id" style="margin: auto 10px auto 10px; flex-grow: 1">
  Not In Room
</div>
<button id="leaderboard" class="join-create-room" style="padding: 5px">Leaderboard</button>
<div id="leaderboard-modal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span id="close-leaderboard">&times;</span>
    <h3 style="
    width: 100%;
    text-align: center;
    margin-top: 10px;
">Leaderboard</h1>
    <table id="scoreboard">
    </table>
  </div>

</div>

</div>
<div id="room-size" style="margin-bottom: 10px">
</div>
<div id="questions">
</div>
<div id="chat-container" style="flex-grow: 1;border-radius: 1rem;background: #eeeeee;display: flex;flex-direction: column;"><div id="chats" style="
    flex-grow: 1;
    height: 0;
    overflow-y: scroll;
    padding: 20px;
">
</div>
</div>
<div style="
    display: flex;
    margin-top: 10px;
    margin-bottom: 20px;
"><input type="text" placeholder="Enter message here" id="chatbox" class="input-box" />
</div><div style="display: flex;">
  <button id="leave-room" class="join-create-room" data-no-border="true" icon="information" style="
    flex-grow: 1;
">
          Leave Room
  </button>
</div>
</div>
    </div>
</div>
`

function makePrevNextButton() {
  const question_name = document.querySelector('.css-v3d350').textContent;
   document.querySelector('.css-v3d350').innerHTML = `
<div style="
    flex-grow: 1;
">${question_name}</div><div style="
    display: flex;
">
<style>
button.rooms {
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 24px;
  border: 2px solid #f2af29;
  transition: all 0.3s ease;
}
button.rooms::after {
  content: "←";
  font-size: 16px;
  color: #f2af29;
  transition: all 0.3s ease;
}

button#question-next::after {
 content: "→"
}

button.rooms:hover {
  border-color: #14519f;
}

button.rooms:hover::after {
  color: #14519f;
}

button.rooms:active {
  border-color: red;
}

button.rooms:active::after {
  color: red;
}
</style>
<button id="question-prev" class="rooms" style="margin-right: 10px"></button>
<button id="question-next" class="rooms" style=""></button></div>`;
  document.querySelector('.css-v3d350').style.display = 'flex';
}

let username = "user" + Math.round(Math.random() * 100000);

waitForElm('.btns__1OeZ').then((res) => {myMain(res)});

function myMain (e) {
  const parent = document.querySelector(".container__14Na");
  const dividerEl = createElementFromHTML(divider);
  parent.appendChild(dividerEl);

  const side = createElementFromHTML(sidebar);
  side.querySelector("#create-room").addEventListener('click', createRoom);
  side.querySelector("#join-room").addEventListener('click', joinRoom);
  side.querySelector("#leave-room").addEventListener('click', leaveRoom);
  side.querySelector("#leaderboard").addEventListener('click', showLeaderboard);
  side.querySelector("#close-leaderboard").addEventListener('click', closeLeaderboard);
  parent.appendChild(side);

  window.onclick = function(event) {
    if (event.target === document.querySelector("#leaderboard-modal")) {
      closeLeaderboard();
    }
  }

  document.querySelector("#chatbox").addEventListener('keypress', inputEnterMsg);

  makePrevNextButton();
  document.querySelector("#question-prev").addEventListener('click', prevQuestion);
  document.querySelector("#question-next").addEventListener('click', nextQuestion);


  fetch("https://leetcode.com/graphql", {
    "headers": {
      "content-type": "application/json",
    },
    "body": "{\"operationName\":\"globalData\",\"variables\":{},\"query\":\"query globalData {\\n  userStatus {username} }\\n\"}",
    "method": "POST",
    "mode": "cors",
  }).then(res => res.json()).then(data => {
    username = data.data?.userStatus?.username
    if (username === undefined) username = "undefined";
    console.log(username);
  })


  // window.onbeforeunload = function(e) {
  //   leaveRoom();
  // }

  // username = document.querySelector(".user-name__35Mk").textContent;

  // retrieve current room info
  chrome.runtime.sendMessage({type: "retrieve_room_info"}, function(response) {
    console.log(response);
    if (username === 'undefined') {
      alert("You're not logged into LeetCode, so Rooms will not work.");
    }
  });
}

waitForElm(".detail__1Ye5").then((res) => {submitted(res)});

function submitted(e) {
  var href = document.querySelector(".detail__1Ye5").getAttribute('href');
  var check = href + "check";
  fetch(check).then(res => res.json()).then(data => {
    const curr_id = currentQuestionId();
    console.log("DIFFICULTY", questions[curr_id][2])
    chrome.runtime.sendMessage({type: "submission", data: {
        ...data,
        name: username,
        curr_id: curr_id,
        difficulty: questions[curr_id][2]
    }}, function(response) {
      console.log(response);
    });
  })
  waitForElmChange(".detail__1Ye5", href).then(res => {submitted(res)});
}

// keep-alive
setInterval(() => {
  let port = chrome.runtime.connect({name: "keep-alive"});
  port.postMessage({data: 'test'});
}, 1000);