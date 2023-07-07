const portfolio = document.querySelector(".portfolio");
const portfolioNextSection = document.querySelector(".otherWork");
const portfolioTab = document.querySelector(".portfolio .portfolioConts");
const portfolioMenu = document.querySelectorAll(".portfolio .tabMenu li");
const portfolioConts = document.querySelectorAll(".portfolio .tabConts .tabList");
const leftImgWrap = document.querySelectorAll(".portfolio .tabConts .tabList .left");
const portFolioNext = document.querySelector(".portfolio .center .portfolioConts .tabConts .arrowWrap a.next");
const portFolioPrev = document.querySelector(".portfolio .center .portfolioConts .tabConts .arrowWrap a.prev");
const imgArrowWrap = document.querySelectorAll(".portfolio .tabConts .tabList .left .imgArrowWrap");
const imgNext = document.querySelector(".portfolio .center .portfolioConts .tabConts .tabList .left .imgArrowWrap a.next");
const imgPrev = document.querySelector(".portfolio .center .portfolioConts .tabConts .tabList .left .imgArrowWrap a.prev");

let tabCount = 0;
let autoTab;
let check = true;
let contsImgs;
let autoImgChange;
let imgCount = 0;


imgChange(0);
portfolioConts[0].classList.add("on");


// 탭메뉴 클릭 시 변경
for(let i = 0; i < portfolioMenu.length; i++){
    portfolioMenu[i].onclick = function(){
        tabCount = i;
        tabChange(i);
    }
}

// 포트폴리오 섹션에 스크롤이 도달했을 때 자동 탭이 시작됨
window.addEventListener("scroll", function(){
    let windowPosition = window.scrollY;

    if(windowPosition >= portfolio.offsetTop && windowPosition < portfolioNextSection.offsetTop){
        if(check === true){
            check = false;

            // 탭 자동 실행
            autoTab = setInterval(function(){
                if(tabCount >= portfolioMenu.length - 1){
                    tabCount = 0;
                }
                else {
                    tabCount++;
                }

                tabChange(tabCount);
            }, 4000);
        }
    }
    else {
        if(check === false){
            clearInterval(autoTab);
        }
    }
});

window.addEventListener("load", function(){
    // 탭 전체에 마우스 호버 시 자동실행 멈춤, 재실행
    portfolioTab.onmouseenter = function(){
        clearInterval(autoTab);
    }
    portfolioTab.onmouseleave = function(){
        autoTab = setInterval(function(){    
            if(tabCount >= portfolioMenu.length - 1){
                tabCount = 0;
            }
            else {
                tabCount++;
            }
            tabChange(tabCount);
        }, 4000);
    }
});
// 탭 전체에 마우스 호버 시 자동실행 멈춤, 재실행
portfolioTab.onmouseenter = function(){
    clearInterval(autoTab);
}
portfolioTab.onmouseleave = function(){
    autoTab = setInterval(function(){    
        if(tabCount >= portfolioMenu.length - 1){
            tabCount = 0;
        }
        else {
            tabCount++;
        }
        tabChange(tabCount);
    }, 1000);
}

// 포트폴리오 컨텐츠 좌우 넘김
portFolioNext.onclick = function(e){
    e.preventDefault();
    
    tabCount = tabCount;

    if(tabCount === portfolioConts.length - 1){
        tabCount = 0;
    }
    else {
        tabCount++;
    }
    tabChange(tabCount);
}
// 포트폴리오 컨텐츠 좌우 넘김
portFolioPrev.onclick = function(e){
    e.preventDefault();
    
    tabCount = tabCount;

    if(tabCount === 0){
        tabCount = portfolioConts.length - 1;
    }
    else {
        tabCount--;
    }
    tabChange(tabCount);
}

for(let i = 0; i < leftImgWrap.length; i++){
    leftImgWrap[i].addEventListener("scroll", function(){
        if(leftImgWrap[i].scrollTop > 50){
            imgArrowWrap[i].style.position = "sticky";
        }
        else {
            imgArrowWrap[i].style.position = "absolute";
        }
    });
}


// 탭 변경 리팩토링
function tabChange(index){
    // 탭리스트 변경작업
    portfolioMenu.forEach(function(menu, idx){
        menu.classList.remove("on");
        portfolioConts[idx].classList.remove("on");
        portfolioConts[idx].style.opacity = "0";
        portfolioConts[idx].style.transform = "translateY(-50px)";
    });
    portfolioMenu[index].classList.add("on");
    portfolioConts[index].classList.add("on");
    setTimeout(() => {
        portfolioConts[index].style.opacity = "1";
        portfolioConts[index].style.transform = "translateY(0)";
    }, 1);
    portfolioConts[index].querySelector(".left").scrollTop = 0;

    imgChange(tabCount);
}


// 탭리스트의 이미지 변경작업 리팩토링
function imgChange(index){
    contsImgs = portfolioConts[index].querySelectorAll(".left > img");
    contsImgs.forEach(function(img){
        img.classList.remove("on");
    });
    contsImgs[0].classList.add("on");
    
    portfolioConts[index].querySelector(".imgArrowWrap .next").onclick = function(e){
        e.preventDefault();

        if(imgCount === contsImgs.length - 1){
            imgCount = 0;
        }
        else {
            imgCount++;
        }
        contsImgs.forEach(function(img){
            img.classList.remove("on");
        })
        contsImgs[imgCount].classList.add("on");
        portfolioConts[index].querySelector(".left").scrollTop = 0;
    }
    portfolioConts[index].querySelector(".imgArrowWrap .prev").onclick = function(e){
        e.preventDefault();

        if(imgCount === 0){
            imgCount = contsImgs.length - 1;
        }
        else {
            imgCount--;
        }
        contsImgs.forEach(function(img){
            img.classList.remove("on");
        });
        contsImgs[imgCount].classList.add("on");
        portfolioConts[index].querySelector(".left").scrollTop = 0;
    }
}