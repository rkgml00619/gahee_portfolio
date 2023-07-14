// 반응형 화면 사이즈 확인
const pc = matchMedia("screen and (min-width: 1201px)");
const tablet = matchMedia("screen and (max-width: 1200px)");
const mobile = matchMedia("screen and (max-width: 768px)");

const section = document.querySelectorAll("#container > div");
const header = document.querySelector("#header");
const headerMenu = document.querySelectorAll("#header .center .gnb li");
const bgCircle = document.querySelector(".main .bg_circleWrap");
const profileWrap = document.querySelector("#container .profile .profileWrap");
const otherWorkWrap = document.querySelector("#container .otherWork .otherWorkWrap");

let oneCheck = true;

window.addEventListener("scroll", function(){
    let windowPosition = window.scrollY;
    
    if(windowPosition == section[0].offsetTop){
        if(oneCheck === true){
            oneCheck = false;
            bgCircle.classList.remove("on");
            setTimeout(function(){
                bgCircle.classList.add("on");
            }, 100);
        }
    }
    
    // header on클래스 제어
    if(windowPosition <= section[1].offsetTop - 200){
        header.classList.add("on");
        header.style.background = "transparent";
        header.style.boxShadow = "0 10px 10px rgba(0,0,0, 0)";
    }
    else if(windowPosition >= section[2].offsetTop - 200 && windowPosition < section[3].offsetTop){
        header.classList.add("on");
        header.style.background = "#111";
        header.style.boxShadow = "0 10px 10px rgba(0,0,0, 0.1)";
    }
    else {
        header.classList.remove("on");
        header.style.background = "#fff";
        header.style.boxShadow = "0 10px 10px rgba(0,0,0, 0.1)";
    }

    for(let i = 0; i < section.length; i++){
        if(windowPosition >= section[i].offsetTop){
            headerMenu.forEach(function(headerMenu){
                headerMenu.classList.remove("on");
            });
            headerMenu[i].classList.add("on");

            if(i == 4){
                header.style.background = "#bc0400";
                header.classList.add("on");
                if(tablet.matches){
                    header.style.boxShadow = "0 10px 10px rgba(0,0,0, 0.1)";
                }
                else {
                    header.style.boxShadow = "0 10px 10px rgba(0,0,0, 0)";
                }
            }
        }
    }

    // profile 섹션 크기 제어 - 화면에 도달할 때
    if(windowPosition >= section[1].offsetTop / 2){
        profileWrap.style.transform = "scale(1) translate3d(0, 0, 0)";
    }
    else {
        profileWrap.style.transform = "scale(0.9) translate3d(0, -100px, 0)";
    }

    // otherWork 섹션 크기 제어 - 화면에 도달할 때
    if(windowPosition >= section[3].offsetTop - 200){
        otherWorkWrap.style.transform = "scale(1) translate3d(0, 0, 0)";
    }
    else {
        otherWorkWrap.style.transform = "scale(0.9) translate3d(0, -150px, 0)";
    }
});


// 다시 main 섹션으로 돌아왔을 때 circle 애니메이션 제어
window.addEventListener("wheel", function(e){
    let windowPosition = window.scrollY;
    
    if(windowPosition <= section[0].offsetTop + 200 && e.deltaY < 0){
        bgCircle.classList.remove("on");
        setTimeout(function(){
            bgCircle.classList.add("on");
        }, 100);
    }
    else if(windowPosition == section[0].offsetTop && mobile.matches){
        bgCircle.classList.remove("on");
        setTimeout(function(){
            bgCircle.classList.add("on");
        }, 100);
    }
});

document.onkeydown = function(e){
    if(e.code === "Home"){
        bgCircle.classList.remove("on");
        setTimeout(function(){
            bgCircle.classList.add("on");
        }, 100);
    }
}

// 처음 화면에서의 main 섹션 circle 애니메이션 제어
window.addEventListener("load", function(){
    setTimeout(function(){
        bgCircle.classList.add("on");
    }, 100);
});



// const blogBtn = document.querySelector(".contact .center .contactConts .right .infoWrap .infoList > a.blog");

// blogBtn.onclick = function(e){
//     e.preventDefault();

//     alert("기술블로그는 준비 중입니다.");
// }