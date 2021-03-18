const latitude = document.querySelector('#latitude');
const longitude = document.querySelector('#longitude');
const findButton = document.querySelector('#find-button');
const googleMapButton = document.querySelector('#google-map-button');
const intiallyHidden = document.getElementById('initially-hidden');

loadAllEventListeners();

function loadAllEventListeners () {
    intiallyHidden.style.display = 'none';
    findButton.addEventListener('click', getUserLocation);
};

function getUserLocation (e) {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(received, rejected);
};

function received (position) {
    let x = parseFloat(position.coords.latitude).toFixed(4),
        y = parseFloat(position.coords.longitude).toFixed(4);
    latitude.innerText = x;
    longitude.innerText = y;

    intiallyHidden.style.display = 'block';
    changeRedirct(x, y);
};

function rejected (position) {
    const message = 'Not Found'; 

    latitude.innerText = message;
    longitude.innerText = message;

    intiallyHidden.style.display = 'block';
    googleMapButton.style.display = 'none';

    insertAlert();
};

function changeRedirct (x, y) {
    let redirect = `${googleMapButton.getAttribute('href') + x},${y}`; 
    googleMapButton.href = redirect;
};

function insertAlert() {
    const alert = document.createElement('span');
    alert.className = 'alert alert-danger fs-5 opacity-25';
    alert.appendChild(document.createTextNode('You need to give permission for going further!'))
    
    const div = document.createElement('div');
    div.className = 'text-center p-3';
    div.appendChild(alert);

    intiallyHidden.appendChild(div);
};