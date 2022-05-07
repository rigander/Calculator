// Numbers
const One = document.getElementById('one');
const Two = document.getElementById('two');
const Three = document.getElementById('three');
const Four = document.getElementById('four');
const Five = document.getElementById('five');
const Six = document.getElementById('six');
const Seven = document.getElementById('seven');
const Eight = document.getElementById('eight');
const Nine = document.getElementById('nine');
const Zero = document.getElementById('zero');
const Dot = document.getElementById('dot');

// Actions
const Cancel = document.getElementById('c');
const Plus = document.getElementById('plus');
const Minus = document.getElementById('minus');
const Multiply = document.getElementById('multiply');
const Divide = document.getElementById('divide');
const enter = document.getElementById('enter');

const gInput = document.querySelector('#input');
const Result = document.getElementById('result');

//Mouse events
//Actions

enter.addEventListener('click', ()=> {
    if (gInput.innerHTML.match(/[^\d.+\-*\/]/)) {
        Result.innerHTML = '';
        gInput.innerHTML = '';
    }
    if (gInput.innerHTML === '') {
        Result.innerHTML = '';
    }
    if (gInput.innerHTML.match(/\+{2}|\/{2}|\.\.|-{2}|\*{2}/)){
        Result.innerHTML = '';
        gInput.innerHTML = '';
    }
    if (gInput.innerHTML.match(/\d\/0/)) {
        gInput.innerHTML = '';
        Result.innerHTML = 'Error';
    }
    else {Result.innerHTML = eval(gInput.innerHTML); }
});

Cancel.addEventListener('click', ()=> {
    gInput.innerHTML = '';
    Result.innerHTML = '';
});
Plus.addEventListener('click', ()=> {
    gInput.innerHTML = `${gInput.innerHTML}+`
});
Minus.addEventListener('click', ()=> {
    gInput.innerHTML = `${gInput.innerHTML}-`
});
Multiply.addEventListener('click', ()=> {
    gInput.innerHTML = `${gInput.innerHTML}*`
});
Divide.addEventListener('click', ()=> {
    gInput.innerHTML = `${gInput.innerHTML}/`
});
//Numbers
One.addEventListener('click', ()=> {
    gInput.innerHTML = `${gInput.innerHTML}1`;
});
Two.addEventListener('click', ()=> {
    gInput.innerHTML = `${gInput.innerHTML}2`;
});
Three.addEventListener('click', ()=> {
    gInput.innerHTML = `${gInput.innerHTML}3`;
});
Four.addEventListener('click', ()=> {
    gInput.innerHTML = `${gInput.innerHTML}4`;
});
Five.addEventListener('click', ()=> {
    gInput.innerHTML = `${gInput.innerHTML}5`;
});
Six.addEventListener('click', ()=> {
    gInput.innerHTML = `${gInput.innerHTML}6`;
});
Seven.addEventListener('click', ()=> {
    gInput.innerHTML = `${gInput.innerHTML}7`;
});
Eight.addEventListener('click', ()=> {
    gInput.innerHTML = `${gInput.innerHTML}8`;
});
Nine.addEventListener('click', ()=> {
    gInput.innerHTML = `${gInput.innerHTML}9`;
});
Zero.addEventListener('click', ()=> {
    gInput.innerHTML = `${gInput.innerHTML}0`;
});
Dot.addEventListener('click', ()=> {
    gInput.innerHTML = `${gInput.innerHTML}.`;
});


//Keyboard events
document.addEventListener('keydown', Event => {
    if (Event.key === 'Enter') {
        Event.preventDefault();
        enter.click();
    }
});
document.addEventListener('keydown', event => {
    if (event.code === 'Backspace') {
        event.preventDefault();
        Cancel.click();
    }
});
document.addEventListener('keypress', Event => {
    if (Event.key === '=') {
        enter.click();
    }
});
document.addEventListener('keypress', Event => {
    if (Event.key === '+') {
        Plus.click();
    }
});
document.addEventListener('keypress', Event => {
    if (Event.key === '-') {
        Minus.click();
    }
});
document.addEventListener('keypress', Event => {
    if (Event.key === '*') {
        Multiply.click();
    }
});
document.addEventListener('keypress', Event => {
    if (Event.key === '.') {
        Dot.click();
    }
});
document.addEventListener('keypress', Event => {
    if (Event.key === '/') {
        Divide.click();
    }
});
document.addEventListener('keypress', Event => {
    if (Event.key === '1') {
        One.click();
    }
});
document.addEventListener('keypress', Event => {
    if (Event.key === '2') {
        Two.click();
    }
});
document.addEventListener('keypress', Event => {
    if (Event.key === '3') {
        Three.click();
    }
});
document.addEventListener('keypress', Event => {
    if (Event.key === '4') {
        Four.click();
    }
});
document.addEventListener('keypress', Event => {
    if (Event.key === '5') {
        Five.click();
    }
});
document.addEventListener('keypress', Event => {
    if (Event.key === '6') {
        Six.click();
    }
});
document.addEventListener('keypress', Event => {
    if (Event.key === '7') {
        Seven.click();
    }
});
document.addEventListener('keypress', Event => {
    if (Event.key === '8') {
        Eight.click();
    }
});document.addEventListener('keypress', Event => {
    if (Event.key === '9') {
        Nine.click();
    }
});document.addEventListener('keypress', Event => {
    if (Event.key === '0') {
        Zero.click();
    }
});






