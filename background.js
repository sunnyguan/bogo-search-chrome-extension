import './scripts/socket.io.2.js';

let socket = io("https://8012-153-33-85-75.ngrok.io/", {jsonp: false, transports: ['websocket'], upgrade: false});
console.log("Reconnected");
console.log(socket.id);

function sendMsg(data) {
  console.log(data)
  chrome.tabs.query({url: "https://*.leetcode.com/*"}, function(tabs) {
    console.log(tabs);
    chrome.tabs.sendMessage(tabs[0].id, data, function(response) {
      console.log(response);
    });
  });
}

socket.on("disconnect", () => {
  console.log("DISCONNECTED!!!!!!!!");
});

socket.on("connect", () => {
  console.log("sending reconnect.....!!Ou13q3FJEFJ:WEFJOWEIJFOWEF)WEF*)(FJWEOFIJOWEIFJ");
  console.log(username);
  if (username !== "undefined")
    socket.emit("reconnect", {name: username});
});

socket.on("room_info", function(room_info) {
  console.log(room_info)
  sendMsg({type: "room_info", data: room_info});
});

socket.on("message", function(data) {
  console.log(data);
  sendMsg({type: "message", data: data});
});

socket.on("leaderboard", function(data) {
  console.log(data);
  sendMsg({type: "leaderboard", data: data});
});

socket.on("error", function(data) {
  console.log(data);
  sendMsg({type: "message", data: data});
});

socket.on("new_owner", function(data) {
  console.log(data);
  sendMsg({type: "new_owner", data: data});
});

socket.on("start", function(data) {
  console.log(data);
  sendMsg({type: "start", data: data});
});

let username = "undefined";

chrome.runtime.onMessage.addListener(
    function(req, sender, sendResponse) {
      console.log(req);
      if (req.type === "retrieve_room_info") {
        username = req.data.name;
        console.log("set username to " + username);
      }
      if ('data' in req) {
        socket.emit(req.type, req.data);

      } else {
        socket.emit(req.type);
      }
      sendResponse({status: 200});
    }
);

let lastMsgTime = Date.now();

// keep-alive
chrome.runtime.onConnect.addListener((port) => {
  port.onMessage.addListener(msg => {
    lastMsgTime = Date.now();
    // console.log(msg);
  })
});

const timeout = 60;

let check = setInterval(() => {
  // console.log("Checking")
  if (Date.now() - lastMsgTime >= 1000 * timeout) {
    socket.emit("leave_room");
    clearInterval(check);
  }
}, 1000);

let heartbeat = setInterval(() => {
  socket.emit("heartbeat");
}, 1000);