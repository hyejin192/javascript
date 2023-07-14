window.addEventListener('mousemove',function(e){
    // 이미지가 마우스 따라 움직임
    document.querySelector('#slidephoto').style.top=`${e.clientY}px`
    document.querySelector('#slidephoto').style.left=`${e.clientX}px`
    document.querySelector('#slidephoto').style.transform = `translate(${-e.clientX * 0.2}px , ${-e.clientY * 0.2}px)`
})

/* 첫번째 이미지 */
document.querySelector('#chainn').addEventListener('mousemove' , (e)=>{
    document.querySelector('#slidephotos').style.marginTop = "0%"
    document.querySelector('#chainn').style.color = "#19A7CE"

})
document.querySelector('#chainn').addEventListener('mouseleave', (e)=>{
    document.querySelector('#chainn').style.color="#fff";
})
/* 두번째 이미지 */
document.querySelector('#aty').addEventListener('mousemove' , (e)=>{
    document.querySelector('#slidephotos').style.marginTop = "-120%"
    document.querySelector('#aty').style.color = "#19A7CE"

})
document.querySelector('#aty').addEventListener('mouseleave', (e)=>{
    document.querySelector('#aty').style.color="#fff";
})
/* 세번째 이미지 */
document.querySelector('#mic').addEventListener('mousemove' , (e)=>{
    document.querySelector('#slidephotos').style.marginTop = "-240%"
    document.querySelector('#mic').style.color = "#19A7CE"

})
document.querySelector('#mic').addEventListener('mouseleave', (e)=>{
    document.querySelector('#mic').style.color="#fff";
})
/* 네번째 이미지 */
document.querySelector('#tapso').addEventListener('mousemove' , (e)=>{
    document.querySelector('#slidephotos').style.marginTop = "-360%"
    document.querySelector('#tapso').style.color = "#19A7CE"

})
document.querySelector('#tapso').addEventListener('mouseleave', (e)=>{
    document.querySelector('#tapso').style.color="#fff";
})

document.querySelector('#eff').addEventListener('mousemove',function(){
    document.querySelector('#slidephoto').style.display="initial";
    document.querySelector('#slidephoto').style.opacity=1;
})
document.querySelector('#eff').addEventListener('mouseleave',function(){
    document.querySelector('#slidephoto').style.display="none";
    document.querySelector('#slidephoto').style.opacity=0;
})