export function createForm(){
  const form = document.createElement('form');
  const button = document.createElement('button');
  const input = document.createElement('input');
  const submitBtn = document.querySelector('.submit');
  
  input.type = 'text';
  input.setAttribute('required',"required");
  
  input.classList.add('todo')
  input.placeholder = `할 일을 작성해주세요`;
  button.type = 'submit';
  button.classList.add('submit')
  button.innerText = '+';
  form.appendChild(input);
  form.appendChild(button);
  root.appendChild(form);
}