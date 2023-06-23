let mainMenu=document.querySelectorAll('.main_menu>li'),
    header=document.querySelector('header');

    //mainMenu.forEach(mainMenu의 item 각각의 할일)
    //mainMenu.forEach(function(item){})//item은 요소각각을 의미
    //mainMenu.forEach(function(item){})
    mainMenu.forEach((item)=>{
        item.addEventListener('mouseover',function(){
            // this를 사용할 땐 되도록이면 화살표함수 말고 그냥 함수 이용
            console.log(this)
            let submenuHeight= this.querySelector('.sub_menu').offsetHeight;
            console.log(submenuHeight)
            header.style.height=`${submenuHeight + 110}px`
        })
        item.addEventListener('mouseout',function(){
            header.style.height=`110px`
        })
    })
