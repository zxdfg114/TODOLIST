const root = document.querySelector('#root');

const heading = document.createElement('h1')

heading.classList.add('heading');
heading.innerText = `TODO LIST`;
root.appendChild(heading);



// ==============================================================
function createForm(){
  const form = document.createElement('form');
  const button = document.createElement('button');
  const input = document.createElement('input');
  
  input.type = 'text';
  input.classList.add('todo')
  input.placeholder = `Write What to do`;
  button.classList.add('submit')
  button.innerText = 'submit';
  form.appendChild(input);
  form.appendChild(button);
  root.appendChild(form);
}

createForm();

// ==============================================

const todo = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const input = document.querySelector('input');
const date = new Date();
const today = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2 , 0)}-${String(date.getDate()).padStart(2, 0)}`;
const todoList = document.querySelector('#todo');
const TODO = 'todo'

let data = new Array;

function makeList(item){
  const list = document.createElement('li');
  const span = document.createElement('span');
  span.innerHTML = `${today} <i class="fa fa-pencil fa-2x"> </i> <i class="fa fa-close fa-2x"></i>`
  list.innerText = `${item}`;
  list.appendChild(span);
  todoList.appendChild(list);
  input.value = '';
}

function savingData (e) {
  e.preventDefault();
  data.push(input.value);
  console.log(data);
  localStorage.setItem(TODO, JSON.stringify(data));
  makeList(input.value);
}

submitBtn.addEventListener('click', savingData);


// ==================================================================================
const parsedData = JSON.parse(localStorage.getItem(TODO));

if(localStorage.key(TODO) != null) {
  for(let i of parsedData) {
    makeList(parsedData[i]);
    data = parsedData;
  }
} 

//===================================================================================

const deleteBtn = document.querySelectorAll('.fa-close');


for(let i =0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener('click', function(){
    (deleteBtn[i].parentNode).parentNode.remove();
    data.splice(i, 1);
    localStorage.setItem(TODO, JSON.stringify(data));
  })
}

// =====================================================================================

const updateBtn = document.querySelectorAll('.fa-pencil');

for(let i =0 ; i < updateBtn.length; i++) {
  updateBtn[i].addEventListener('click', function(){
    let list = (updateBtn[i].parentElement).parentElement
    const form = document.createElement('form');
    const input = document.createElement('input');
    const button = document.createElement('button');
    const span = document.createElement('span');
    input.value = `${data[i]}`;
    button.innerText = `UPDATE`;
    button.classList.add('update');
    form.appendChild(input)
    form.appendChild(button)
    list.parentElement.insertBefore(form, list.nextSibling)
    
    const update = document.querySelector('.update');
    update.addEventListener('click', function(e){
      e.preventDefault();
      console.log(input.value);
      list.innerText = input.value;
      list.appendChild(span)
      span.innerHTML = `${today} <i class="fa fa-pencil fa-2x"> </i> <i class="fa fa-close fa-2x"></i>`;
      data.splice(i, 1, input.value);
      console.log(data)
      localStorage.setItem(TODO, JSON.stringify(data));
      form.remove();
    })
  })
}





