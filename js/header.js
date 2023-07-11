const logoBtn = document.querySelector("#header .center .logo .logoBtn");

logoBtn.onclick = function(e){
    e.preventDefault();

    window.scrollTo({
        top: section[0].offsetTop,
        behavior: "smooth"
    });
}

for(let i = 0; i < headerMenu.length; i++){
    headerMenu[i].onclick = function(e){
        e.preventDefault();
        oneCheck = true;

        window.scrollTo({
            top: section[i].offsetTop,
            behavior: "smooth"
        });

        headerMenu.forEach(function(headerMenu){
            headerMenu.classList.remove("on");
        });
        headerMenu[i].classList.add("on");
    }   
}