'use strict';

let input = document.getElementById('input');
let ul = document.querySelector('ul');
let li =document.querySelector('li');
let btn = document.getElementById('add-btn');
let spans = document.getElementsByTagName('span');
let delBtn = document.querySelector('.fa-trash-alt');
let clearBtn = document.getElementById('clear-btn');
let saveBtn = document.getElementById('save-btn');

//delete one Todo line

function deleteTodo () {
  for(let span of spans){
    span.addEventListener ("click",function (){
      span.parentElement.remove();
    });
  }
}
  
// function to adding Todo from input

function addTodo () {
  if (input.value != '') {
    input.classList.remove('err');
    let li = document.createElement('li');
    let spanElement = document.createElement('span');

    let icon = document.createElement('i');
    icon.classList.add('fas', 'fa-skull');

    let newTodo = input.value;
    input.value = '';
    
    spanElement.append(icon);
    ul.appendChild(li).append(newTodo, spanElement);
    } else {
      input.classList.add('err');
      }

  deleteTodo();
}

//adding by click

btn.addEventListener ('click', addTodo);

// checked todo

 ul.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  },false
);

// clearing todo list

clearBtn.addEventListener ('click', function () {
  ul.innerHTML= "";
  localStorage.removeItem('todo-list',ul.innerHTML );
});

// saving todo list local

saveBtn.addEventListener("click", () => {
  localStorage.setItem("todo-list", ul.innerHTML);
});

// loading todo list

function loadTodo(){
  if(localStorage.getItem('todo-list')){
    ul.innerHTML = localStorage.getItem('todo-list');
    deleteTodo();
  }
}

deleteTodo();
loadTodo();