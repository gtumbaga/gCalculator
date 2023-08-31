const clickOrTouch = (('ontouchend' in window)) ? 'touchstart' : 'click';

document.getElementById('r1c1').addEventListener(clickOrTouch, () => pressButton('('));
document.getElementById('r1c2').addEventListener(clickOrTouch, () => pressButton(')'));
document.getElementById('r1c3').addEventListener(clickOrTouch, () => pressButton('%'));
document.getElementById('btn-BS').addEventListener(clickOrTouch, () => pressButton('bs', true));
document.getElementById('btn-AC').addEventListener(clickOrTouch, () => pressButton('bs', true));

document.getElementById('r2c1').addEventListener(clickOrTouch, () => pressButton('7'));
document.getElementById('r2c2').addEventListener(clickOrTouch, () => pressButton('8'));
document.getElementById('r2c3').addEventListener(clickOrTouch, () => pressButton('9'));
document.getElementById('r2c4').addEventListener(clickOrTouch, () => pressButton('/', true));

document.getElementById('r3c1').addEventListener(clickOrTouch, () => pressButton('4'));
document.getElementById('r3c2').addEventListener(clickOrTouch, () => pressButton('5'));
document.getElementById('r3c3').addEventListener(clickOrTouch, () => pressButton('6'));
document.getElementById('r3c4').addEventListener(clickOrTouch, () => pressButton('*', true));

document.getElementById('r4c1').addEventListener(clickOrTouch, () => pressButton('1'));
document.getElementById('r4c2').addEventListener(clickOrTouch, () => pressButton('2'));
document.getElementById('r4c3').addEventListener(clickOrTouch, () => pressButton('3'));
document.getElementById('r4c4').addEventListener(clickOrTouch, () => pressButton('-', true));

document.getElementById('r5c1').addEventListener(clickOrTouch, () => pressButton('0'));
document.getElementById('r5c2').addEventListener(clickOrTouch, () => pressButton('.'));
document.getElementById('r5c3').addEventListener(clickOrTouch, () => calc());
document.getElementById('r5c4').addEventListener(clickOrTouch, () => pressButton('+', true));
