let questions = [];
let difficulties = [1, 2, 1];
let username = "user" + Math.round(Math.random() * 100000);
let $;

function createRoom() {
  const room_name = $("#create-room-id").value;
  const difficulties_sum = difficulties.reduce((a, b) => a + b, 0);
  if (room_name === "" || difficulties_sum !== 4) return;
  chrome.runtime.sendMessage({type: "create_room", data: {name: username, room_name: room_name, difficulties: difficulties}}, function(response) {
    console.log(response);
  });
}

function joinRoom() {
  const room = $("#join-room-id").value;
  console.log("Trying to join room", room);
  chrome.runtime.sendMessage({type: "join_room", data: {room_id: room, name: username}}, function(response) {
    console.log(response);
  });
}

function leaveRoom() {
  console.log("Leaving current room");
  $('#room-name').textContent = "Rooms";
  $('#join-or-create').style.display = "block";
  $('#room-size').textContent = "";
  $("#chats").innerHTML = "";
  $("#chat-leave").style.display = 'none';
  chrome.runtime.sendMessage({type: "leave_room"}, function(response) {
    console.log(response);
  });
}

function sendMsg() {
  let msg = $("#chatbox").value;
  chrome.runtime.sendMessage({type: "message", data: {message: msg, name: username}}, function(response) {
    console.log(response);
  });
}

function inputEnterMsg(e) {
  if (e.key === "Enter") {
    const chatbox = $("#chatbox");
    if (chatbox.value !== "") {
      sendMsg();
      $("#chatbox").value = "";
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
  $("#leaderboard-modal").style.display = "flex";
  chrome.runtime.sendMessage({type: "leaderboard"}, function(response) {
    console.log(response);
  });
}

function closeLeaderboard() {
  $("#leaderboard-modal").style.display = "none";
}

function addMessage(data) {
  let user = data.name;
  let message = data.message;
  let type = data.type;
  let newChat;
  if (type === "submission") {
    if (message.includes("completed")) {
      newChat = createElementFromHTML(`<p style='${submitPassStyle}'><b>Submission</b>: ${message} </p>`);
    } else {
      newChat = createElementFromHTML(`<p style='${submitFailStyle}'><b>Submission</b>: ${message} </p>`);
    }
  } else if (type === "chat") {
    newChat = createElementFromHTML(`<p style='${chatStyle}'><b>${user}</b>: ${message} </p>`)
  } else if (type === "admin") {
    newChat = createElementFromHTML(`<p style='${adminStyle}'>${message}</p>`);
  }
  const chats = $("#chats");
  const timeParent = createElementFromHTML(`
  <div style="display: flex; padding: 6px 0;"><span style="margin: auto 0; padding-right: 8px;">19:47</span></div>
  `)
  timeParent.appendChild(newChat);
  chats.appendChild(timeParent);
  chats.scrollTop = chats.scrollHeight;
}


function renderDifficulties() {
  $("#easy-cnt").textContent = "Easy: " + difficulties[0].toString();
  $("#med-cnt").textContent = "Medium: " + difficulties[1].toString();
  $("#hard-cnt").textContent = "Hard: " + difficulties[2].toString();
}

function changeQuestions(event) {
  const target = event.target || event.srcElement;
  const id = target.id;
  const delta = id.split("-")[1][0] === 'a' ? 1 : -1;
  if (id[0] === 'e')
    difficulties[0] += delta;
  else if (id[0] === 'm')
    difficulties[1] += delta;
  else if (id[0] === 'h')
    difficulties[2] += delta;
  renderDifficulties();
}



function makePrevNextButton() {
  const question_name = $('.css-v3d350').textContent;
   $('.css-v3d350').innerHTML = `
<div style="
    flex-grow: 1;
">${question_name}</div><div style="
    display: flex;
">
<button id="question-prev" class="rooms" style="margin-right: 10px"></button>
<button id="question-next" class="rooms" style=""></button></div>`;
  $('.css-v3d350').style.display = 'flex';
}

function fetchUsername() {
  fetch("https://leetcode.com/graphql", {
    "headers": {
      "content-type": "application/json",
    },
    "body": "{\"operationName\":\"globalData\",\"variables\":{},\"query\":\"query globalData {\\n  userStatus {username} }\\n\"}",
    "method": "POST",
    "mode": "cors",
  }).then(res => res.json()).then(data => {
    username = data.data?.userStatus?.username
    if (username === undefined) username = "guest";
    console.log(username);
  })
}

function myMain (e) {
  $ = document.querySelector.bind( document );

  const parent = $(".container__14Na");

  const dividerEl = createElementFromHTML(divider);
  parent.appendChild(dividerEl);

  const side = createElementFromHTML(sidebar);
  parent.appendChild(side);

  $("#create-room").addEventListener('click', createRoom);
  $("#join-room").addEventListener('click', joinRoom);
  $("#leave-room").addEventListener('click', leaveRoom);
  $("#leaderboard").addEventListener('click', showLeaderboard);
  $("#close-leaderboard").addEventListener('click', closeLeaderboard);

  $("#easy-sub").addEventListener('click', changeQuestions);
  $("#easy-add").addEventListener('click', changeQuestions);
  $("#med-sub").addEventListener('click', changeQuestions);
  $("#med-add").addEventListener('click', changeQuestions);
  $("#hard-sub").addEventListener('click', changeQuestions);
  $("#hard-add").addEventListener('click', changeQuestions);

  $("#chatbox").addEventListener('keypress', inputEnterMsg);

  makePrevNextButton();
  $("#question-prev").addEventListener('click', prevQuestion);
  $("#question-next").addEventListener('click', nextQuestion);

  window.onclick = function(event) {
    if (event.target.id === "leaderboard-modal") {
      closeLeaderboard();
    }
  }

  fetchUsername();

  // retrieve current room info
  chrome.runtime.sendMessage({type: "retrieve_room_info"}, function(response) {
    console.log(response);
    if (username === 'undefined') {
      alert("You're not logged into LeetCode, so Rooms will not work.");
    }
  });
}

function submitted(e) {
  var href = $(".detail__1Ye5").getAttribute('href');
  var check = href + "check";
  fetch(check).then(res => res.json()).then(data => {
    const curr_id = currentQuestionId();
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

waitForElm('.btns__1OeZ').then((res) => {myMain(res)});

waitForElm(".detail__1Ye5").then((res) => {submitted(res)});

// keep-alive
setInterval(() => {
  let port = chrome.runtime.connect({name: "keep-alive"});
  port.postMessage({data: 'test'});
}, 1000);