import "./css/style.css";
import skeleton from "./js/skeleton";

document.getElementById("skeletonid").innerHTML= skeleton;

const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");
const date = document.getElementById("start");
const priority = document.getElementById("priority");
const description = document.getElementById("description");
const submit = document.getElementById("submit");

const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

let myStorage = JSON.parse(window.localStorage.getItem("TODOS"));
if (myStorage == null) {
  myStorage = [];
}

let id = window.localStorage.getItem("ids");
if (id == null) {
  id = 0;
}

function updateLocalStorage(array) {
  window.localStorage.setItem("TODOS", JSON.stringify(array));
  window.localStorage.setItem("ids", id); }

const loadToDo = localStorage => {
  localStorage.forEach(elem => {
    addToDo(
      elem.name,
      elem.id,
      elem.done,
      elem.trash,
      elem.priority,
      elem.description,
      elem.date
    );
  });
};



const options = { weekday: "long", month: "short", day: "numeric" };
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

const addToDo = (toDo, id, done, trash, priority, description) => {
  if (trash) {
    return;
  }

  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : "";
  const position = "beforeend";
  const item = `
    <li class="item">
    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
    <p class="text ${LINE} co"> ${toDo}  </p>
    <div class="dropdown">
    <button class="dropbtn">Details</button>
    <div class="dropdown-content">
      <a href="#"><b>Date:</b> ${date.value}</a>
      <a href="#"><b>Priority:</b> ${priority.value}</a>
      <a href="#"><b>Description:</b> ${description}</a>
    </div>
  </div> 
    <i class="fa fa-trash-o de" job="delete" id="${id}" ></i>
    </li>`;
  list.insertAdjacentHTML(position, item);
};

submit.addEventListener("click", event => {
  const toDo = input.value;
  const textarea = description.value;
  const datevalue = date.value;
  if (toDo) {
    addToDo(toDo, id, false, false, priority, textarea, datevalue);
    myStorage.push({
      name: toDo,
      id: id,
      done: false,
      trash: false,
      priority: priority.value,
      description: textarea,
      date: datevalue
    });
    id++;
    updateLocalStorage(myStorage);
    console.log(myStorage);
  }
  input.value = "";
  description.value = "";
});

const completeToDo = element => {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

  myStorage[element.id].done = myStorage[element.id].done ? false : true;
};

const removeToDo = element => {
  element.parentNode.parentNode.removeChild(element.parentNode);
  myStorage[element.id].trash = true;
  updateLocalStorage(myStorage);
  console.log(myStorage);
};

list.addEventListener("click", event => {
  const element = event.target;
  const elementJob = element.attributes.job.value;

  if (elementJob == "complete") {
    completeToDo(element);
    updateLocalStorage(myStorage);
  } else if (elementJob == "delete") {
    removeToDo(element);
    updateLocalStorage(myStorage);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  loadToDo(myStorage);
});
