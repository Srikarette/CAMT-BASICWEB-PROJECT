
let count = 0;
const board_size = 42/2;
const get_betal_stand = document.querySelectorAll(".betal-flex");
function setBetalStand() {
    get_betal_stand.forEach((betal) => {
        console.log(betal);
    
        for (let i = 0; i < board_size; i++) {
            const create_element = document.createElement('div');
            (count < board_size) ? create_element.classList.add('p-red') : create_element.classList.add('p-yellow');
            betal.appendChild(create_element);
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

function delBetal(selected) {
    const  get_color = document.querySelectorAll(selected);

    for (let obj of Array.from(get_color)) {
        if (obj != "underfined") {
            obj.remove();
            break;
        }
    }
}