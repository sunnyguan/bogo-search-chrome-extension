import './scripts/socket.io.2.js';

let socket = io("https://592e-153-33-85-75.ngrok.io/", {jsonp: false});

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

socket.on("list_of_leetcode_questions", function(questions) {
  sendMsg({type: "questions", data: questions});
});

socket.on("room_info", function(room_info) {
  console.log(room_info)
  sendMsg({type: "room_num", data: room_info.room_id});
  sendMsg({type: "players", data: room_info.players});
  sendMsg({type: "questions", data: room_info.questions});
});

socket.on("message", function(data) {
  sendMsg({type: "message", data: data});
});

chrome.runtime.onMessage.addListener(
    function(req, sender, sendResponse) {
      console.log(req)
      if (req.type === "create") {
        socket.emit("create_room", {name: req.name});
        sendResponse({status: 200});
      } else if (req.type === "join") {
        socket.emit("join_room", req.room, {name: req.name});
        sendResponse({status: 201});
      } else if (req.type === "leave") {
        socket.emit("leave_room");
        sendResponse({status: 202});
      } else if (req.type === "retrieve_room_info") {
        socket.emit("retrieve_room_info");
        sendResponse({status: 203});
      } else if (req.type === "message") {
        socket.emit("message", req.msg);
        sendResponse({status: 204});
      }
    }
);