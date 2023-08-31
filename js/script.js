let lastPressed = null;

const calc = () => {
    const ele = document.getElementById('exp');
    const exp = ele.value;
    console.log('rcvd expression: ', exp)
    showButton_AC();

    try {
        const answer = math.evaluate(exp);
        ele.value = answer;

    } catch (exceptionVar) {
        ele.value = 'error'
    } finally {
        lastPressed = '=';
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
