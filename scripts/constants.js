

const chatStyle = 'background-color: #5da3f5; color: white; padding: 4px 8px;border-radius: 0.75rem; clear: both; float: left; margin-bottom: 8px;';
const adminStyle = 'color: darkblue; padding: 4px 8px;';

const difficulty_colors = ['green', 'rgb(239, 108, 0)', 'red'];

const divider = `<div style="width: 10px;background-color: #eeeeee;height: 100%"></div>`;

const sidebar = `
<div style="display: flex;flex-direction: column; max-width:30%;min-width: 15%;background-color: #fafafa;">
    <div style="background: rgb(250, 250, 250); margin: 20px 20px 0 20px; padding-bottom: 10px; border-bottom: 1px solid lightgray" id="room-name" class="css-v3d350">Rooms</div>
    <div style="
    padding: 20px;
    display: flex;
    flex-direction: column;
    height: fit-content;
    flex-grow: 1;
">
<style>
button.join-create-room {
    background: rgb(93, 163, 245);
    border: 2px solid rgb(93, 163, 245);
    border-radius: 0.5rem;
    color: white;
    cursor: pointer;
    font-weight: bold;
    margin: auto;
    padding: 6px;
}
button.join-create-room:hover {
    border: 2px solid blue;
}
button.join-create-room:active {
    background: dodgerblue;
}
#leave-room {
    border: 2px solid salmon;
    background: lightsalmon;
    padding: 4px;
}
#leave-room:hover {
    border: 2px solid orangered;
}
#leave-room:active {
    background: orangered;
}
.input-box {
    flex-grow: 1;
    padding: 5px;
    border: 2px solid rgb(93, 163, 245);
    border-radius: 0.5rem;
    margin-bottom: 8px;
}
#chatbox {
  margin-right: 0;
}

/* The Modal (background) */
#leaderboard-modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
}

/* The Close Button */
#close-leaderboard {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  margin-right: 16px;
}

#close-leaderboard:hover,
#close-leaderboard:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

#scoreboard td {
    text-align: center; 
    vertical-align: middle;
}

#scoreboard {
    width: 100%;
    border-spacing: 16px 10px;
    border-collapse: separate;
}

#scoreboard thead tr {
    font-weight: bold;
}
</style>
<style>
button.rooms {
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 24px;
  border: 2px solid #f2af29;
  transition: all 0.3s ease;
}
button.rooms::after {
  content: "←";
  font-size: 16px;
  color: #f2af29;
  transition: all 0.3s ease;
}

button#question-next::after {
 content: "→"
}

button.rooms:hover {
  border-color: #14519f;
}

button.rooms:hover::after {
  color: #14519f;
}

button.rooms:active {
  border-color: red;
}

button.rooms:active::after {
  color: red;
}
</style>
<div style="display: flex; flex-direction: column;
">

<div id="join-or-create" style="margin: auto">
<div style="display: flex; flex-direction: column; margin-bottom: 16px; padding-bottom:16px; 
border-bottom: 2px solid lightgray;">
  <input type="text" id="join-room-id" class="input-box" />
  <button id="join-room" class="join-create-room" data-no-border="true" icon="information">
          Join Room
  </button>
</div>

<div style="text-align: center; margin: 10px 0 10px 0;">
<p>Choose 4 question difficulties:</p>
<table style="width: 100%">
<tbody>
<tr>
<td><button id="easy-sub" class="join-create-room" >−</button></td>
<td id="easy-cnt">Easy: 1</td>
<td><button id="easy-add" class="join-create-room" >+</button></td>
</tr>

<tr>
<td><button id="med-sub" class="join-create-room" >−</button></td>
<td id="med-cnt">Medium: 2</td>
<td><button id="med-add" class="join-create-room" >+</button></td>
</tr>

<tr>
<td><button id="hard-sub" class="join-create-room" >−</button></td>
<td id="hard-cnt">Hard: 1</td>
<td><button id="hard-add" class="join-create-room" >+</button></td>
</tr>
</tbody>
</table>
</div>
<div style="display: flex; flex-direction: column; margin-bottom: 10px;">
  <input type="text" id="create-room-id" class="input-box" />
  <button id="create-room" class="join-create-room" data-no-border="true" icon="information">
          Create Room
  </button>
</div>

</div>
</div>
<div id="chat-leave" style="display: none; height: 100%; flex-direction: column;">
<div style="display: flex;margin-bottom: 10px;">
<span style="margin: auto 0 auto 0"><b>Status: </b></span>
<div id="room-id" style="margin: auto 10px auto 10px; flex-grow: 1">
  Not In Room
</div>
<button id="leaderboard" class="join-create-room" style="padding: 5px">Leaderboard</button>
<div id="leaderboard-modal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span id="close-leaderboard">&times;</span>
    <h3 style="
    width: 100%;
    text-align: center;
    margin-top: 10px;
">Leaderboard</h1>
    <table id="scoreboard">
    </table>
  </div>

</div>

</div>
<div id="room-size" style="margin-bottom: 10px">
</div>
<div id="questions">
</div>
<div id="chat-container" style="flex-grow: 1;border-radius: 1rem;background: #eeeeee;display: flex;flex-direction: column;"><div id="chats" style="
    flex-grow: 1;
    height: 0;
    overflow-y: scroll;
    padding: 20px;
">
</div>
</div>
<div style="
    display: flex;
    margin-top: 10px;
    margin-bottom: 20px;
"><input type="text" placeholder="Enter message here" id="chatbox" class="input-box" />
</div><div style="display: flex;">
  <button id="leave-room" class="join-create-room" data-no-border="true" icon="information" style="
    flex-grow: 1;
">
          Leave Room
  </button>
</div>
</div>
    </div>
</div>
`

