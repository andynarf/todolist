const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

const options = {weekday:"long", month: "short", day: "numeric"}
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString('en-US',options);

const addToDo= (toDo, id, done, trash) => { 

    if(trash){return;}

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "" ;
    const position = 'beforeend'; 
    const item = `
    <li class="item">
    <i class="fa ${DONE}" job="complete" id="${id}"></i>
    <p class="text ${LINE}"> ${toDo} </p>
    <i class="fa fa-trash-o de" job="delete" id="${id}" ></i>
    `
    list.insertAdjacentHTML(position,item);
}

document.addEventListener('keyup',(event)=>{
    if (event.keyCode == 13){
        const toDo = input.value;
        if(toDo){
            addToDo(toDo);

        }
        input.value="";
    }

})


}
