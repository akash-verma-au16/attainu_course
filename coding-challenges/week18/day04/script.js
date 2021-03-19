const queue = [];
const number = document.querySelector('#Number');
const list = document.querySelector('.list-local');
const div = document.querySelector('.message');
const add = document.getElementById('add');
const remove = document.getElementById('remove');

add.addEventListener('click', function(e){
    e.preventDefault();

    if (isNaN(number.value) || number.value ==='') {
        generateWarning('*Enter a number');
    } else {
        queue.push(number.value);
        resetList();
    };
});

remove.addEventListener('click', function(e){
    e.preventDefault();

    if (queue.length == 0) {
        generateWarning('*Stack is empty');
    } else {
        queue.shift();
        resetList();
    };
});

function generateWarning (message) {
    let p = document.createElement('p');
        p.className ='text-end text-danger p-0 m-0';
        p.innerText = message;
        div.appendChild(p);
        setTimeout( () => p.remove(), 1000)
};

function resetList () {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    };
    printList();
    number.value = '';
};

function printList () {
    queue.forEach(element => {  
        let li = document.createElement('li');
        li.className ='list-group-item text-primary';
        li.innerText = `${element}`;
        list.appendChild(li);
    });
    colorize();
};

function colorize () {   
    if (queue.length > 1) {
        list.firstChild.className += ' fw-bold text-danger';
        list.lastChild.className += ' fw-bold text-success';
    } else if ( queue.length == 1) {
        list.firstChild.className += ' fw-bold text-danger';
    };
};

printList();
colorize();