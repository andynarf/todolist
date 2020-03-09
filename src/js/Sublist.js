export class Sublist {

    const LIST = [];
    let id = 0;

    const name = document.getElementById('input');
    const date = document.getElementById('start');
    const priority = document.getElementById('priority');
    const description = document.getElementById('description');

    const CHECK = 'fa-check-circle';
    const UNCHECK = 'fa-circle-thin';
    const LINE_THROUGH = 'lineThrough';




    constructor(name, id, done, trash, priority, description, date) {
        this.name = name,
            this.id = id,
            this.done = done,
            this.trash = trash,
            this.priority = priority,
            this.description = description,
            this.date = date,

    };

    const completeToDo = element => {
        element.classList.toggle(CHECK);
        element.classList.toggle(UNCHECK);
        element.parentNode.querySelector('.text').classList.toggle(LINE_THROUGH);

        LIST[element.id].done = !LIST[element.id].done;
    };

    const removeToDo = element => {
        element.parentNode.parentNode.removeChild(element.parentNode);
        LIST[element.id].trash = true;
        //   updateLocalStorage(LIST);
    };

    list.addEventListener('click', event => {
        const element = event.target;
        const elementJob = element.attributes.job.value;

        if (elementJob === 'complete') {
            completeToDo(element);
            // updateLocalStorage(LIST);
        } else if (elementJob === 'delete') {
            removeToDo(element);
            // updateLocalStorage(LIST);
        }
    });
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


    const loadToDo = (LIST) => {
        LIST.forEach(elem => {
            addToDo(
                elem.name,
                elem.id,
                elem.done,
                elem.trash,
                elem.priority,
                elem.description,
                elem.date,
            );
        });
    };

    const renderToDo = (elem) => {
        addToDo(
            elem.name,
            elem.id,
            elem.done,
            elem.trash,
            elem.priority,
            elem.description,
            elem.date,
        );

        const pushToList = () => {
            const toDo = input.value;
            const textarea = description.value;
            const datevalue = date.value;
            const prior = priority.value;
            if (toDo) {
                LIST.push(createToDo(toDo, id, false, false, prior, textarea, datevalue));
                renderToDo(LIST.slice(-1)[0]);
                id += 1;
                // updateLocalStorage(LIST);
            }

            input.value = '';
            description.value = '';
        };

    };


}


let objeto = new Sublist