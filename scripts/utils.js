// wait for an element to appear, returns a promise
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

// wait for element's href to change from val, returns promise
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

// the classic create element from HTML
function createElementFromHTML(htmlString) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes.
  return div.firstChild;
}

let timer = 0;

function secToHMS(timer) {
  let res = "";
  // if (timer >= 3600) {
  //   res += Math.floor(timer / 3600).toString().padStart(2, '0') + ":";
  //   timer %= 3600;
  // }
  res += Math.floor(timer / 60).toString().padStart(2, '0') + ":";
  timer %= 60;
  res += timer.toString().padStart(2, '0');
  return res;
}

let timeout = false;

function renderTimer() {
  if (timer > 0 && started) {
    timer -= 1;
    $('#timer').textContent = secToHMS(timer);
    setTimeout(renderTimer, 1000);
  } else {
    timeout = false;
  }
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
          document.querySelector('#chat-leave').style.display = "flex";
          document.querySelector('#join-or-create').style.display = "none";
          document.querySelector('#room-name').textContent = request.data.room_name + " (id=" + request.data.room_id + ")";
        }

        if ('questions' in request.data) {
          questions = request.data.questions;
        }

        // chatlogs
        if ('chatlog' in request.data) {
          document.querySelector("#chats").innerHTML = "";
          for (const chat of request.data.chatlog) {
            addMessage(chat);
          }
        }

        // is owner
        if ('is_owner' in request.data && request.data.is_owner) {
          $('#start-room').style.display = 'block';
          $('#restart-room').style.display = 'block';
        }

        // room started
        if ('is_started' in request.data) {
          if (request.data.is_started)
            startRoom(false);
          else
            started = false;
        }

        // timer
        if ('timer' in request.data) {
          timer = request.data.timer;
          if (!timeout) {
            timeout = setTimeout(renderTimer, 1000);
          }
        }
      } else if (request.type === "message") {
        addMessage(request.data);
      } else if (request.type === "new_owner") {
        $('#start-room').style.display = 'block';
        $('#restart-room').style.display = 'block';
      } else if (request.type === "start") {
        startRoom(true);
      } else if (request.type === "error") {
        alert(request.data.message);
      } else if (request.type === "leaderboard") {
        const response = request.data;
        let table = `
        <table id="scoreboard">
          <thead>
          <tr id="scoreboard-header">
              <td>Name</td>
        `;
        for (const question of questions) {
          const color = difficulty_colors[question[2] - 1];
          const text = question[0];
          table += `<td><a href="${question[1]}" style="color: ${color}">${text}</a></td>`
        }
        table += '<td>Score</td></tr><tbody>'
        for (const ranking of response.rankings) {
          let row = `
          <tr><td>${ranking[0]}</td>
        `;
          for (const status of response.question_status[ranking[0]]) {
            let show = "−";
            console.log(status);
            if (status[0] === 2) {
              show = `<span style="color:black">${secToHMS(Math.floor(status[1]))} ✅</span>`;
            } else if (status[0] === 1) {
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
