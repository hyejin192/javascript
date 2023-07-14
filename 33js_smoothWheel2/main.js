
let galleryWrapper = document.querySelectorAll('.hero_gallery_wrapper');



//console.log(galleryWidth)

let scroll = {
    current: [],
    target: [],
    ease: 0.05,
    speed: 0.25,
    limit: []
}
let init = () => {
    onResize();
    initAnimation();
}

let onResize = () => {
    galleryWrapper.forEach((wrapper, index) => {
        let galleryWidth = wrapper.getBoundingClientRect().width;
        scroll.limit[index] = galleryWidth - window.innerWidth;
    })


}
let initAnimation = () => {
    galleryWrapper.forEach((wrapper, index) => {
        scroll.current[index] = 0;
        scroll.target[index] = 0;
    })
}


let onScroll = function (e) {

    let speed = e.deltaY; // 마우스 휠을 올릴 때와 내릴 때
    //console.log(speed)

    galleryWrapper.forEach((wrapper, index) => {
        if(index%2 == 0){
            scroll.target[index] += speed * scroll.speed;
        }else {
            scroll.target[index] -= speed * scroll.speed;
        }
    })

    return speed;
}

function clamp(max, number) {
    return Math.min(number, max)
}

function lerp(p1, p2, p3) {
    return p1 + (p2 - p1) * p3;
}
let update = () => {

    galleryWrapper.forEach((wrapper, index) => {
        scroll.target[index] = clamp(scroll.limit[index], scroll.target[index])
        scroll.current[index] = lerp(scroll.current[index], scroll.target[index], scroll.ease)
        scroll.current[index] = parseFloat(scroll.current[index].toFixed(2))
    
        wrapper.style.transform = `translate3d(${-scroll.current[index]}px,0,0)`
    })





    window.requestAnimationFrame(update)
}
update();
window.addEventListener('resize', onResize)
window.addEventListener('wheel', onScroll)
window.addEventListener('load', () => {
    init();
})