export class UI {
    static fromValue = document.querySelector('#from-value');
    static toValue = document.querySelector('#to-value');
    static fromSelect = document.querySelector('#select-from');
    static toSelect = document.querySelector('#select-to');
    static rate = document.querySelector('#exchange-rate');
    static alertMSG = document.querySelector('.alert-message');

    static createOption(key) {
        const option = document.createElement('option');
        option.textContent = key;
        return option;
    };
    
    static loadSymbols(rates) {
        for(let key in rates) {
            const newOptionFrom = UI.createOption(key);
            UI.fromSelect.appendChild(newOptionFrom);
            const newOptionTo = UI.createOption(key);
            UI.toSelect.appendChild(newOptionTo);
        };
    };

    static alertMessage(err) {
        const message = document.createElement('h5');
        message.className = 'alert alert-danger text-center mt-3';
        message.innerText = err;
        UI.alertMSG.appendChild(message);
        setTimeout(() => message.remove(), 1000);
    };

    static displayResult(result, from, rate, to) {
        UI.toValue.value = result.toFixed(2);
        if(rate === 'NaN') UI.alertMessage('Please, Fill All Fields!!');
            else UI.rate.innerText = `Exchange Rate : 1 ${from} =  ${rate} ${to}`;
    };
};