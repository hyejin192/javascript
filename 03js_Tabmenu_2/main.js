function openCity(evt, cityName){
    let tabcontent=document.getElementsByClassName("tabcontent");
    // console.log(tabcontent);

    for(let i=0; i<tabcontent.length; i++) {
        tabcontent[i].style.display="none"
    }
    let tablinks = document.getElementsByClassName('tablinks');
    
    for (let i=0; i<tablinks.length; i++) {
        tablinks[i].classList.remove('active')

    }
    // console.log(evt.currentTarget);
    // 클릭한 요소를 가져와 클래스명 active를 추가 == this
    evt.currentTarget.classList.add('active');

    document.getElementById(cityName).style.display="block";

    // x 표시 누르면 없어짐
    let topright=document.getElementsByClassName('topright');
    console.log(topright)
    
    for (let i=0; i<topright.length; i++) {
        // 이벤트 핸들러(Event Handler) : 특정 이벤트가 발생했을 때 실행되는 함수
        topright[i].addEventListener('click',function(){
            this.parentElement.style.display="none";
        })
    }

}

document.getElementById('defaultOpen').click();

// classsList 메서드
// .cloassList.add("active") --> active 클래스명을 추가
// .cloassList.remove("active") --> active 클래스명을 제거
// .cloassList.toggle("active") --> active 클래스명이 존재하면 active 클래슬르 제거, active 클래스명이 존재하지 않으면 active 클래스명을 추가해라
// .cloassList.contains("active") --> active 클래스명이 존재여부를 물음(true,false로 반환)
// .cloassList.replace("A","B") --> A 클래스를 찾고, B 클래스로 변경