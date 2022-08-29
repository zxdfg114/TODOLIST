import { updating, deleting } from './list.js';
  
const todo = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

const date = new Date();
const todoList = document.querySelector('#todo');


export const today = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2 , 0)}-${String(date.getDate()).padStart(2, 0)}`;
export function makeList(item){
  const input = document.querySelector('input');
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