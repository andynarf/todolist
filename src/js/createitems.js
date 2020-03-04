const CHECK = 'fa-check-circle';
const UNCHECK = 'fa-circle-thin';
const LINE_THROUGH = 'lineThrough';
const list = document.getElementById('list');


const addToDo = (toDo, id, done, trash, priority, description, date) => {
  if (trash) {
    return;
  }

  const DONE = done ? CHECK : UNCHECK;
  const LINE = done ? LINE_THROUGH : '';
  const position = 'beforeend';
  const item = `
      <li class="item">
      <i class="fa ${DONE} co" job="complete" id="${id}"></i>
      <p class="text ${LINE} co"> ${toDo}  </p>
      <div class="dropdown">
      <button class="dropbtn">Details</button>
      <div class="dropdown-content">
        <a href="#"><b>Date:</b> ${date}</a>
        <a href="#"><b>Priority:</b> ${priority}</a>
        <a href="#"><b>Description:</b> ${description}</a>
      </div>
    </div> 
      <i class="fa fa-trash-o de" job="delete" id="${id}" ></i>
      </li>`;
  list.insertAdjacentHTML(position, item);
};


export {
  addToDo,
  CHECK,
  UNCHECK,
  LINE_THROUGH,
};
