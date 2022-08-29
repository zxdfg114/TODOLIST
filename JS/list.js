import { data, parsedData } from './App.js'
import { today } from './data.js';

const TODO = 'todo';
export function updating(){
  let updateBtn = document.querySelectorAll('span .fa-pencil');
  const form = document.createElement('form');
  const input = document.createElement('input');
  const button = document.createElement('button');
  const createSpan = document.createElement('span');
  const span = document.querySelectorAll('span');
  
  
  
  for(let i=0; i < updateBtn.length; i++) {
    updateBtn[i].addEventListener('click', function(){
      console.log(data)
      const list = span[i].parentNode;
      
      form.classList.add('updateForm')
      input.value = `${data[i]}`;
      button.innerText = `UPDATE`;
      button.classList.add('update');
      form.appendChild(input)
      form.appendChild(button)
      updateBtn[i].addEventListener('click', updating)
      
      if(i === updateBtn.length -1){
        list.innerText = '';
        list.appendChild(form);
      
      const update = document.querySelector('.update');

        update.addEventListener('click', function(e){
          e.preventDefault();
          let updatedTodo = input.value;
          data.splice(i, 1, updatedTodo);
          createSpan.innerHTML = `${today} <i class="fa fa-pencil fa-2x"></i> <i class="fa fa-close fa-2x"></i>`;
          
          console.log(document.querySelectorAll('.fa pencil'));

          list.innerText = updatedTodo;
          
          list.appendChild(createSpan);
          
          

          localStorage.setItem(TODO, JSON.stringify(data));
          
          location.reload(); // 후
        })
      }      
    })
  } 
}

export function deleting(){
  const deleteBtn = document.querySelectorAll('.fa-close');


  for(let i =0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener('click', function(){
      (this.parentNode).parentNode.remove();
      if(i === deleteBtn.length-1) {
       console.log(parsedData)
       console.log(data);
       data.splice(i, 1);
       localStorage.setItem(TODO, JSON.stringify(data));
      }
      if(document.body.contains(document.querySelector('.updateForm'))) {
        document.querySelector('.updateForm').remove();
      }
    })
  }
}

