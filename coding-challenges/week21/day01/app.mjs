import { Fetch } from './fetch.mjs';
import { UI } from './dom.mjs';
import { Convert } from './convert.mjs';


const loadAllEventListeners = () => {
    addEventListener('DOMContentLoaded', () => {
        Fetch.get()
            .then(data => UI.loadSymbols(data.rates))
            .catch(err => UI.alertMessage(err));
    });
    
    document.querySelector('.btn').addEventListener('click', () => {
        Fetch.get()
            .then(data => Convert.convertCurrency(data.rates))
            .catch(err => UI.alertMessage(err));
    });
}

loadAllEventListeners();