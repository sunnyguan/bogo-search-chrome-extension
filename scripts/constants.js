const chatStyle =
  "background-color: #5da3f5; color: white; padding: 4px 8px;border-radius: 0.75rem; clear: both; float: left; margin-bottom: 0;";
const adminStyle =
  "clear: both; padding-left: 8px; margin-bottom: 0;";
const submitPassStyle =
  "background-color: #009E60; color: white; padding: 4px 8px;border-radius: 0.75rem; clear: both; float: left; margin-bottom: 0; ";
const submitWinStyle =
  "background-color: hotpink; color: white; padding: 4px 8px;border-radius: 0.75rem; clear: both; float: left; margin-bottom: 0; ";
const submitFailStyle =
  "background-color: #e32636; color: white; padding: 4px 8px;border-radius: 0.75rem; clear: both; float: left; margin-bottom: 0;";

const difficulty_colors = ["green", "rgb(239, 108, 0)", "red"];

const replacements = {
  ":biggwiggle:":
    "https://cdn.discordapp.com/emojis/1022965811498979378.gif?size=96&quality=lossless",
  ":bigwiggle:":
    "https://cdn.discordapp.com/emojis/1022965811498979378.gif?size=96&quality=lossless",
  ":thonk:":
    "https://cdn.discordapp.com/emojis/539305279217598474.webp?size=96&quality=lossless",
  ":wazowskistare:":
    "https://cdn.discordapp.com/emojis/752943231104188518.webp?size=96&quality=lossless",
  ":blush:":
    "https://cdn.discordapp.com/emojis/807494943022120980.webp?size=96&quality=lossless",
  ":flushdoggo:":
    "https://cdn.discordapp.com/emojis/810005130299572264.webp?size=96&quality=lossless",
  ":peeposhy:":
    "https://cdn.discordapp.com/emojis/734089702638092359.gif?size=96&quality=lossless",
  ":catyesnod:":
    "https://cdn.discordapp.com/emojis/771217244092104735.gif?size=96&quality=lossless",
  ":this_tbh:":
    "https://cdn.discordapp.com/emojis/804408341815754812.webp?size=96&quality=lossless",
  ":pepemoney:":
    "https://cdn.discordapp.com/emojis/933157489267048558.gif?size=96&quality=lossless",
  ":prayge:":
    "https://cdn.discordapp.com/emojis/867052598446915605.webp?size=96&quality=lossless",
  ":blobthx:":
    "https://cdn.discordapp.com/emojis/838079891978190859.webp?size=96&quality=lossless",
  ":kek:":
    "https://cdn.discordapp.com/emojis/696881519498625056.webp?size=240&quality=lossless",
  ":run:":
    "https://cdn.discordapp.com/emojis/656719083793809408.gif?size=240&quality=lossless",
  ":ez:":
    "https://cdn.discordapp.com/emojis/914000665875984385.webp?size=240&quality=lossless",
  ":pog:":
    "https://cdn.discordapp.com/emojis/620029063276265472.webp?size=240&quality=lossless",
  ":sunny:":
    "https://cdn.discordapp.com/emojis/1038352130416848996.webp?size=96&quality=lossless",
  ":sunnyy:":
    "https://cdn.discordapp.com/emojis/1038352151413530674.webp?size=96&quality=lossless",
};

const usStates = [
  "Array",
  "Backtracking",
  "Biconnected Component",
  "Binary Indexed Tree",
  "Binary Search",
  "Binary Search Tree",
  "Binary Tree",
  "Bit Manipulation",
  "Bitmask",
  "Brainteaser",
  "Breadth-First Search",
  "Bucket Sort",
  "Combinatorics",
  "Concurrency",
  "Counting",
  "Counting Sort",
  "Data Stream",
  "Database",
  "Depth-First Search",
  "Design",
  "Divide and Conquer",
  "Doubly-Linked List",
  "Dynamic Programming",
  "Enumeration",
  "Eulerian Circuit",
  "Game Theory",
  "Geometry",
  "Graph",
  "Greedy",
  "Hash Function",
  "Hash Table",
  "Heap (Priority Queue)",
  "Interactive",
  "Iterator",
  "Line Sweep",
  "Linked List",
  "Math",
  "Matrix",
  "Memoization",
  "Merge Sort",
  "Minimum Spanning Tree",
  "Monotonic Queue",
  "Monotonic Stack",
  "Number Theory",
  "Ordered Set",
  "Prefix Sum",
  "Probability and Statistics",
  "Queue",
  "Quickselect",
  "Radix Sort",
  "Randomized",
  "Recursion",
  "Rejection Sampling",
  "Reservoir Sampling",
  "Rolling Hash",
  "Segment Tree",
  "Shell",
  "Shortest Path",
  "Simulation",
  "Sliding Window",
  "Sorting",
  "Stack",
  "String",
  "String Matching",
  "Strongly Connected Component",
  "Suffix Array",
  "Topological Sort",
  "Tree",
  "Trie",
  "Two Pointers",
  "Union Find",
];

