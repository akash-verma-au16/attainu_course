import { UI } from './dom.mjs';

export class Convert {
    static convertCurrency(rates) {
        const amount = UI.fromValue.value;
        const from = UI.fromSelect.value;
        const to = UI.toSelect.value;
        const value = ((amount / rates[from]).toFixed(2)) * rates[to];
        const rate = (value / amount).toFixed(2);
        UI.displayResult(value, from, rate, to);
    };
};