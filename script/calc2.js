const numbers = document.querySelectorAll('.number')
const cancel = document.getElementById('c');
const enter = document.getElementById('enter');
const input = document.querySelector('#input');
const result = document.getElementById('result');
const inputField = ()=> input.innerHTML;
function clearInOut() {
    result.innerHTML = '';
    input.innerHTML = '';
}
//Mouse events
//Option with switch/case.
enter.addEventListener('click', ()=> {
    switch (input.innerHTML) {
        case '':
        case inputField().match(/[^\d.+\-*\/]|\D\D/) ? inputField() : true:
            clearInOut();
            break;
        case inputField().match(/\d\/0/) ? inputField() : true:
            input.innerHTML = '';
            result.innerHTML = 'Error';
            break;
        default:
            result.innerHTML = eval(inputField());
    }
})
cancel.addEventListener('click', ()=> {
    clearInOut();
});
numbers.forEach(function (number) {
    number.addEventListener('click', function (e){
        input.innerHTML = `${input.innerHTML}${e.target.id}`;
    })
})

//Keyboard events
const enterKey = 'Enter';
const delKey = 'Delete';
const backspaceKey = 'Backspace';
function addSymbolToInput(num) {
    input.innerHTML = `${input.innerHTML}${num}`;
    }
function backspace() {
    const subStr = input.innerHTML.slice(0, -1)
    input.innerHTML = subStr === '' ? '' : subStr;
}
document.addEventListener('keydown', function (evt){
      if (evt.key in keyboardCodes) {
        evt.preventDefault();
        addSymbolToInput(keyboardCodes[evt.key])
    } else if (evt.key === enterKey) {
            if (inputField().match(/\d\/0/)) {
                input.innerHTML = '';
                result.innerHTML = 'Error';}
            else
            result.innerHTML = eval(inputField());
    } else if (evt.key === delKey) {
        clearInOut();
    } else if (evt.key === backspaceKey) {
        backspace();
    }
});
let keyboardCodes = {
    '0': '0',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '-': '-',
    '+': '+',
    '*': '*',
    '/': '/',
    '.': '.'
};







