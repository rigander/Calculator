// Actions
const cancel = document.querySelector('#c');
const enter = document.querySelector('#enter');
const input = document.querySelector('#input');
const result = document.querySelector('#result');
const calcButtons = document.querySelectorAll(".number");
const keyCodes = ['+', '-', '*', '.', '/', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

function inputField(){
    return input.innerHTML;
}

function clearInOut() {
    result.innerHTML = '';
    input.innerHTML = '';
}

function getResult(){
    if (inputField().match(/[^\d.+\-*\/]|\D\D/) || inputField() === '') {
        return clearInOut();
    }
    if (inputField().match(/\d\/0/)) {
        input.innerHTML = '';
        result.innerHTML = 'Error';
    }
    else {
        result.innerHTML = eval(inputField());
    }
}
function backspace() {
    const subStr = input.innerHTML.slice(0, -1)
    input.innerHTML = subStr === '' ? '' : subStr;
}

//Click events
calcButtons.forEach(item => {
    item.addEventListener('click', event => {
        input.innerHTML = inputField() + item.value;
    })
});
enter.addEventListener('click', getResult);
cancel.addEventListener('click', clearInOut);


//Keyboard events
document.addEventListener('keydown', event => {
    if (['Enter', '='].includes(event.key)) {
        event.preventDefault();
        getResult();
    }
    if (keyCodes.includes(event.key)) {
        input.innerHTML = inputField() + event.key;
    }
    if (event.key === 'Delete') {
        event.preventDefault();
        clearInOut();
    }
    if (event.key === 'Backspace') {
        event.preventDefault();
        backspace();
    }
});