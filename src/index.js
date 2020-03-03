import "./css/style.css";

const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");
const priority= document.getElementById('priority')
const description= document.getElementById('description')
const submit = document.getElementById('submit')

const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

const myStorage = window.localStorage;

let LIST;
if(myStorage.getItem('storagelist') === null) {
    LIST = [];
}else {
    LIST= JSON.parse(myStorage.getItem('storagelist'));
}

let id;
if(myStorage.getItem('storageid') === null) {
    id = 0;
}else {
    id= JSON.parse(myStorage.getItem('storageid'));
}

const save = () => {myStorage.setItem('storagelist', JSON.stringify(LIST));
                   myStorage.setItem('storageid', id);
                   };
                  
                  
//const LIST = JSON.parse(myStorage.getItem('storage')) || [];
// const LIST = [];
//let id = myStorage.getItem('storageid') || 0;


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
      <a href="#">priority: ${priority.value}</a>
      <a href="#">description: ${description}</a>
    </div>
  </div> 
    <i class="fa fa-trash-o de" job="delete" id="${id}" ></i>
    </li>`;
  list.insertAdjacentHTML(position, item);
};

submit.addEventListener("click", event => {
    const toDo = input.value;
    const textarea = description.value
if (toDo) {
    addToDo(toDo, id, false, false, priority, textarea);
    LIST.push({
      name: toDo,
      id: id,
      done: false,
      trash: false,
      priority: priority.value,
      description: description
    });
    id++;
    save();
  }
  input.value = "";
  description.value = "";
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
