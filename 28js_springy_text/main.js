let allText = document.querySelectorAll('.text');
let delay = 0;


// allText.forEach(function(el,idx){}); 
// el에는 각각의 아이템이 받아지고, idx는 아이템의 index번호를 받는다

allText.forEach((el,idx)=>{
    // 매개변수가 두개이상일 땐 괄호를 생략할 수 없다
    el.style.animationDelay = `${delay}s`;
    el.style.zIndex = allText.length - idx; 
    el.classList.add('base-anim');

    delay += 0.2;
});

document.getElementById('five').addEventListener('mousemove',(e)=>{
    let innerWidth = window.innerWidth; // viewport의 넓이값
    let innerHeight = window.innerHeight; // viewport의 높이값
    let clientX =  e.clientX;
    let clientY =  e.clientY;


    let percentX = clientX/innerWidth;
    let maxRangeX = innerWidth*0.15;
    let minX = innerWidth/2 - maxRangeX;
    let maxX = innerWidth/2 + maxRangeX;
    let difX = maxX - minX;
    let pxOffsetX = difX * percentX;

    let left = minX + pxOffsetX;

    let percentY = clientX/innerHeight;
    let maxRangeY = innerHeight*0.15;
    let minY = innerHeight/2 - maxRangeY;
    let maxY = innerHeight/2 + maxRangeY;
    let difY = maxY - minY;
    let pxOffsetY = difY * percentY;

    let top = minY + pxOffsetY;

    allText.forEach((el,idx)=>{
        // el.animate([keyframe],{options})
        el.animate([
            {top: `${top}px`, left: `${left}px`}
        ],{
            duration:3000, fill:'forwards' ,delay:idx * 50
        })
    })


})