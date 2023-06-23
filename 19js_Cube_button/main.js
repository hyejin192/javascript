let rotationX = 0;
let rotationY = 0;
let cube = document.querySelector('.box-area');
// 숫자 뒤집힘 해결
let six = document.querySelector('.box-bottom h2');
let three = document.querySelector('.box-back h2');
let four = document.querySelector('.box-left h2');

four.style.transform='rotateY(180deg)';
six.style.transform='rotateX(180deg)';

cube.style.transform = `rotateX(0deg) rotateY(0deg)`;

function front(){
    cube.style.transform=`rotateX(0deg) rotateY(0deg)`;
}

function rotateXAxis(n) {
    rotationX += (90*n)
    cube.style.transform = `rotateX(${rotationX}deg) rotateY(0deg)`;
    three.style.transform = "rotateX(180deg)";
}

function rotateYAxis(n) {
    rotationY += (90*n)
    cube.style.transform = `rotateX(0deg) rotateY(${rotationY}deg)`;
    three.style.transform = "rotateY(180deg)";
}
