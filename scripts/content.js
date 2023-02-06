let questions = [];
let started = false;
let difficulties = [1, 2, 1];
let username = "user" + Math.round(Math.random() * 100000);
let $;

function createRoom() {
  const room_name = $("#create-room-id").value;
  if (room_name === "" || difficulties.reduce((a, b) => a + b, 0) === 0) return;
  let topics = Array.from(
    document.querySelectorAll("#topic-select input[type=checkbox]")
  )
    .filter((element) => element.checked)
    .map((element) => {
      return element.name;
    });
  let questions = Array.from(
    document.querySelectorAll("#question-select input[type=checkbox]")
  )
    .filter((element) => element.checked)
    .map((element) => {
      return element.name;
    });
  let problemset = document.querySelector("#problemset").value;
  console.log(topics);
  console.log(questions);
  chrome.runtime.sendMessage(
    {
      type: "create_room",
      data: {
        name: username,
        room_name: room_name,
        difficulties: difficulties,
        topics: topics,
        problemset: problemset,
        questions: questions,
      },
    },
    function (response) {
      console.log(response);
    }
  );
}

function joinRoom() {
  const room = $("#join-room-id").value;
  console.log("Trying to join room", room);
  chrome.runtime.sendMessage(
    { type: "join_room", data: { room_id: room, name: username } },
    function (response) {
      console.log(response);
    }
  );
}

function leaveRoom() {
  console.log("Leaving current room");
  $("#room-name").textContent = "Rooms";
  $("#join-or-create").style.display = "block";
  $("#room-size").textContent = "";
  $("#chats").innerHTML = "";
  $("#chat-leave").style.display = "none";
  $("#restart-room").style.display = "none";
  $("#start-room").style.display = "none";
  $("#timer").textContent = "";
  started = false;
  chrome.runtime.sendMessage(
    { type: "leave_room", data: { name: username } },
    function (response) {
      console.log(response);
    }
  );
}

function restartRoom() {
  console.log("Restarting current room");
  started = false;
  chrome.runtime.sendMessage(
    { type: "restart", data: { name: username } },
    function (response) {
      console.log(response);
    }
  );
}

function sendStartRoom() {
  chrome.runtime.sendMessage(
    { type: "ready", data: { name: username } },
    function (response) {
      console.log(response);
    }
  );
}

function startRoom(goToFirst) {
  started = true;
  if (currentQuestionId() === -1) {
    console.log("about to redirect");
    console.log(window.location.href);
    window.location.href = questions[0][1] + "#";
  }
}

function sendMsg() {
  let msg = $("#chatbox").value;
  chrome.runtime.sendMessage(
    { type: "message", data: { message: msg, name: username } },
    function (response) {
      console.log(response);
    }
  );
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
    if (q_name === curr_name) return i;
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
  $("#leaderboard-modal").style.display = "flex";
  chrome.runtime.sendMessage(
    { type: "leaderboard", data: { name: username } },
    function (response) {
      console.log(response);
    }
  );
}

function closeLeaderboard() {
  $("#leaderboard-modal").style.display = "none";
}

function emojifyMessage(message) {
  for (let key in replacements) {
    let repl = `<img alt="${key}" src="${replacements[key]}" width="20px" title="${key}" />`;
    message = message.replace(key, repl);
  }
  return message;
}

function addMessage(data) {
  let user = data.name;
  let message = data.message;
  let type = data.type;
  let newChat;
  if (type === "submission") {
    if (message.includes("completed")) {
      newChat = createElementFromHTML(
        `<p style='${submitPassStyle}'><b>Submission</b>: <span></span></p>`
      );
      newChat.querySelector("span").textContent = message;
    } else if (message.includes("finished")) {
      newChat = createElementFromHTML(
        `<p style='${submitWinStyle}'><b></b></p>`
      );
      newChat.querySelector("b").textContent = message + "🎉🎉";
    } else {
      newChat = createElementFromHTML(
        `<p style='${submitFailStyle}'><b>Submission</b>: <span></span></p>`
      );
      newChat.querySelector("span").textContent = message;
    }
  } else if (type === "chat") {
    newChat = createElementFromHTML(
      `<p style='${chatStyle}'><b>${user}</b>: <span></span> </p>`
    );
    newChat.querySelector("span").textContent = message;
    if (message.includes(username)) {
      newChat.style.borderLeft = mentionStyle;
    }
  } else if (type === "admin") {
    newChat = createElementFromHTML(`<p class="dark:text-dark-blue" style='${adminStyle}'></p>`);
    newChat.textContent = message;
  } else if (type === "start") {
    // TODO
    newChat = createElementFromHTML(`<p class="dark:text-dark-blue" style='${adminStyle}'></p>`);
    newChat.textContent = message;
  }
  newChat.innerHTML = emojifyMessage(newChat.innerHTML);

  const chats = $("#chats");
  const time = new Date(data.time * 1000);
  const hr = time.getHours().toString().padStart(2, "0");
  const mn = time.getMinutes().toString().padStart(2, "0");
  const timeParent = createElementFromHTML(`
  <div style="display: flex; padding: 6px 0;"><span style="margin: auto 0; padding-right: 8px;">${hr}:${mn}</span></div>
  `);
  timeParent.appendChild(newChat);
  chats.appendChild(timeParent);
  chats.scrollTop = chats.scrollHeight;
}

