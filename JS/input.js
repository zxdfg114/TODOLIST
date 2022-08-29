export function createForm(){
  const form = document.createElement('form');
  const button = document.createElement('button');
  const input = document.createElement('input');
  const submitBtn = document.querySelector('.submit');
  
  input.type = 'text';
  input.classList.add('todo')
  input.placeholder = `Write What to do`;
  button.classList.add('submit')
  button.innerText = 'submit';
  form.appendChild(input);
  form.appendChild(button);
  root.appendChild(form);
}