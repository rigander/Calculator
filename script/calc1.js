
function Methods () {
    this.input = document.querySelector('#input');
    this.result = document.querySelector('#result');
    this.calcButtons = document.querySelectorAll(".number");
    this.keyCodes = ['+', '-', '*', '.', '/', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    this.enter = document.querySelector('#enter');
    this.cancel = document.querySelector('#c');
    this.inputField = () => {
        return document.querySelector('#input').innerHTML;
    }
    this.clearFields = ()=> {
        document.querySelector('#result').innerHTML = '';
        document.querySelector('#input').innerHTML = '';
    }
    this.getResult = ()=> {
         if (document.querySelector('#input').innerHTML.match(/[^\d.+\-*\/]|\D\D/)
             || document.querySelector('#input').innerHTML === '') {
            document.querySelector('#result').innerHTML = '';
         return   document.querySelector('#input').innerHTML = '';
        }if (document.querySelector('#input').innerHTML.match(/\d\/0/)) {
            document.querySelector('#input').innerHTML = '';
            document.querySelector('#result').innerHTML = 'Error';
        }else {
            document.querySelector('#result').innerHTML =
                eval(document.querySelector('#input').innerHTML);
        }
    }

    this.backspace = ()=> {
         this.subStr = document.querySelector('#input').innerHTML.slice(0, -1);
        document.querySelector('#input').innerHTML = this.subStr === '' ? '' : this.subStr;
        }
}
const methods = new Methods();

methods.calcButtons.forEach(item => {
    item.addEventListener('click', event => {
        methods.input.innerHTML = methods.input.innerHTML + item.value;
    })
});
methods.enter.addEventListener('click', methods.getResult);
methods.cancel.addEventListener('click', methods.clearFields);

document.addEventListener('keydown', event => {
    if (['Enter', '='].includes(event.key)) {
        event.preventDefault();
        methods.getResult();
    }
    if (methods.keyCodes.includes(event.key)) {
        methods.input.innerHTML = methods.inputField() + event.key;
    }
    if (event.key === 'Delete') {
        event.preventDefault();
        methods.clearFields();
    }
    if (event.key === 'Backspace') {
        event.preventDefault();
        methods.backspace();
    }
});








