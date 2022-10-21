import './scripts/socket.io.2.js';

let socket = io("https://a096-153-33-85-75.ngrok.io/", {jsonp: false});

function sendMsg(data) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, data, function(response) {
      console.log(response);
    });
  });
}

socket.on('current_room_number', function(rooms) {
  console.log("Current room number: ", rooms);
  sendMsg({type: "room_num", data: rooms});
})

socket.on('current_players', function(player) {
  console.log("Current room size: ", player);
  sendMsg({type: "room_size", data: player});
})

chrome.runtime.onMessage.addListener(
    function(req, sender, sendResponse) {
      if (req.type === "create") {
        socket.emit("create_room", {name: req.name});
        sendResponse({status: 200});
      } else if (req.type === "join") {
        socket.emit("join_room", req.room, {name: req.name});
        sendResponse({status: 201});
      } else if (req.type === "leave") {
        socket.emit("leave_room");
        sendResponse({status: 202});
      }
    }
);