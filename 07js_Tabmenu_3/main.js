function openCity(CityName,elem,color) {
    let tabcontent = document.getElementsByClassName('tabcontent');

    for(let i=0; i<tabcontent.length; i++) {
        tabcontent[i].style.display="none";
    }
    let tablinks = document.getElementsByClassName('tablink');
    for (let i=0; i<tablinks.length; i++) {
        tablinks[i].style.backgroundColor=""; // 배경색을 먼저 지움
    }
    elem.style.backgroundColor=color;
    document.getElementById(CityName).style.display="block";


}

document.getElementById('defaultOpen').click();