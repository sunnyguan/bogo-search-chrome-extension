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
  chrome.runtime.sendMessage({type: "create_room", data: {name: username, room_name: room_name}}, function(response) {
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
  chrome.runtime.sendMessage({type: "leave_room"}, function(response) {
    console.log(response);
  });
}

function sendMsg() {
  let msg = document.querySelector("#chatbox").value;
  chrome.runtime.sendMessage({type: "message", data: {message: msg}}, function(response) {
    console.log(response);
  });
}

function inputEnterMsg(e) {
  if (e.key == "Enter") {
    sendMsg();
    document.querySelector("#chatbox").value = "";
  }
}

function currentQuestionId() {
  let i = 0;
  for (const question of questions) {
    if (question[1].replace('www.', '') === window.location.href)
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

const chatStyle = 'background-color: #cdeaf7;padding: 10px;border-radius: 0.75rem; clear: both; float: left;';

let questions = [];

function addMessage(data) {
  let user = data.name;
  let message = data.message;
  let type = data.type;
  let newChat;
  if (type === "submission") {
    newChat = createElementFromHTML(`<p style='${chatStyle}'><b>Submission</b>: ${message} </p>`);
  } else if (type === "chat") {
    newChat = createElementFromHTML(`<p style='${chatStyle}'>${user}: ${message} </p>`)
  } else if (type === "admin") {
    newChat = createElementFromHTML(`<p style='${chatStyle}'><b>Admin</b>: ${message} </p>`);
  }
  document.querySelector("#chats").appendChild(newChat);
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.type === "room_info") {
        document.querySelector('#room-size').textContent = "Players: " + request.data.players;
        document.querySelector('#room-id').textContent = "In Room";
        document.querySelector('#room-name').textContent = request.data.room_name + " (id=" + request.data.room_id + ")";

        questions = request.data.questions;
        console.log("LC Questions", request.data);
        let question_str = "";
        let currentQuestionExists = false;
        for (let question of request.data) {
          let question_name = question[0];
          let question_url = question[1];
          question_str += `<p><a href='${question_url}'>${question_name}</a></p>`
          if (question_url.replace('www.', '') === window.location.href)
            currentQuestionExists = true;
        }
        document.querySelector('#questions').innerHTML = question_str;

        if (!currentQuestionExists) {
          console.log("about to redirect");
          console.log(request.data);
          console.log(window.location.href);
          window.location.href = request.data[0][1];
        }

        // chatlogs
        console.log(request);
        if ('chatlog' in request.data) {
          document.querySelector("#chats").innerHTML = "";
          for (const chat of request.data.chatlog) {
            addMessage(chat);
          }
        }
      } else if (request.type === "message") {
        addMessage(request.data);
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
"><div style="
">
<div style="display: flex;margin-bottom: 10px;"><span>Status: </span><div id="room-id" style="margin: auto 10px auto 10px">
  Not in room yet
</div></div>
<div id="room-size" style="margin-bottom: 10px">
</div>
<div id="questions">
</div>
<div style="display: flex;margin-bottom: 10px;">
  <input type="text" id="join-room-id" style="
    margin-right: 10px;
    flex-grow: 1;
    padding: 5px;
">
  <button id="join-room" data-no-border="true" icon="information">
          Join Room
  </button>
</div>
<div style="display: flex;margin-bottom: 10px;">
  <input type="text" id="create-room-id" style="
    margin-right: 10px;
    flex-grow: 1;
    padding: 5px;
">
  <button id="create-room" style="" data-no-border="true" icon="information">
          Create Room
  </button>
</div>
</div>
<div style="flex-grow: 1;border-radius: 1rem;background: lightgray;display: flex;flex-direction: column;"><div id="chats" style="
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
    margin-bottom: 10px;
"><input type="text" placeholder="Enter message here" id="chatbox" style="
    flex-grow: 1;
    padding: 5px;
"></div><div style="display: flex;">
  <button id="leave-room" data-no-border="true" icon="information" style="
    flex-grow: 1;
">
          Leave Room
  </button>
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
"><div id="question-prev" style="
    padding: 0 8px 0 8px;
    background: lightblue;
    margin: auto 5px auto 5px;
    border-radius: 0.75rem;
"><</div><div id="question-next" style="
    padding: 0 8px 0 8px;
    background: lightblue;
    margin: auto 5px auto 5px;
    border-radius: 0.75rem;
">></div></div>`;
  document.querySelector('.css-v3d350').style.display = 'flex';
}

let username = "user" + Math.round(Math.random() * 100);

waitForElm('.btns__1OeZ').then((res) => {myMain(res)});

function myMain (e) {
  const parent = document.querySelector(".container__14Na");
  const dividerEl = createElementFromHTML(divider);
  parent.appendChild(dividerEl);

  const side = createElementFromHTML(sidebar);
  side.querySelector("#create-room").addEventListener('click', createRoom);
  side.querySelector("#join-room").addEventListener('click', joinRoom);
  side.querySelector("#leave-room").addEventListener('click', leaveRoom);
  parent.appendChild(side);

  document.querySelector("#chatbox").addEventListener('keypress', inputEnterMsg);

  makePrevNextButton();
  document.querySelector("#question-prev").addEventListener('click', prevQuestion);
  document.querySelector("#question-next").addEventListener('click', nextQuestion);


  // window.onbeforeunload = function(e) {
  //   leaveRoom();
  // }

  // username = document.querySelector(".user-name__35Mk").textContent;

  // retrieve current room info
  chrome.runtime.sendMessage({type: "retrieve_room_info"}, function(response) {
    console.log(response);
  });
}

waitForElm(".detail__1Ye5").then((res) => {submitted(res)});

function submitted(e) {
  var href = document.querySelector(".detail__1Ye5").getAttribute('href');
  var check = href + "check";
  fetch(check).then(res => res.json()).then(data => {
    console.log(data);
    chrome.runtime.sendMessage({type: "submission", data: data}, function(response) {
      console.log(response);
    });
  })
  waitForElmChange(".detail__1Ye5", href).then(res => {submitted(res)});
}