function renderDifficulties() {
  $("#easy-cnt").textContent = "Easy: " + difficulties[0].toString();
  $("#med-cnt").textContent = "Medium: " + difficulties[1].toString();
  $("#hard-cnt").textContent = "Hard: " + difficulties[2].toString();
}

function addIfPossible(id, delta) {
  const res = difficulties[id] + delta;
  if (res >= 0) {
    difficulties[id] = res;
  }
}

function changeQuestions(event) {
  const target = event.target || event.srcElement;
  const id = target.id;
  const delta = id.split("-")[1][0] === "a" ? 1 : -1;
  if (id[0] === "e") addIfPossible(0, delta);
  else if (id[0] === "m") addIfPossible(1, delta);
  else if (id[0] === "h") addIfPossible(2, delta);
  renderDifficulties();
}

// JSON of States for demo purposes

function fetchUsername() {
  return fetch("https://leetcode.com/graphql", {
    headers: {
      "content-type": "application/json",
    },
    body: '{"operationName":"globalData","variables":{},"query":"query globalData {\\n  userStatus {username} }\\n"}',
    method: "POST",
    mode: "cors",
  })
    .then((res) => res.json())
    .then((data) => {
      username = data.data?.userStatus?.username;
      if (username === undefined) username = "guest";
      console.log(username);
    });
}

let uiVersion = "old";

