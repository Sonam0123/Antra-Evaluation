const button = document.querySelector('.submit');
const input = document.querySelector('.todo-input');
const main = document.querySelector('.main');



axios({
    method: 'GET',
    url: ('http://localhost:3000/todos')
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

