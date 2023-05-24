var board_size = ['7-6', '8-7', '8-8', '9-8'];
const flexContainer = document.getElementsByClassName('flex-container')[0];

[0,1,2,3].forEach((element) => {
    const divContainer = document.createElement('div');
    divContainer.classList.add('button-container');
    divContainer.innerHTML = `<button class="button-element" id="b${element}"></button>`;
    flexContainer.appendChild(divContainer);

    const getButton = document.getElementById(`b${element}`);
    getButton.style.backgroundImage = `url(./images/board_size/${board_size[element]}.png)`;
    
    getButton.addEventListener('click', () => {
        const board_reciever = {
            'SIZE' : seperateToArr(board_size[element])
        }

        // convert JSON object to STRING and put into 'localStorage'.
        const recieve_serialized = JSON.stringify(board_reciever);
        localStorage.setItem('size', recieve_serialized);
        window.open('./connect-four-game.html', '_self');
    })
})

function seperateToArr(value) {
    return value.split('-');
}