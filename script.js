const button = document.querySelector('.submit');
const input = document.querySelector('.todo-input');
const main = document.querySelector('.main');
const deleteIcon = `<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon" aria-label="fontSize small" class='edit-icon' id='deleteIcon'><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg> `;
const editIcon=`<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditIcon" aria-label="fontSize small" class='edit-icon'><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" ></path></svg>`;
axios.get('http://localhost:3000/todos')
    .then(function (response) {
        {getData(response.data)}})
    .catch(function (error) {
        console.log(error)});

function getData(data){
    console.log(data)
}


const postData = (e) => {
    e.preventDefault();
    axios({
    method: 'POST',
    url: 'http://localhost:3000/todos', 
    data: {
        title: 'add Todo',
        completed: false
    }
    })
    
}

button.addEventListener('click', postData);
button.addEventListener('click', function post() {

    const todo = input.value;
    const li = document.createElement('p');
    const innerDiv = document.createElement('div');
    li.innerHTML = todo;
    li.appendChild(innerDiv);
    innerDiv.innerHTML = deleteIcon
    innerDiv.innerHTML += editIcon
    innerDiv.classList.add('inner-div');
    input.classList.add('todo');
    li.classList.add('todo-item');
    main.appendChild(li);
    input.value = '';
    li.addEventListener('click', function(e) {
      li.style.textDecoration = "line-through";
      // e.removeChild(li);
      })
  });
