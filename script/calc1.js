
//Constructor
function Calculator () {
    this.input = document.querySelector('#input');
    this.result = document.querySelector('#result');
    this.calcButtons = document.querySelectorAll(".number");
    this.keyCodes = ['+', '-', '*', '.', '/', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    this.enter = document.querySelector('#enter');
    this.cancel = document.querySelector('#c');

    this.enter.addEventListener('click', event => {
            return this.getResult();
        });
    this.cancel.addEventListener('click', event => {
            return this.clearFields();
        });
    this.calcButtons.forEach(item => {
        item.addEventListener('click', event => {
            this.input.innerHTML = this.input.innerHTML + item.value;
        })
    })
    document.addEventListener('keydown', event => {
        if (['Enter', '='].includes(event.key)) {
            event.preventDefault();
            this.getResult();
        }
        if (this.keyCodes.includes(event.key)) {
            this.input.innerHTML = this.inputField() + event.key;
        }
        if (event.key === 'Delete') {
            event.preventDefault();
            this.clearFields();
        }
        if (event.key === 'Backspace') {
            event.preventDefault();
            this.backspace();
        }
    });
}

//Prototype level methods
Calculator.prototype.inputField = function () {
    return this.input.innerHTML;
}
Calculator.prototype.resultField = function () {
    return this.result.innerHTML;
}

Calculator.prototype.clearFields = function () {
    this.result.innerHTML = '';
    return this.input.innerHTML = '';
}
Calculator.prototype.backspace = function () {
    this.subStr = document.querySelector('#input').innerHTML.slice(0, -1);
    document.querySelector('#input').innerHTML = this.subStr === '' ? '' : this.subStr;
}
Calculator.prototype.getResult = function () {
    if (this.input.innerHTML.match(/[^\d.+\-*\/]|\D\D/)
        || this.input.innerHTML === '') {
        this.result.innerHTML = '';
        return   this.input.innerHTML = '';
    }if (this.input.innerHTML.match(/\d\/0/)) {
        this.input.innerHTML = '';
        this.result.innerHTML = 'Error';
    }else {
        this.result.innerHTML =
            eval(this.input.innerHTML);
    }
}



// New object
const elCalculator = new Calculator();



















