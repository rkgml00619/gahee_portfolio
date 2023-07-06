const portfolio = document.querySelector(".portfolio");
const portfolioTab = document.querySelector(".portfolio .portfolioConts");
const portfolioMenu = document.querySelectorAll(".portfolio .tabMenu li");
const portfolioConts = document.querySelectorAll(".portfolio .tabConts .tabList");

let tabCount = 1;

portfolioConts[0].classList.add("on");

// 탭메뉴 클릭 시 변경
for(let i = 0; i < portfolioMenu.length; i++){
    portfolioMenu[i].onclick = function(){
        tabCount = i;
        tabChange(i);
    }
}


window.addEventListener("scroll", function(){
    let windowPosition = window.scrollY;
})
// 탭 자동 실행
let autoTab = setInterval(function(){
    tabChange(tabCount);

    if(tabCount >= portfolioMenu.length - 1){
        tabCount = 0;
    }
    else {
        tabCount++;
    }
}, 3000);

// 탭 전체에 마우스 호버 시 자동실행 멈춤, 재실행
portfolioTab.onmouseenter = function(){
    clearInterval(autoTab);
}
portfolioTab.onmouseleave = function(){
    autoTab = setInterval(function(){
        tabChange(tabCount);
    
        if(tabCount >= portfolioMenu.length - 1){
            tabCount = 0;
        }
        else {
            tabCount++;
        }
    }, 3000);
}


// 탭 변경 리팩토링
function tabChange(index){
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
    }, 10);
}