const uiStyles = {
  sidebar: {
    old: ".container__14Na",
    new: "#qd-content",
  },
  waitFor: {
    old: ".btns__1OeZ",
    new: "div.ssg__qd-splitter-primary-h",
  },
  prevNext: {
    old: ".css-v3d350",
    new: "#qd-content > div.h-full.flex-col.ssg__qd-splitter-primary-w > div > div > div > div.flex.h-full.w-full.overflow-y-auto > div > div > div.w-full.px-5.pt-4 > div > div:nth-child(1) > div.flex-1 > div > div > span",
  },
  details: {
    old: ".detail__1Ye5",
    new: "#qd-content > div.h-full.flex-col.ssg__qd-splitter-secondary-w > div > div.min-h-0.flex-grow.ssg__qd-splitter-primary-h > div > div.flex.h-full.w-full.flex-col.overflow-hidden > div.bg-layer-1.dark\\:bg-dark-layer-1.flex.h-full.w-full.flex-col.overflow-auto.p-5 > div.mb-4.flex.w-full.items-start.justify-between > div.flex.items-center.gap-4 > a",
  },
};

const removeDivider =
  "#qd-content > div.h-full.flex-col.ssg__qd-splitter-primary-w > div > div > div > div.flex.h-full.w-full.overflow-y-auto > div > div > div.w-full.px-5.pt-4 > div > div:nth-child(1) > div.flex-1 > div > div > div";

const mentionStyle = "20px solid #f3c339";

const divider = `<div style="width: 10px;height: 100%"></div>`;

