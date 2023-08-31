let lastPressed = null;

const calc = () => {
    const ele = document.getElementById('exp');
    const exp = ele.value;
    console.log('rcvd expression: ', exp)
    showButton_AC();
    lastPressed = '=';

    try {
        const answer = math.evaluate(exp);
        ele.value = answer;

    } catch (exceptionVar) {
        ele.value = 'error'
    }

}

const pressButton = (theButton, special = false) => {
    console.log('button pressed: ', theButton);
    showButton_BS();

    const ele = document.getElementById('exp');
    const exp = ele.value;

    let newInput = '';

    if (special === false) {
        const newInput = (lastPressed == '=') ? theButton : exp.concat(theButton);
        ele.value = newInput;
        lastPressed = theButton;
    } else {
        if (theButton == 'bs') {
            newInput = (lastPressed == '=') ? '' : exp.slice(0, -1);
        } else {
             newInput = exp.concat(theButton);
        }

        if (newInput.length <= 0) {
            showButton_AC();
        } else {
            showButton_BS();
        }

        lastPressed = theButton;
        ele.value = newInput;
    }
}

const showButton_BS = () => {
    document.getElementById('btn-BS').classList.remove('hide');
    document.getElementById('btn-AC').classList.add('hide');
}
const showButton_AC = () => {
    document.getElementById('btn-AC').classList.remove('hide');
    document.getElementById('btn-BS').classList.add('hide');
}

const handleRealKeypress = (e) => {
    //console.log('real key pressed', e);
    //console.log('current value', e.target.value);
    if (e.keyCode == 13) {
        calc();
    }

    if (e.target.value.length <= 0) {
        showButton_AC();
    } else {
        showButton_BS();
    }
}
const handleRealKeypressFilter = (e) => {
    console.log('real key pressed', e.key);

    const specialKeys = [
        '+', '-', '*', '/',
        'Shift',
        'Control',
    ];

    if ( (!specialKeys.includes(e.key)) && (lastPressed == '=') ) {
        const ele = document.getElementById('exp');
        ele.value = '';
    }


    const allowedKeys = [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
        '.', '(', ')', '+', '-', '*', '/',
        'Backspace', 'Shift', 'Control'
    ];

    if (allowedKeys.includes(e.key)) {
        lastPressed = e.key;
        return true;
    } else {
        e.preventDefault();
    }
}
