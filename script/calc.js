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
enter.addEventListener('click', ()=> {
    if (input.innerHTML.match(/[^\d.+\-*\/]|\D\D/)||
        inputField() === '') {
        return clearInOut();
    }
    if (inputField().match(/\d\/0/)) {
        input.innerHTML = '';
        result.innerHTML = 'Error';
    }
    else {result.innerHTML = eval(inputField()); }
});
cancel.addEventListener('click', ()=> {
    clearInOut();
});
numbers.forEach(function (number) {
    number.addEventListener('click', function (e){
        input.innerHTML = `${input.innerHTML}${e.target.id}`;
    })
})
//Keyboard events
 document.addEventListener('keydown', Event => {
       if (Event.key === 'Enter') {
           Event.preventDefault();
         enter.click();
     } if (Event.key === 'Backspace') {
           Event.preventDefault();
         cancel.click();
     } if (Event.key === '+') {
         document.getElementById('+').click();
     } if (Event.key === '-') {
         document.getElementById('-').click();
     } if (Event.key === '*') {
         document.getElementById('*').click();
     } if (Event.key === '.') {
         document.getElementById('.').click();
     } if (Event.key === '/') {
         document.getElementById('/').click();
     } if (Event.key === '1') {
         document.getElementById('1').click();
     } if (Event.key === '2') {
         document.getElementById('2').click();
     } if (Event.key === '3') {
         document.getElementById('3').click();
     } if (Event.key === '4') {
         document.getElementById('4').click();
     } if (Event.key === '5') {
         document.getElementById('5').click();
     } if (Event.key === '6') {
         document.getElementById('6').click();
     } if (Event.key === '7') {
         document.getElementById('7').click();
     } if (Event.key === '8') {
         document.getElementById('8').click();
     } if (Event.key === '9') {
         document.getElementById('9').click();
     } if (Event.key === '0') {
         document.getElementById('0').click();
     }
 });



// let keyboardCodes = {
//     '0': '0',
//     '1': '1',
//     '2': '2',
//     '3': '3',
//     '4': '4',
//     '5': '5',
//     '6': '6',
//     '7': '7',
//     '8': '8',
//     '9': '9',
//     '-': '-',
//     '+': '+',
//     '*': '*',
//     '/': '/',
//     '.': '.'
// };


//Option with switch/case.

// enter.addEventListener('click', ()=> {
//     switch (gInput.innerHTML) {
//         case '':
//         case inputField().match(/[^\d.+\-*\/]|\D\D/) ? inputField() : true:
//             clearInOut();
//             break;
//
//         case inputField().match(/\d\/0/) ? inputField() : true:
//             gInput.innerHTML = '';
//             Result.innerHTML = 'Error';
//             break;
//         default:
//             Result.innerHTML = eval(gInput.innerHTML);
//     }
// })







