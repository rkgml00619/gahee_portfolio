const section = document.querySelectorAll("#container > div");
const header = document.querySelector("#header");
const headerMenu = document.querySelectorAll("#header .center .gnb li");
const bgCircle = document.querySelector(".main .bg_circleWrap");
const profileWrap = document.querySelector("#container .profile .profileWrap");
const otherWorkWrap = document.querySelector("#container .otherWork .otherWorkWrap");

window.addEventListener("scroll", function(){
    let windowPosition = window.scrollY;
    
    // header on클래스 제어
    if(windowPosition <= section[1].offsetTop - 200 || windowPosition >= section[4].offsetTop - 200){
        header.classList.add("on");
        header.style.background = "transparent";
    }
    else if(windowPosition >= section[2].offsetTop - 200 && windowPosition < section[3].offsetTop){
        header.classList.add("on");
        header.style.background = "#111";
    }
    else {
        header.classList.remove("on");
        header.style.background = "#fff";
    }

    for(let i = 0; i < section.length; i++){
        if(windowPosition >= section[i].offsetTop){
            headerMenu.forEach(function(headerMenu){
                headerMenu.classList.remove("on");
            });
            headerMenu[i].classList.add("on");
        }
    }

    // profile 섹션 크기 제어 - 화면에 도달할 때
    if(windowPosition >= section[1].offsetTop / 2){
        profileWrap.style.transform = "scale(1)";
    }
    else {
        profileWrap.style.transform = "scale(0.9)";
    }

    // otherWork 섹션 크기 제어 - 화면에 도달할 때
    if(windowPosition >= section[3].offsetTop - 200){
        otherWorkWrap.style.transform = "scale(1)";
    }
    else {
        otherWorkWrap.style.transform = "scale(0.9)";
    }
});


// 다시 main 섹션으로 돌아왔을 때 circle 애니메이션 제어
window.addEventListener("wheel", function(e){
    let windowPosition = window.scrollY;
    
    if(windowPosition < section[1].offsetTop - 400 && e.deltaY < 0){
        bgCircle.classList.remove("on");
        setTimeout(function(){
            bgCircle.classList.add("on");
        }, 100);
    }
})

// 처음 화면에서의 main 섹션 circle 애니메이션 제어
window.addEventListener("load", function(){
    setTimeout(function(){
        bgCircle.classList.add("on");
    }, 100);
})