function myMain(ver) {
  $ = document.querySelector.bind(document);

  uiVersion = ver;

  const parent = $(uiStyles["sidebar"][uiVersion]);


  const dividerEl = createElementFromHTML(divider);
  parent.appendChild(dividerEl);

  const side = createElementFromHTML(sidebar);
  parent.appendChild(side);

  $("#create-room").addEventListener("click", createRoom);
  $("#join-room").addEventListener("click", joinRoom);
  $("#leave-room").addEventListener("click", leaveRoom);
  $("#restart-room").addEventListener("click", restartRoom);
  $("#start-room").addEventListener("click", sendStartRoom);
  $("#leaderboard").addEventListener("click", showLeaderboard);
  $("#close-leaderboard").addEventListener("click", closeLeaderboard);

  $("#easy-sub").addEventListener("click", changeQuestions);
  $("#easy-add").addEventListener("click", changeQuestions);
  $("#med-sub").addEventListener("click", changeQuestions);
  $("#med-add").addEventListener("click", changeQuestions);
  $("#hard-sub").addEventListener("click", changeQuestions);
  $("#hard-add").addEventListener("click", changeQuestions);

  $("#chatbox").addEventListener("keypress", inputEnterMsg);

  $("#question-prev").addEventListener("click", prevQuestion);
  $("#question-next").addEventListener("click", nextQuestion);

  window.onclick = function (event) {
    if (event.target.id === "leaderboard-modal") {
      closeLeaderboard();
    }
  };

  //// dropdowns

  // Populate list with states
  usStates.forEach((element) => {
    var stateTemplate = createElementFromHTML(`
      <li> 
      <input name="${element}" type="checkbox">
      <label for="${element}">${element}</label>
      </li>
    `);
    $("#topic-select").appendChild(stateTemplate);
  });

  // Populate list with states
  Object.entries(questions_title_map).forEach((info) => {
    const abbr = info[1];
    const title = info[0];
    var stateTemplate = createElementFromHTML(`
      <li> 
      <input name="${abbr}" type="checkbox">
      <label for="${abbr}">${title}</label>
      </li>
    `);
    $("#question-select").appendChild(stateTemplate);
  });

  // Events
  $("#dropdown-button-1").addEventListener("click", function () {
    const list = $("#dropdown-list-1");
    const curDisplay = list.style.display;
    list.style.display = curDisplay === "none" ? "block" : "none";
  });

  $("#dropdown-button-2").addEventListener("click", function () {
    const list = $("#dropdown-list-2");
    const curDisplay = list.style.display;
    list.style.display = curDisplay === "none" ? "block" : "none";
  });

  $("#dropdown-search-1").addEventListener("keyup", function (event) {
    var target = $("#dropdown-search-1");
    var search = target.value.toLowerCase();

    if (!search) {
      Array.from(document.querySelectorAll("#dropdown-list-1 li")).forEach(
        (element) => {
          element.style.display = "block";
        }
      );
      return false;
    }

    Array.from(document.querySelectorAll("#dropdown-list-1 li")).forEach(
      (element) => {
        element.style.display = "block";
        var text = element.textContent.toLowerCase();
        var match = text.indexOf(search) > -1;
        if (match) {
          element.style.display = "block";
        } else {
          element.style.display = "none";
        }
      }
    );
  });

  $("#dropdown-search-2").addEventListener("keyup", function (event) {
    var target = $("#dropdown-search-2");
    var search = target.value.toLowerCase();

    if (!search) {
      Array.from(document.querySelectorAll("#dropdown-list-2 li")).forEach(
        (element) => {
          element.style.display = "block";
        }
      );
      return false;
    }

    Array.from(document.querySelectorAll("#dropdown-list-2 li")).forEach(
      (element) => {
        element.style.display = "block";
        var text = element.textContent.toLowerCase();
        var match = text.indexOf(search) > -1;
        if (match) {
          element.style.display = "block";
        } else {
          element.style.display = "none";
        }
      }
    );
  });

  Array.from(
    document.querySelectorAll("#topic-select input[type=checkbox]")
  ).forEach((element) => {
    element.addEventListener("change", function () {
      var numChecked = Array.from(
        document.querySelectorAll("#topic-select input[type=checkbox]")
      )
        .map((element) => {
          if (element.checked) return 1;
          return 0;
        })
        .reduce((a, b) => a + b, 0);
      console.log(numChecked);
      $("#quantity-1").textContent = numChecked || "Any";
    });
  });

  Array.from(
    document.querySelectorAll("#question-select input[type=checkbox]")
  ).forEach((element) => {
    element.addEventListener("change", function () {
      var numChecked = Array.from(
        document.querySelectorAll("#question-select input[type=checkbox]")
      )
        .map((element) => {
          if (element.checked) return 1;
          return 0;
        })
        .reduce((a, b) => a + b, 0);
      console.log(numChecked);
      $("#quantity-2").textContent = numChecked || "Any";
    });
  });

  fetchUsername().then((res) => {
    // retrieve current room info
    chrome.runtime.sendMessage(
      { type: "retrieve_room_info", data: { name: username } },
      function (response) {
        console.log(response);
        if (username === "undefined") {
          alert("You're not logged into LeetCode, so Rooms will not work.");
        }
      }
    );
  });

  if (uiVersion === 'new') {
    $('.ssg__qd-splitter-primary-w').style.width = 'calc(25% - 4px)';
    $('.ssg__qd-splitter-secondary-w').style.width = 'calc(50% - 4px)';
    side.style.width = 'calc(25% - 4px)';
  }

  waitForElm(uiStyles["details"][uiVersion]).then((res) => {
    submitted(res);
  });
}

function submitted(e) {
  const href = $(uiStyles["details"][uiVersion]).getAttribute("href");
  let apiCall = href + 'check';
  if (uiVersion === 'new') {
    apiCall = `/submissions/detail/${href.split("submissionId=")[1]}/check`;
  }
  fetch(apiCall)
    .then((res) => res.json())
    .then((data) => {
      const curr_id = currentQuestionId();
      if (started) {
        chrome.runtime.sendMessage(
          {
            type: "submission",
            data: {
              ...data,
              name: username,
              curr_id: curr_id,
              difficulty: questions[curr_id][2],
            },
          },
          function (response) {
            console.log(response);
          }
        );
      }
    });
  waitForElmChange(uiStyles["details"][uiVersion], href).then((res) => {
    submitted(res);
  });
}

waitForAny(uiStyles["waitFor"]).then((res) => {
  myMain(res);
});

// keep-alive
setInterval(() => {
  let port = chrome.runtime.connect({ name: "keep-alive" });
  port.postMessage({ data: "test" });
}, 1000);
