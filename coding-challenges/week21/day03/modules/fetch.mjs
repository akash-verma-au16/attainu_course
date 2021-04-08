import { UI } from "./ui.mjs";

export class Fetch { 
    static generate(length, state) {
        const api = `https://random.justyy.workers.dev/api/random/?cached&n=${length}&x=${state}`;

        fetch(api)
            .then(response => response.json())
            .then(data => UI.display(data))
            .catch(err => UI.alert(err));
    };

    static validate() {
        const length = UI.char.value;
        const state = UI.state;

        if(parseInt(length) > 5 && parseInt(length) < 17 && state !== '0') Fetch.generate(length, state);
            else if(state === '0') UI.alert('Select atleast one checkbox!!')
            else UI.alert('Length should be between 6 - 16!!');
    };
};