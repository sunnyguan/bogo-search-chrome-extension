import './scripts/socket.io.2.js';

let socket = io("https://a7ed-153-33-85-75.ngrok.io/", {jsonp: false});
console.log("Reconnected");
console.log(socket.id);

function sendMsg(data) {
  console.log(data)
  chrome.tabs.query({url: "https://*.leetcode.com/*", currentWindow: true}, function(tabs) {
    console.log(tabs);
    chrome.tabs.sendMessage(tabs[0].id, data, function(response) {
      console.log(response);
    });
  });
}

socket.on("room_info", function(room_info) {
  console.log(room_info)
  sendMsg({type: "room_info", data: room_info});
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