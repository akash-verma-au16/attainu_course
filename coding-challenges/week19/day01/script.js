const decode = () => {
    const string = document.querySelector('#text-input').value;
    let stack = [];

    for(let i = 0; i < string.length; i++) {
        if(string[i] !== '#') {
            stack.push(string[i]);
        } else if(stack.length > 0) {
            stack.pop();
        };
    };

    document.querySelector('.output-string').innerText = stack.join('');
    document.querySelector('.input-string').innerText = string;
    document.querySelector('#text-input').value = '';
};

document.querySelector('.btn-large').addEventListener('click', decode);