const sidebar = `
<div class="bg-layer-bg dark:bg-dark-layer-bg" 
     style="overflow-y: scroll; display: flex;flex-direction: column; max-width:30%;min-width: 15%;">
    <div style="min-height: 44px; padding-right: 5px; display:flex; align-items: center;" 
    class="css-v3d350">
    <span style="flex-grow: 1" id="room-name">Rooms</span>
    <span >⏰<span id="timer" style="margin-left: 8px;"></span></span></div>
    <div style="
    padding: 20px;
    display: flex;
    flex-direction: column;
    height: fit-content;
    flex-grow: 1;
" class="bg-layer-1 dark:bg-dark-layer-1">
<style>
button.join-create-room {
    /*background: rgb(93, 163, 245);*/
    border: 2px solid rgb(93, 163, 245);
    border-radius: 0.5rem;
    /*color: white;*/
    cursor: pointer;
    font-weight: 500;
    margin: auto;
    padding: 6px;
}
button.join-create-room:hover {
    border: 2px solid blue;
}
button.join-create-room:active {
    /* background: dodgerblue; */
}
#leave-room {
    border: 2px solid salmon;
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
  max-width: 80%;
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

.dropdown-container, .instructions {
  width: 100%;
  margin: 5px 0;
  font-size: 14px;
  font-family: sans-serif;
  overflow: auto;
}

.instructions {
  width: 100%;
  text-align: center;
}

.dropdown-button {
  float: left;
  width: 100%;
  /*background: whitesmoke;*/
  padding: 5px 10px;
  text-align: center;
  cursor: pointer;
  border: 1px solid gray;
  box-sizing: border-box;
}
.dropdown-button .dropdown-label, .dropdown-button .dropdown-quantity {
  float: left;
}
.dropdown-button .dropdown-quantity {
  margin-left: 4px;
}
.dropdown-button .fa-filter {
  float: right;
}

.dropdown-list {
  float: left;
  width: 100%;
  border: 1px solid lightgray;
  border-top: none;
  box-sizing: border-box;
  padding: 10px 12px;
}
.dropdown-list input[type=search] {
  padding: 5px 0;
}
.dropdown-list ul {
  margin: 10px 0;
  max-height: 200px;
  overflow-y: auto;
}
.dropdown-list ul input[type=checkbox] {
  position: relative;
  top: 2px;
}
#topic-select li {
  list-style: none;
}
</style>
<style>
button.rooms {
  width: 30px;
  height: 30px;
  border-radius: 24px;
  border: 2px solid #f2af29;
  transition: all 0.3s ease;
  cursor: pointer;
  margin: 8px;
  
}
button.rooms::after {
  content: "←";
  font-size: 16px;
  position: relative;
  top: -1px;
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
  <input type="text" id="join-room-id" class="input-box" placeholder="Room name or id" />
  <button id="join-room" class="join-create-room" data-no-border="true" icon="information">
          Join Room
  </button>
</div>

<div style="text-align: center; margin: 10px 0 10px 0;">
<p><b>Choose question difficulties:</b></p>
<table style="width: 100%">
<tbody>
<tr>
<td><button id="easy-sub" class="join-create-room">−</button></td>
<td id="easy-cnt">Easy: 1</td>
<td><button id="easy-add" class="join-create-room">+</button></td>
</tr>

<tr>
<td><button id="med-sub" class="join-create-room">−</button></td>
<td id="med-cnt">Medium: 2</td>
<td><button id="med-add" class="join-create-room">+</button></td>
</tr>

<tr>
<td><button id="hard-sub" class="join-create-room">−</button></td>
<td id="hard-cnt">Hard: 1</td>
<td><button id="hard-add" class="join-create-room">+</button></td>
</tr>
</tbody>
</table>
</div>

<div class="instructions" style="margin-bottom: 16px"><b>Choose topics (optional):</b></div>
<div class="dropdown-container" style="
">
    <div id="dropdown-button-1" class="dropdown-button noselect" style="
    border-radius: 1rem;
">
        <div class="dropdown-label">Topics</div>
        <div class="dropdown-quantity">(<span id="quantity-1" class="quantity">All</span>)</div>
        <i class="fa fa-filter"></i>
    </div>
    <div class="dropdown-list dark:bg-dark-layer-1 bg-white" id="dropdown-list-1" style="display: none; position: absolute; width: 200px; margin-top: 43px;">
        <input type="search" placeholder="Search Topics" id="dropdown-search-1" class="dropdown-search input-box" style="border-color: lightgray;width: 100%;text-align: center;">
        <ul id="topic-select" style="
    padding: 14px 0 0 0;
    border-top: 2px solid lightgray;
"></ul>
    </div>
</div>

<div class="instructions" style="margin-top: 16px;"><b>Choose problem sets (optional):</b></div>
<div class="custom-select">
  <select id="problemset" style="
    width: 100%;
    margin: 5px 0 10px 0;
    border-radius: 1rem;
    padding: 5px;
    border: 1px solid gray;
    /*background: whitesmoke;*/
    text-align: center;
    
">
    <option value="all">All</option>
    <option value="blind75">Blind 75</option>
    <option value="neetcode150">Neetcode 150</option>
  </select>
</div>

<div class="instructions" style="margin-bottom: 16px"><b>Choose questions (optional):</b></div>
<div class="dropdown-container" style="
">
    <div id="dropdown-button-2" class="dropdown-button noselect" style="
    border-radius: 1rem;
">
        <div class="dropdown-label">Questions</div>
        <div class="dropdown-quantity">(<span id="quantity-2" class="quantity">Any</span>)</div>
        <i class="fa fa-filter"></i>
    </div>
    <div id="dropdown-list-2" class="dropdown-list dark:bg-dark-layer-1 bg-white" style="display: none; position: absolute; width: 200px; margin-top: 43px;">
        <input type="search" placeholder="Search Questions" id="dropdown-search-2" class="dropdown-search input-box" style="border-color: lightgray;width: 100%;text-align: center;">
        <ul id="question-select" style="
    padding: 14px 0 0 0;
    border-top: 2px solid lightgray;
"></ul>
    </div>
</div>

<div style="display: flex; flex-direction: column; margin-bottom: 10px; margin-top: 16px;">
  <input type="text" id="create-room-id" class="input-box" placeholder="Room Name">
  <button id="create-room" class="join-create-room" data-no-border="true" icon="information">
          Create Room
  </button>
</div>

</div>
</div>
<div id="chat-leave" style="display: none; height: 100%; flex-direction: column;">


<div style="display: flex;">
<div id="room-size" style="margin: auto; flex-grow: 1">
</div>
<button id="leaderboard" class="join-create-room" style="padding: 5px">Leaderboard</button>
<div id="leaderboard-modal" class="modal">

  <!-- Modal content -->
  <div class="modal-content dark:bg-dark-layer-1">
    <span id="close-leaderboard">×</span>
    <h3 style="
    width: 100%;
    text-align: center;
    margin-top: 10px;
">Leaderboard</h3>
  <div style="overflow-x: scroll">
    <table id="scoreboard">
    </table>
  </div>
  </div>

</div>

</div>
<div style="
    display: flex;
    width: 100%;
">
  <button id="question-prev" class="rooms" style="flex-grow: 1"></button>
  <button id="question-next" class="rooms" style="flex-grow: 1"></button>
</div>


<div id="questions">
</div>
<div id="chat-container" class="bg-layer-1 dark:bg-dark-layer-2" style="flex-grow: 1;border-radius: 1rem;display: flex;flex-direction: column;"><div id="chats" style="
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
"><input type="text" placeholder="Enter message here" id="chatbox" class="input-box" style="padding-left: 8px;">
</div>


<div style="display: flex;">
<button id="start-room" class="join-create-room" data-no-border="true" icon="information" style="
    flex-grow: 1; margin-right: 10px; display: none;
">
          Start Room
</button>
  <button id="restart-room" class="join-create-room" data-no-border="true" icon="information" style="
    flex-grow: 1; margin-right: 10px; display: none;
">
          Stop Room
  </button>
  <button id="leave-room" class="dark:text-white join-create-room" data-no-border="true" icon="information" style="
    flex-grow: 1;
">
          Leave Room
  </button>
</div>
</div>
    </div>
</div>`;
