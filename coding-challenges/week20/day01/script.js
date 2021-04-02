const hammingDistance = (a, b) => {
    let distance = 0;
    for (let i = 0; i < a.length; i += 1) {
      if (a[i] !== b[i]) distance += 1;
    };
    return distance;
};

const alert = message => {
    const alert = document.querySelector('.alert');
    const span = document.createElement('span');
    span.innerText = message;
    alert.appendChild(span);   
    setTimeout(() => document.querySelector('.alert').innerHTML = '', 1000);
};

const display = distance => {
    const res = document.querySelector('.results');
    res.innerHTML = `<hr><h4 class="text-success py-3">Results:</h4>
                    <div class="input-group mt-2">
                        <h3 class="input-group-addon text-info p-2 rounded">Hamming Distance</h3>
                        <h3 type="text" class="form-control rounded">${distance}</h3>
                    </div>`;
}; 

const evaluate = () => {
    document.querySelector('.results').innerHTML = '';

    const inputs = document.querySelector('#input').value.split(','); 
    console.log(inputs);

    if(inputs.length === 2) {
        if(inputs[0].length === inputs[1].length) {
            display(hammingDistance(inputs[0], inputs[1]));
        } else alert(`Two strings have to be of same length`);
    } else alert(`Enter Two strings seperated by comma(',')`);

    document.querySelector('#input').value = '';
};

const checkEnter = e => {
    if (e.keyCode === 13) evaluate();
};

document.querySelector('.btn').addEventListener('click', evaluate);
addEventListener('keydown', e => checkEnter(e));