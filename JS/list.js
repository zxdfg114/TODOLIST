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
      button.type = 'submit'
      form.appendChild(input)
      form.appendChild(button)
      
      if(i === updateBtn.length -1){
        list.innerText = '';
        list.appendChild(form);
      
      const update = document.querySelector('.update');
        input.type = 'text';
        input.setAttribute('required',"required");
        update.type = 'submit';    
        
        form.addEventListener('submit', function(e){
          e.preventDefault();
          
          let updatedTodo = input.value;
          console.log(input.value)
          
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
       data.splice(i, 1);
       localStorage.setItem(TODO, JSON.stringify(data));
       console.log(data)
       location.reload();
      }
      if(document.body.contains(document.querySelector('.updateForm'))) {
        document.querySelector('.updateForm').remove();
      }
    })
  }
}

