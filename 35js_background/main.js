let docwidth=window.innerWidth; // 화면의 넓이값
let wrap=document.querySelector('.newspaper');
let imgs=document.querySelectorAll('.newspaperWrap .hb');
let slideWidth=wrap.clientWidth; // wrap의 넓이값


wrap.addEventListener('mousemove',function(e){
    let mouseX=e.offsetX;
    console.log(mouseX)
    let offset=(mouseX/docwidth)*slideWidth - mouseX/2;

    for(let i=0; i<imgs.length; i++){
        imgs[i].style.transform=`translateX(${-offset}px)`;
    }
})

wrap.addEventListener('mouseleave',function(){
    for(let i=0; i<imgs.length; i++){
        imgs[i].style.transform=`translateX(0px)`;
        imgs[i].style.transition ='0.5s';
    }
})

