class UI {
    static count = 0;
    static grid = document.querySelector('.card-grid');
    static alertMessage = document.querySelector('.alert-message');

    static createCard(image, text, color) {
        UI.count++;
        const card = `  <div class="card text-white bg-primary m-3 border" style="width: 20rem;">
                            <img src="${image}" class="card-img-top img-thumbnail" style="height: 20rem;" alt="image">
                            <h4 class="card-body text-center text-${color}">${text}</h4>
                        </div>`;
        UI.display(card);
    };

    static alert(error) {
        UI.alertMessage.innerHTML = `<h4 class="alert alert-danger text-center">Error : ${error}</h4>`;
        setTimeout(() => UI.alertMessage.innerHTML = '', 1000);
    };

    static display(card) {
        console.log(UI.grid);
        UI.grid.innerHTML = card + UI.grid.innerHTML; 
    };
};


class Fetch {
    static API = 'https://dog.ceo/api/breeds/image/random';
    static getImage() {
        if(UI.count % 2 === 0) Fetch.getWithAsyncAwait();
            else Fetch.getWithThenCatch();
    };

    static async getWithAsyncAwait() {
        try {
            const response = await fetch(Fetch.API);
            const responseData = await response.json();
            Fetch.checkStatus(responseData, 'Async/Await', 'danger');
        } catch(error) {
            UI.alert(error);
        };
    };

    static getWithThenCatch() {
        fetch(Fetch.API)
            .then(response => response.json())
            .then(responseData => Fetch.checkStatus(responseData, 'Then/Catch', 'success'))
            .catch(error => UI.alert(error));
    };

    static checkStatus(responseData, text, color) {
        if(responseData.status !== 'error') UI.createCard(responseData.message, text, color);
                else UI.alert('Something Went Wrong!!');
    };
};

document.querySelector('.btn').addEventListener('click', Fetch.getImage);