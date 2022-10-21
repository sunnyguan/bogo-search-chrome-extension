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

function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes.
  return div.firstChild;
}

function createRoom() {
  chrome.runtime.sendMessage({type: "create", name: username}, function(response) {
    console.log(response);
  });
}

function joinRoom() {
  const room = document.querySelector("#join-room-id").value;
  console.log("Trying to join room", room);
  chrome.runtime.sendMessage({type: "join", room: room, name: username}, function(response) {
    console.log(response);
  });
}

function leaveRoom() {
  console.log("Leaving current room");
  chrome.runtime.sendMessage({type: "leave"}, function(response) {
    console.log(response);
  });
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.type === "room_size") {
        console.log("Room size", request.data);
        document.querySelector('#room-size').textContent = "Room size: " + request.data;
      } else if (request.type === "room_num") {
        console.log("Room number", request.data);
        document.querySelector('#room-id').textContent = "Room id: " + request.data;
      }
      sendResponse({farewell: "goodbye"});
    }
);

const sidebar = `<div style="">
<div id="room-id" style="margin: auto 10px auto 10px">
  Not in room yet
</div>
<div id="room-size" style="margin: auto 10px auto 10px">
</div>
<button id="create-room" class="btn__1z2C btn-sm__2msL" data-no-border="true"
        icon="information">
        Create Room
</button>
<div style="display: flex">
  <input type="text" id="join-room-id" />
  <button id="join-room" class="btn__1z2C btn-sm__2msL" data-no-border="true"
          icon="information">
          Join Room
  </button>
</div>
<div style="display: flex">
  <button id="leave-room" class="btn__1z2C btn-sm__2msL" data-no-border="true"
          icon="information">
          Leave Room
  </button>
</div>
</div>`

let username = "user" + Math.round(Math.random() * 100);

waitForElm('.btns__1OeZ').then((res) => {myMain(res)});

function myMain (e) {
  const parent = document.querySelector(".container__14Na");
  const side = createElementFromHTML(sidebar);
  side.querySelector("#create-room").addEventListener('click', createRoom);
  side.querySelector("#join-room").addEventListener('click', joinRoom);
  side.querySelector("#leave-room").addEventListener('click', leaveRoom);
  parent.appendChild(side);

  window.onbeforeunload = function(e) {
    leaveRoom();
  }

  username = document.querySelector(".user-name__35Mk").textContent;
}