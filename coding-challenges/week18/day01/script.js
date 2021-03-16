const num_1 = document.querySelector('#Number1');
const num_2 = document.querySelector('#Number2');

const list = document.querySelector('.list-group');
const add = document.getElementById('add');

add.addEventListener('click', function(e){

    const sum = parseFloat(num_1.value) + parseFloat(num_2.value);

    const li = document.createElement('li');
    li.className ='list-group-item py-2 my-2 text-light bg-secondary';

    if (isNaN(sum)) {
        li.innerText = `Incorrect Inputs`;
    } else {
        li.innerText = `${num_1.value} + ${num_2.value} = ${sum}`;
    };

    list.insertBefore(li, list.childNodes[0]);

    num_1.value = '';
    num_2.value = '';

    e.preventDefault();
})
