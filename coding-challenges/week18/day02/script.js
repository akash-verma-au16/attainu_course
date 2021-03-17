const stack = [];

const number = document.querySelector('#Number');
const list = document.querySelector('.list-local');

const div = document.querySelector('.message');

const push = document.getElementById('push');
const pop = document.getElementById('pop');

push.addEventListener('click', function(e){
    e.preventDefault();

    if (isNaN(number.value) || number.value ==='') {

        let p = document.createElement('p');
        p.className ='text-end text-danger  p-0 m-0';

        p.innerText = `*Enter a number`;

        div.appendChild(p);

        setTimeout( () => p.remove(), 1000)
    } 
    else {
        stack.push(number.value);
        resetList();
        printList();
    };
    number.value = '';
})

pop.addEventListener('click', function(e){
    e.preventDefault();

    if (stack.length == 0) {

        let p = document.createElement('p');
        p.className ='text-end text-danger p-0 m-0';

        p.innerText = `*Stack is empty`;

        div.appendChild(p);

        setTimeout( () => p.remove(), 1000)
    } 
    else {
        stack.pop();
        resetList();
        printList();
    };
    number.value = '';
})

function resetList () {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
};

function printList () {
    stack.forEach(element => {  
        let li = document.createElement('li');
        li.className ='list-group-item text-danger';

        li.innerText = `${element}`;

        list.appendChild(li);
    });
};

printList();