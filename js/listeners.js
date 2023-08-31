const clickOrTouch = (('ontouchend' in window)) ? 'touchstart' : 'click';

document.getElementById('r1c1').addEventListener(clickOrTouch, () => pressButton('('));
