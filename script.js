
//Making a to-do list

//ICONS
const deleteIcon = `<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon" aria-label="fontSize small" class='edit-icon' id='deleteIcon'><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg> `;
const editIcon=`<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EditIcon" aria-label="fontSize small" class='edit-icon'><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" ></path></svg>`;
//DOM
const button = document.querySelector('.submit');
const input = document.querySelector('.todo-input');
const main = document.querySelector('.main');

//Getting Data from the server
axios.get('http://localhost:3000/todos')
    .then(function (response) {
        console.log(response);
        for(let i = 0; i < response.data.length; i++) {
            let data = response.data[i];
            let li = document.createElement('p');
            li.innerHTML = `<p class='todo-item'>${data.title}</p>`;
            main.appendChild(li);
        }
    })
    .catch(function (error) {
        console.log(error)});

function getData(data) {
    return data.map(element => {
        return `<p>${element.title}</p>`
    })
}

//Posting Data to the server
const postData = (e) => {
    e.preventDefault();
    return axios({
    method: 'POST',
    url: 'http://localhost:3000/todos', 
    data: {
        title: input.value,
        completed: false
    }
    }).then(function (response) {
        let data = response.data;
        this.data = data;
    })

}
console.log(this.data)
button.addEventListener('click',
function post(title) {
    const todo = input.value;
    const li = todo;
    li.innerHTML = todo;
    const innerDiv = document.createElement('div');
    const secondDiv = document.createElement('div');
    li.appendChild(innerDiv);
    innerDiv.innerHTML = deleteIcon
    innerDiv.innerHTML += editIcon
    innerDiv.classList.add('inner-div');
    input.classList.add('todo');
    li.classList.add('todo-item');
    main.appendChild(li);
    main.appendChild(secondDiv);
    input.value = '';
    li.addEventListener('click', function(e) {
      li.id='new-todo';
      secondDiv.innerHTML = todo
      secondDiv.classList.add('todo-item');
      secondDiv.style.textDecoration = "line-through";
      })
    }
    );

button.addEventListener('click', postData);
//Updating Data on the server
updateData = (e) => {
e.preventDefault();
axios({
method: 'PUT',
url: `http://localhost:3000/todos/${id}`, 
data: {
    title: input.value,
    completed: false
}
})

};
editIcon.addEventListener('click',
setTimeout(() => {
    console.log('clicked')
}, 1000)
);

deleteIcon.addEventListener('click', deleteData = (e) => {
    e.preventDefault();
    axios({
    method: 'DELETE',
    url: `http://localhost:3000/todos/${id}`
    })
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error)}) 
})


