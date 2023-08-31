const calc = () => {
    const ele = document.getElementById('exp');
    const exp = ele.value;
    console.log('rcvd expression: ', exp)

    const answer = math.evaluate(exp);
    ele.value = answer;

}
