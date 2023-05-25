

function getJsonObject(_json) {
    const tempToObj = localStorage.getItem(_json);
    return JSON.parse(tempToObj);
} 

const boardContainer = document.getElementsByClassName('board')[0]
console.log(boardContainer)

const GET_BOARD = getJsonObject('size');
for (let i = 0; i < GET_BOARD.SIZE[1]; i++) {
    const createRow = document.createElement('div');
    createRow.classList.add('row');
    boardContainer.appendChild(createRow);

    for (let j = 0; j < GET_BOARD.SIZE[0]; j++) {
        const createBetal = document.createElement('div');
        createBetal.classList.add('cell');
        createBetal.classList.add('empty');
        createRow.appendChild(createBetal);

        const getCell = document.querySelectorAll('.cell');
        getCell.forEach((element) => {
            switch (GET_BOARD.SIZE[0] * GET_BOARD.SIZE[1]) {
                case 42 : 
                    element.style.maxWidth = '60px';
                    element.style.maxHeight = '60px';
                    break;
                case 56 :
                    element.style.maxWidth = '50px';
                    element.style.maxHeight = '50px';
                    break;
                case 63 :
                case 64 :
                case 72 :
                    element.style.maxWidth = '40px';
                    element.style.maxHeight = '40px';
                    break;
            }
        })
    }
}

