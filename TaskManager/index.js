let counter = 0;
let input = document.getElementById("input");
let btn = document.getElementById("add");
let main = document.getElementById("content");
let done = document.getElementById("done");

function addTarefa() {
  let valorInput = input.value;
  ++counter;

  if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {
    let novoItem = ` <div id="${counter}" class="task">
        <button  onclick="marcarTarefa(${counter})" id="done">Done</button>
        <button onclick="deletar(${counter})" id="delete" >Delete</button>
        
        <div class="taskContent" (${counter})" >
          <p  class = "taskContent (${counter}) ">
          ${valorInput}
          </p>
        </div>

    </div>`;
    main.innerHTML += novoItem;
    input.value = "";
    input.focus();
  } else {
    alert("Type your task!");
  }
}

input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    btn.click();
  }
});

function deletar(id) {
  var tarefa = document.getElementById(id);
  tarefa.remove();
  input.value = "";
  input.focus();
}

function marcarTarefa(id) {

  let item = document.getElementById(id);
  
    let classe = item.getAttribute("class");
    item.classList.toggle("clicado");
  
}


