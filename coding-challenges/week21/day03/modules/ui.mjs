export class UI {
    static char = document.querySelector('#length');
    static state = '15';

    static setParams() {
        let state;
        const up = document.querySelector('#uppercase').checked;
        const low = document.querySelector('#lowercase').checked;
        const num = document.querySelector('#numbers').checked;
        const sym = document.querySelector('#symbols').checked;

        if(up && low && num && sym) state = '15';
        else if(up && num && sym) state = '13';
        else if(up && low && sym) state = '11';
        else if(up && low && num) state = '7';
        else if(low && num && sym) state = '14';
        else if(up && low) state = '3';
        else if(up && num) state = '5';
        else if(up && sym) state = '9';
        else if(low && num) state = '6';
        else if(low && sym) state = '10';
        else if(num && sym) state = '12';
        else if(up) state = '1';
        else if(low) state = '2';
        else if(num) state = '4';
        else if(sym) state = '8';
        else state = '0'

        UI.state = state;
    };

    static display(pass) {
        document.querySelector('#password').value = pass;
    };

    static alert(err) {
        const ele = document.createElement('h6');
        ele.className = 'alert alert-danger text-center';
        ele.innerText = err;
        document.querySelector('#alert-message').appendChild(ele);
        setTimeout(() => ele.remove(), 1000);
    };

    static copy() {
        const copyText = document.querySelector('#password');
        copyText.select();
        document.execCommand("copy");
        document.querySelector('#password').value = '';
    };      
};