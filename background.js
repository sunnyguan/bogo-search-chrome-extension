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
  sendMsg({type: "chatlog", data: room_info.chatlog});
});

socket.on("message", function(data) {
  sendMsg({type: "message", data: data});
});

chrome.runtime.onMessage.addListener(
    function(req, sender, sendResponse) {
      console.log(req);
      if ('data' in req) {
        socket.emit(req.type, req.data);
      } else {
        socket.emit(req.type);
      }
      sendResponse({status: 200});
    }
);