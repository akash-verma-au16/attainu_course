class Generate {
    static random(tile) {
        const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
        let color = ' #';

        for(let i = 0; i < 6; i++) {
            color += arr[Math.floor(Math.random() * arr.length)];
        };
        
        tile.style.backgroundColor = color;
        tile.innerHTML = `<h3 class="text-light text-uppercase p-4">${color}</h3>`;
    };
};

addEventListener('DOMContentLoaded', () => {
    const tiles = document.querySelectorAll('#tile');

    tiles.forEach((tile) => {
        Generate.random(tile);
    });
});

document.querySelector('#change').addEventListener('click', () => {
    const tiles = document.querySelectorAll('#tile');

    tiles.forEach((tile) => {
        Generate.random(tile);
    });
});

