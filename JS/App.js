import { createForm } from "./input.js";
import { makeList } from './data.js';
import { updating, deleting } from './list.js';

const root = document.querySelector('#root');
const heading = document.createElement('h1')
heading.classList.add('heading');
heading.innerText = `TODO LIST`;
root.appendChild(heading);

createForm();

// ==============================================

const form = document.querySelector('form');
const submitBtn = document.querySelector('.submit');
const input = document.querySelector('input');
const date = new Date();
const today = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2 , 0)}-${String(date.getDate()).padStart(2, 0)}`;
const todoList = document.querySelector('#todo');
const TODO = 'todo';

 let data = new Array; //입력받은 값을 저장할 배열 생성

function savingData (e) {
  
  e.preventDefault();
  data.push(input.value);
  console.log(data);
  localStorage.setItem(TODO, JSON.stringify(data));
  makeList(input.value);
 
}


form.addEventListener('submit', savingData);

let parsedData = JSON.parse(localStorage.getItem(TODO));

if(localStorage.key(TODO) != null) {
  for(let i = 0; i < parsedData.length; i++) {
    makeList(parsedData[i]);
    data = parsedData;
    }
  } 

updating();
deleting();

export {data, parsedData};