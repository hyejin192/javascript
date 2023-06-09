function openCity(cityName){
    let tabcontent, tablinks;
    tabcontent=document.getElementsByClassName("tabcontent")
    // console.log(tabcontent); // 배열

    // tabcontent의 각 요소에 대해 반복
    for(let i=0; i<tabcontent.length; i++) {
        tabcontent[i].style.display="none";
    }

    document.getElementById(cityName).style.display="block";

    // class는 무조건 배열로 들어옴
    let topright=document.getElementsByClassName('topright');
    console.log(topright)

    for (let i=0; i<topright.length; i++) {
        // 이벤트 핸들러(Event Handler) : 특정 이벤트가 발생했을 때 실행되는 함수
        topright[i].addEventListener('click',function(){
            this.parentElement.style.display="none";
        })
    }
}

// 초기에 기본으로 열려 있는 도시 탭을 설정
document.getElementById('defaultOpen').click();