let gallery=document.querySelector('.hero_gallery');
let galleryWrapper=gallery.querySelector('.hero_gallery_wrapper');
let galleryImages=gallery.querySelectorAll('.hero_gallery_image');

let galleryWidth=galleryWrapper.getBoundingClientRect().width;
//console.log(galleryWidth)

let scroll={
    current:0,
    target:0,
    ease:0.05,
    speed:0.25,
    limit:galleryWidth- window.innerWidth
}
let init=()=>{
    onResize();
}

let onResize=()=>{
    galleryWidth=galleryWrapper.getBoundingClientRect().width;
    scroll.limit=galleryWidth- window.innerWidth
    
}


let onScroll=function(e){

    let speed=e.deltaY;
    //console.log(speed)
    scroll.target += speed * scroll.speed;
    //console.log(scroll.target)
    return speed;
}
function clamp(min,max,number){
    return Math.min(Math.max(number,min),max)
}
function lerp(p1,p2,p3){
    return p1+(p2 -  p1)*p3;
}
let update=()=>{
    scroll.target=clamp(0,scroll.limit,scroll.target)
    //console.log(scroll.target)
    scroll.current=lerp(scroll.current, scroll.target,scroll.ease)
    scroll.current=parseFloat(scroll.current.toFixed(2))
    console.log(scroll.current)


    galleryWrapper.style.transform=`translate3d(${-scroll.current}px,0,0)`


    window.requestAnimationFrame(update)
}
update();
window.addEventListener('resize',onResize)
window.addEventListener('wheel',onScroll)
window.addEventListener('load',()=>{
    init();
})