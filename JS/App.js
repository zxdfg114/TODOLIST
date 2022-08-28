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
const TODO = 'todo';

let data = new Array; //입력받은 값을 저장할 배열 생성

function makeList(item){
  const list = document.createElement('li');
  const span = document.createElement('span');
  span.innerHTML = `${today} <i class="fa fa-pencil fa-2x"> </i> <i class="fa fa-close fa-2x"></i>`
  list.innerText = `${item}`;
  list.appendChild(span);
  todoList.appendChild(list);
  input.value = '';
  updating();
  deleting();
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
  for(let i = 0; i < parsedData.length; i++) {
    makeList(parsedData[i]);
    data = parsedData;
  }
} 

//===================================================================================
function deletingFilter (item){
  return item != null ;
}

function deleting(){
  const deleteBtn = document.querySelectorAll('.fa-close');


  for(let i =0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener('click', function(){
      (this.parentNode).parentNode.remove();
      if(i === deleteBtn.length-1) {
       data.splice(i, 1);
       localStorage.setItem(TODO, JSON.stringify(data));
      }
      if(document.body.contains(document.querySelector('.updateForm'))) {
        document.querySelector('.updateForm').remove();
      }
    })
  }
}                                

// =====================================================================================
function updating(){
  const updateBtn = document.querySelectorAll('span .fa-pencil');
  const form = document.createElement('form');
  const input = document.createElement('input');
  const button = document.createElement('button');
  const createSpan = document.createElement('span');
  const span = document.querySelectorAll('span');
  
  
  for(let i=0; i < updateBtn.length; i++) {
    updateBtn[i].addEventListener('click', function(){
      const list = span[i].parentNode;
      
      form.classList.add('updateForm')
      input.value = `${data[i]}`;
      button.innerText = `UPDATE`;
      button.classList.add('update');
      form.appendChild(input)
      form.appendChild(button)
      
      if(i === updateBtn.length -1){
        list.innerText = '';
        list.appendChild(form);
      
      const update = document.querySelector('.update');

          update.addEventListener('click', function(e){
            // e.preventDefault();
            let updatedTodo = input.value;
            data.splice(i, 1, updatedTodo);
            console.log(data);
            localStorage.setItem(TODO, JSON.stringify(data))
            createSpan.innerHTML = `${today} <i class="fa fa-pencil fa-2x"> </i> <i class="fa fa-close fa-2x"></i>`;
            list.innerText = updatedTodo;
            list.appendChild(createSpan);
            updating();
            deleting();
          })
      }      
    })
  } 
}