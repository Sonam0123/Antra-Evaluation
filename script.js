const button = document.querySelector('.submit');
const input = document.querySelector('.todo-input');
const main = document.querySelector('.main');

button.addEventListener('click', function(e) {
  e.preventDefault();
  const todo = input.value;
  const li = document.createElement('p');
  li.innerText = todo;
  input.classList.add('todo');
  li.classList.add('todo-item');
  main.appendChild(li);
  input.value = '';
  li.addEventListener('click', function(e) {
    li.style.textDecoration = "line-through";
    // e.target.remove();
    })
});
  
