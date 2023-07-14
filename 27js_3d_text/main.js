let human;
let bg;
let text3d;
let pipe;

let x=0;
let y=0;
let mx=0;
let my=0;
let speed=0.009;

window.onload=function(){} // 이렇게 쓸 때는 onload load의 이벤트라고 생각
window.addEventListener('load',function(){
    human = this.document.getElementById('human');
    bg = this.document.getElementById('bg');
    text3d = this.document.getElementById('text3d');
    pipe = this.document.getElementById('pipe');

    window.addEventListener("mousemove", mouseFunc)

    function mouseFunc(e){
        // e : 마우스가 움직일 때 발생하는 이벤트
        x=(e.clientX - window.innerWidth/2) 
        //화면의 반만큼을 자르고 반에서 부터 0으로 시작
        // console.log(x)
        y=(e.clientY - window.innerHeight/2) 
        // 화면의 높이중 반만큼을 자르고 반에서부터 0으로 시작
        // console.log(y)

    }
    loop();

    function loop(){
        mx += (x - mx) * speed; // 10만큼 움직여도 0.09만큼 움직이게 값을 많이 빼줌
        my += (y - my) * speed;

        human.style.transform = `translate(${mx/9}px,${my/9}px)`; 
        bg.style.transform = `translate(${-mx/8}px,${-my/8}px)`; 
        pipe.style.transform = `translate(${mx/4}px,${my/3}px)`; 
        text3d.style.transform = `translate3d(${mx/2}px,${my/2}px,0) rotate3d(0, 1, 0, ${mx/50}deg)`;
        // 나누는 값이 많을 수록 천천히 움직인다
        // -로 하면 값이 반대로 움직인다

        //3d text


        // 반복적으로 실행되게
        // requestAnimationFrame : (setInterval과 비슷하지만 용량을 작게 먹는 다른 함수)
        window.requestAnimationFrame(loop)
    }
}) // 이 방법을 더 권장