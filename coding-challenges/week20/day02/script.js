class UI {
    static count = 0;
    static dataList = document.querySelector('.list-group');
    static alertMSG = document.querySelector('.alert-message');

    static populate(responseData) {
        responseData.forEach(user => {
            const name = user.name.split(' ');
            const newListElement = UI.createListElement(name[0], name[1]);
            UI.dataList.appendChild(newListElement);
            UI.count++;
        });
    };

    static createListElement(firstName, lastName) {
        const li = document.createElement('li');
        if(UI.count % 2 === 0) li.className = 'list-group-item';     
            else li.className = 'list-group-item bg-primary';
        
        const firstSpan = document.createElement('span');
        firstSpan.className = 'w-50 d-inline-block text-center';
        firstSpan.innerText = firstName;

        const lastSpan = document.createElement('span');
        lastSpan.className = 'w-50 d-inline-block text-center';
        lastSpan.innerText = lastName;

        li.appendChild(firstSpan);
        li.appendChild(lastSpan);
        return li;
    };

    static alertMessage(error) {
        const alert = document.createElement('h5');
        alert.className = 'alert alert-danger';
        alert.innerText = error;
        UI.alertMSG.appendChild(alert);
    };
};

class Search {
    static loadAllData() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(responseData => UI.populate(responseData))
            .catch(error => UI.alertMessage('Error 404: Failed to load Resource'));
    };

    static filterData(e){
        const text = e.target.value.toLowerCase();

        document.querySelectorAll('.list-group-item').forEach(task => {
            let name;
            const method = document.querySelector('#select-method').value;

            if(method === 'first') {
                name = task.firstElementChild.textContent.toLowerCase();
            } else name = task.lastElementChild.textContent.toLowerCase();

            if(name.indexOf(text) != -1) task.style.display = 'block';
                else task.style.display = 'none';
        });
    };
};

addEventListener('DOMContentLoaded', Search.loadAllData());
document.querySelector('.search-bar').addEventListener('keyup', (e) => Search.filterData(e));
