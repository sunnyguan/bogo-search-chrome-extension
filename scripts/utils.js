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

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.log(request);
      if (request.type === "room_info") {
        if ('players' in request.data) {
          document.querySelector('#room-size').innerHTML = "<b>Players: </b>" + request.data.players.join(", ");
        }

        if ('room_id' in request.data) {
          console.log("here")
          document.querySelector('#room-id').textContent = "In Room";
          document.querySelector('#chat-leave').style.display = "flex";
          document.querySelector('#join-or-create').style.display = "none";
          document.querySelector('#room-name').textContent = request.data.room_name + " (id=" + request.data.room_id + ")";
        }

        if ('questions' in request.data) {
          questions = request.data.questions;
          let question_str = "";
          for (let question of request.data.questions) {
            let question_name = question[0];
            let question_url = question[1];
            question_str += `<p><a href='${question_url}'>${question_name}</a></p>`
          }
          // document.querySelector('#questions').innerHTML = question_str;

          if (currentQuestionId() === -1) {
            console.log("about to redirect");
            console.log(window.location.href);
            window.location.href = request.data.questions[0][1];
          }
        }

        // chatlogs
        if ('chatlog' in request.data) {
          document.querySelector("#chats").innerHTML = "";
          for (const chat of request.data.chatlog) {
            addMessage(chat);
          }
        }
      } else if (request.type === "message") {
        addMessage(request.data);
      } else if (request.type === "leaderboard") {
        const response = request.data;
        console.log(request.data);
        let table = `
        <table id="scoreboard">
          <thead>
          <tr id="scoreboard-header">
              <td>Name</td>
        `;
        for (const question of questions) {
          const color = difficulty_colors[question[2] - 1];
          table += `<td style="color: ${color}">${question[0]}</td>`
        }
        table += '<td>Score</td></tr><tbody>'
        for (const ranking of response.rankings) {
          let row = `
            <tr><td>${ranking[0]}</td>
          `;
          for (const status of response.question_status[ranking[0]]) {
            let show = "−";
            if (status === 2) {
              show = "✅";
            } else if (status === 1) {
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
