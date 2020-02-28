import "./css/style.css";
// import { library, dom } from "@fortawesome/fontawesome-svg-core";
// import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";

// library.add(faCheck);
// dom.watch();

const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

const LIST = [];
let id = 0;

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
    <p class="text ${LINE} co"> ${toDo} </p>
    <i class="fa fa-trash-o de" job="delete" id="${id}" ></i>
    `;
  list.insertAdjacentHTML(position, item);
};

//const getForm = document.getElementById('form');

document.addEventListener("click", event => {
  if (event.keyCode == 13) {
    const toDo = input.value;
    if (toDo) {
      addToDo(toDo, id, false, false);
      LIST.push({
        name: toDo,
        id: id,
        done: false,
        trash: false
      });
      id++;
    }
    input.value = "";
  }
});

const completeToDo = element => {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

  LIST[element.id].done = LIST[element.id].done ? false : true;
};

const removeToDo = element => {
  element.parentNode.parentNode.removeChild(element.parentNode);
  LIST[element.id].trash = true;
};

list.addEventListener("click", event => {
  const element = event.target;
  const elementJob = element.attributes.job.value;

  if (elementJob == "complete") {
    completeToDo(element);
  } else if (elementJob == "delete") {
    removeToDo(element);
  }
});
