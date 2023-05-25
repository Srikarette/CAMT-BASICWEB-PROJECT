
function getJsonObject(_json) {
    const tempToObj = localStorage.getItem(_json);
    return JSON.parse(tempToObj);
} 



let count = 0;
const GET_SIZE = getJsonObject('size');
const board_size = (GET_SIZE.SIZE[0] * GET_SIZE.SIZE[1])/2;
const get_betal_stand = document.querySelectorAll('.betal-flex');
const betalContainer = document.getElementsByClassName('betal-elements');

const newBetalStand = document.createElement('img');
const newBetalStand2 = document.createElement('img');
const newFlexBetal = document.createElement('div');
const newFlexBetal2 = document.createElement('div');

function setBetalStand() {
    get_betal_stand.forEach((betal) => {
        console.log(betal);
    
        for (let i = 0; i < board_size; i++) {
            const create_element = document.createElement('div');
            if (count < board_size) {
                create_element.classList.add('p-red');
                if (count > 21) {
                    generateDOM('red');
                    const getAddonsFlex = document.getElementsByClassName('betal-flex')[1];
                    getAddonsFlex.appendChild(create_element);
                }

            } else {
                create_element.classList.add('p-yellow');
                if (count > board_size + 21) {
                    generateDOM('yellow');
                    const getAddonsFlex = document.getElementsByClassName('betal-flex')[3];
                    getAddonsFlex.appendChild(create_element);
                }
            }
            
            if (count <= 21 || count >= board_size && count <= (board_size + 21)) 
            { betal.appendChild(create_element); }
            count++;
        }
    });
}

function clearBetal() {
    const get_color =document.querySelectorAll(".p-red, .p-yellow");
    get_color.forEach((element) => {
        element.remove();
    });

    count = 0;
}

function delBetal(selected) { //.red = del 1 times means 10 times = remove 10 div.
    const  get_color = document.querySelectorAll(selected);

    for (let obj of Array.from(get_color)) {
        if (obj != "underfined") {
            obj.remove();
            break;
        }
    }

    return 1;
}

function generateDOM(color) {
    if (color == "red") {
        newBetalStand.classList.add('betal-standy-add');
        newBetalStand.classList.add(`red-betal`);
        newBetalStand.srcset = "./images/inside.png";
        betalContainer[0].appendChild(newBetalStand);
        
        newFlexBetal.classList.add('betal-flex');
        newFlexBetal.classList.add('align-flex');
        newFlexBetal.classList.add(`red-betal`);
        betalContainer[0].appendChild(newFlexBetal);
    } else {
        newBetalStand2.classList.add('betal-standy-add');
        newBetalStand2.classList.add(`yellow-betal`);
        newBetalStand2.srcset = "./images/inside.png";
        betalContainer[1].appendChild(newBetalStand2);
        
        newFlexBetal2.classList.add('betal-flex');
        newFlexBetal2.classList.add('align-flex');
        newFlexBetal2.classList.add(`yellow-betal`);
        betalContainer[1].appendChild(newFlexBetal2);
    }
    
}