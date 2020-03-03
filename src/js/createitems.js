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
      <button class="dropbtn">Dropdown</button>
      <div class="dropdown-content">
        <a href="#">priority: ${priority}</a>
        <a href="#">description: ${description}</a>
      </div>
    </div> 
      <i class="fa fa-trash-o de" job="delete" id="${id}" ></i>
      </li>`;
    list.insertAdjacentHTML(position, item);
  };

  export {addToDo}