// otherWork 데이터 세팅
let otherWorkData = [
    {
        category: "webDesign",
        data: [
            {title: "아쿠아디파르마", thumbImg:"homepage/aquadiparma_thumb.jpg", imgAll: ["homepage/aquadiparma.png"], link: "https://www.acquadiparma.kr/",  classific: ["제작방식", "소요기간", "반응형", "설명"],  context: ["워드프레스 기반", "총 3주", "PC / Tablet / Mobile", "해외 브랜드인 아쿠아디파르마의 한국 브랜드 홈페이지입니다. 전체적인 레이아웃과 컨셉은 기존 해외 사이트와 동일하게 제작하되, 디테일적인 요소들은 직접 수정하여 구성하였습니다."]},

            {title: "디퍼런트컴퍼니", thumbImg:"homepage/different_thumb.jpg", imgAll: ["homepage/different.png"], link: "http://differ-ent.co.kr/", classific: ["제작방식", "소요기간", "반응형", "설명"], context: ["워드프레스 기반", "총 3주", "PC / Tablet / Mobile", "심플하고 깔끔하며, 배우의 프로필이 강조되는 홈페이지를 추구하여 디테일한 요소들은 최소로 배제하였으며 디자인은 협의하에 진행하였습니다."]},
            
            {title: "힐링안과", thumbImg:"homepage/healing_thumb.jpg", imgAll: ["homepage/healing.png"], link: "http://healingeyeclinic.co.kr/", classific: ["제작방식", "소요기간", "반응형", "설명"], context: ["워드프레스 기반", "총 2주", "PC / Tablet / Mobile", "특정 이벤트와 관련된 DB 수집을 목적으로 제작되었습니다. 서브페이지는 기존 홈페이지와 동일하게 제작되었으나, 게시판을 추가하였고 메인 페이지 디자인을 변경하여 작업하였습니다."]},

            {title: "김기윤 법률사무소", thumbImg:"homepage/kimkiyoon_thumb.jpg", imgAll: ["homepage/kimkiyoon.png"], link: "http://lawnkim.co.kr/", classific: ["제작방식", "소요기간", "반응형", "설명"], context: ["워드프레스 기반", "총 4주", "PC / Tablet / Mobile", "각 업무 분야에 따라 게재되는 내용이 달라 업무 분야별로 홈페이지를 제작하였으며, 통합 페이지에서 각 홈페이지로 넘어갈 수 있도록 사이트맵을 구성하였습니다."]},

            {title: "웬즈빌", thumbImg:"homepage/wensbill_thumb.jpg", imgAll: ["homepage/wensbill.png"], link: "http://wensbill.cafe24.com/", classific: ["제작방식", "소요기간", "반응형", "설명"], context: ["워드프레스 기반", "총 2주", "PC / Tablet / Mobile", "해외 브랜드인 웬즈빌의 한국 브랜드 홈페이지를 제작하였습니다. 총 4개의 자체 브랜드를 갖고 있어 각 브랜드의 아이덴티티에 맞게 레이아웃을 다르게 구성하였습니다."]},

            {title: "앙코라 커피", thumbImg:"homepage/ancora_thumb.jpg", imgAll: ["homepage/ancora.png"], link: "http://ancoracoffee.co.kr/", classific: ["제작방식", "소요기간", "반응형", "설명"], context: ["워드프레스 기반", "총 3주", "PC / Tablet / Mobile", "앙코라 커피 브랜드 홈페이지 입니다. 제품 판매보다는 브랜드 아이덴티티를 알리기 위한 목적으로 제작되었습니다. 매거진 느낌의 컨셉으로 화면 레이아웃을 구성하였습니다."]},

            {title: "라이틸란 꾸꼬", thumbImg:"homepage/kukko_thumb.jpg", imgAll: ["homepage/kukko.png"], link: "http://kukkobeer.co.kr/", classific: ["제작방식", "소요기간", "반응형", "설명"], context: ["워드프레스 기반", "총 2주", "PC / Tablet / Mobile", "라이틸란 꾸꼬는 국내 첫 런칭된 브랜드로 브랜드의 인지도를 높이기 위한 브랜드 홈페이지로 제작되었습니다. 제품의 컬러감이 돋보일 수 있도록 전체적인 레이아웃은 심플하게 구성하였습니다."]},

            {title: "아뮤즈엔터테인먼트", thumbImg:"homepage/amuse_thumb.jpg", imgAll: ["homepage/amuse.png"], link: "http://amusekorea.co.kr/", classific: ["제작방식", "소요기간", "반응형", "설명"], context: ["워드프레스 기반", "총 2주", "PC / Tablet / Mobile", "아티스트 소개와 오디션 지원 DB 수집을 목적으로 제작되었습니다. 전체적인 컬러감은 브랜드 로고의 심볼 컬러를 사용하였습니다."]},
            
            {title: "마누카 골드", thumbImg:"homepage/manuka_thumb.jpg", imgAll: ["homepage/manuka.png"], link: "http://manukagold.kr/", classific: ["제작방식", "소요기간", "반응형"], context: ["카페24 기반", "총 3주", "PC / Tablet / Mobile"]},

            {title: "네츄럴 반다", thumbImg:"homepage/bandha_thumb.jpg", imgAll: ["homepage/bandha.png"], link: "https://bandha.co.kr/", classific: ["제작방식", "소요기간", "반응형", "설명"], context: ["카페24 기반", "총 3주", "PC / Tablet / Mobile", "카페24를 기반으로 제작하였으며, 실제 판매까지 이뤄지는 홈페이지입니다. 기존의 템플릿에서 일부 레이아웃을 브랜드 컨셉에 맞추어 변경하여 작업하였습니다."]},

            {title: "나인밧", thumbImg:"homepage/ninebat_thumb.jpg", imgAll: ["homepage/ninebat.png"], link: "https://ninebat.com/", classific: ["제작방식", "소요기간", "반응형", "설명"], context: ["카페24 기반", "총 3주", "PC / Tablet / Mobile", "디자이너 의류 브랜드인 나인밧은 심플함과 깔끔함을 추구하여 블랙앤 화이트를 메인컬러로 제작하였습니다. 제품 이미지 촬영, 보정, 상세페이지 등 홈페이지 구성요소까지 직접 제작하였습니다."]},

            {title: "화수커피작업실", thumbImg:"homepage/hawsoo_thumb.jpg", imgAll: ["homepage/hawsoo.png"], link: "http://hwasoocoffee.com/", classific: ["제작방식", "소요기간", "반응형", "설명"], context: ["카페24 기반", "총 1주", "PC / Tablet / Mobile", "독특한 로고를 지닌 브랜드로 해당 로고가 돋보일 수 있도록 레이아웃을 구성하였으며, SNS 판매 및 스마트스토어 연동이 될 수 있도록 작업하였습니다."]},

            {title: "바른공사 랜닥", thumbImg:"homepage/barn_thumb.jpg", imgAll: ["homepage/barn.png"], link: "http://landoc.co.kr/", classific: ["제작방식", "소요기간", "반응형", "설명"], context: ["CGI 솔루션 기반", "총 3주", "PC / Tablet / Mobile", "역경매 솔루션을 이용하여 제작되었습니다. 소비자가 제작의뢰를 하면 업체가 견적서를 보낼 수 있도록 구성되어있습니다."]},

            {title: "평택시 청소년 진로지원센터", thumbImg:"homepage/teenager/teenager_1_thumb.jpg", 
            imgAll: [
                "homepage/teenager/teenager_1.jpg", 
                "homepage/teenager/teenager_2.jpg", 
                "homepage/teenager/teenager_3.jpg", 
                "homepage/teenager/teenager_4.jpg", 
                "homepage/teenager/teenager_5.jpg", 
                "homepage/teenager/teenager_6.jpg", 
                "homepage/teenager/teenager_7.jpg", 
                "homepage/teenager/teenager_8.jpg",
                "homepage/teenager/teenager_9.jpg",
                "homepage/teenager/teenager_10.jpg",
                "homepage/teenager/teenager_11.jpg",
                "homepage/teenager/teenager_12.jpg",
                "homepage/teenager/teenager_13.jpg",
                "homepage/teenager/teenager_14.jpg",
                "homepage/teenager/teenager_15.jpg",
                "homepage/teenager/teenager_16.jpg",
                "homepage/teenager/teenager_17.jpg",
            ], 
            classific: ["제작방식", "소요기간", "컨셉설명"], context: ["디자인 시안 제작", "총 1주", "선생님 또는 관련 기관들이 주 이용자로써 깔끔하게 정리된 디자인으로 쉽고 빠르게 원하는 목적 페이지에 도달할 수 있도록 하는 것을 최우선으로 작업하였습니다."]},
            
            {title: "안닥 어플리케이션", thumbImg:"homepage/andoc/andoc1_thumb.jpg", 
            imgAll: [
                "homepage/andoc/andoc1.jpg", 
                "homepage/andoc/andoc2.png", 
                "homepage/andoc/andoc3.png", 
                "homepage/andoc/andoc4.png", 
                "homepage/andoc/andoc5.png", 
                "homepage/andoc/andoc6.png", 
                "homepage/andoc/andoc7.png", 
                "homepage/andoc/andoc8.png",
                "homepage/andoc/andoc9.png",
            ], 
            classific: ["제작방식", "소요기간", "컨셉설명"], context: ["디자인 시안 제작", "총 2주", "어플리케이션 기능 소개를 우선으로 디자인하였으며, 각 섹션별로 세부 설명 페이지로 넘어갈 수 있도록 화면을 구성하였습니다."]},
            
            {title: "곤충산업중앙회", thumbImg:"homepage/bug_thumb.jpg", 
            imgAll: ["homepage/bug.jpg"], 
            classific: ["제작방식", "소요기간", "컨셉설명"], context: ["디자인 시안 제작", "총 1주", "곤충이라는 키워드가 갖고 있는 불편한 이미지를 완화하기 위하여 부드러운 컬러감과 캐리커쳐 등을 활용하여 친숙한 이미지를 주는 것을 목표로 디자인 하였습니다."]},
        ]
    },
    {
        category: "graphicDesign",
        data : [
            {title: "꾸꼬&amp;핀크리스프 콜라보", thumbImg: "detailPage/finn_kukko_thumb.jpg", imgAll: ["detailPage/finn_kukko.jpg"], classific: ["분류", "설명"],  context: ["상세페이지", "핀란드 브랜드인 핀크리스프와 라이틸란 꾸꼬의 콜라보 이벤트 페이지입니다. 핀크리스프의 브랜드 컬러를 메인으로 강렬하면서도 친근한 느낌으로 제작하였습니다."]},

            {title: "네츄럴 반다 제품", thumbImg: "detailPage/bandha_thumb.jpg", imgAll: ["detailPage/bandha.png"], classific: ["분류", "설명"],  context: ["상세페이지", "소비자에게 브랜드의 특허기술을 통한 기능성 제품 인지효과를 목적으로 제작되었습니다. 아이콘을 사용하여 기능성 화장품임을 한눈에 알아볼 수 있도록 하였으며, 비포&애프터 이미지와 특허기능 증빙자료를 함께 노출함으로써 신뢰감을 높였습니다."]},
            
            {title: "힐링안과 &amp; SK텔레콤<br>제휴 이벤트", thumbImg: "detailPage/healing_thumb.jpg", imgAll: ["detailPage/healing.png"],classific: ["분류", "설명"],  context: ["상세페이지", "쿠폰 모양의 프레임을 활용한 레이아웃으로 이벤트의 취지인 SK텔레콤 직원들만의 혜택임을 강조하여 흥미를 유발하였고, 어려운 의학적 설명들은 이미지 등을 활용하여 쉽게 이해할 수 있도록 하였습니다."]},

            {title: "라이틸란 꾸꼬 제품", thumbImg: "detailPage/kukko_thumb.jpg", imgAll: ["detailPage/kukko.jpg"], classific: ["분류", "설명"],  context: ["상세페이지", "국내에는 아직 생소한 브랜드인 라이틸란 꾸꼬 맥주의 브랜드 설명을 중심으로 제작하였습니다. 레이아웃은 통일감 있게 배치하되, 맥주의 맛에 따라 제품의 색상이 다른 점을 활용하여 컬러로 포인트를 주었습니다."]},

            {title: "드랍오프 제품", thumbImg: "detailPage/dropOff_thumb.jpg", imgAll: ["detailPage/dropOff.png"], classific: ["분류", "설명"],  context: ["상세페이지", "드랍오프는 리사이클링, 친환경 소재를 사용하여 제품을 제작하는 의류 브랜드로써 깔끔하고 젊은 소비자들을 타겟으로 제작되었습니다. 브랜드가 추구하는 가치를 소비자들이 쉽게 공감할 수 있도록 리사이클되는 과정들을 아이콘을 활용하여 디자인하였습니다."]},
            
            {title: "나인밧 제품", thumbImg: "detailPage/ninebat_thumb.jpg", imgAll: ["detailPage/ninebat.jpg"], classific: ["분류", "설명"],  context: ["상세페이지", "나인밧은 심플함을 추구하는 디자이너 의류 브랜드이기에 제품 이미지를 중점적으로 사용하였으며, 제품의 특징을 키워드로 뽑아 하단쪽에 배치하여 제품에 대한 정보를 전달하였습니다."]},

            {title: "앙코라커피 제품", thumbImg: "detailPage/ancora_thumb.jpg", imgAll: ["detailPage/ancora.jpg"], classific: ["분류", "설명"],  context: ["상세페이지", "앙코라 커피는 '시간대별로 마시고 싶은 커피'라는 슬로건을 갖고 있는 브랜드입니다. 각 제품마다 새벽, 아침, 점심, 저녁 등에 어울리는 컬러로 메인 색상을 지정하였으며, 감성적인 문구와 폰트 사용으로 브랜드의 이미지와 통일감을 맞췄습니다."]},

            {title: "더블원스튜디오 제품", thumbImg: "detailPage/doubleOne_thumb.jpg", imgAll: ["detailPage/doubleOne.jpg"], classific: ["분류", "설명"],  context: ["상세페이지", "더블원스튜디오는 심플하고 페미닌한 컨셉의 여성 의류 브랜드로 군더더기 없이 깔끔한 느낌을 추구하였습니다."]},

            {title: "BEIFFE", thumbImg: "logo/beiffe1_thumb.jpg", imgAll: ["logo/beiffe1.jpg"], classific: ["분류", "설명"],  context: ["로고 디자인", "BEIFFE LOGO DESIGN"]},

            {title: "유튜브 채널", thumbImg: "logo/youtube_logo_thumb.jpg", imgAll: ["logo/youtube_logo.jpg"], classific: ["분류", "설명"],  context: ["로고 디자인", "유튜브의 재생목록 카테고리에 맞는 로고를 제작하였습니다. 하나의 유튜브 채널에서 사용되기에 전체적인 통일감은 유지하고, 카테고리를 한눈에 파악할 수 있도록 디자인하였습니다."]},

            {title: "클리닝 에어 시스템", thumbImg: "logo/cleaning_thumb.jpg", imgAll: ["logo/cleaning.jpg"], classific: ["분류", "설명"],  context: ["로고 디자인", "청소 업체의 로고 디자인으로 버블을 이미지화 하여 깨끗한 느낌의 로고를 제작하였습니다."]},

            {title: "주한상", thumbImg: "logo/juhansang_thumb.jpg", imgAll: ["logo/juhansang.jpg"], classific: ["분류", "설명"],  context: ["로고 디자인", "한식 음식점인 주한상의 브랜드 로고를 디자인하였습니다."]},

            {title: "마켓 235", thumbImg: "logo/market_logo_thumb.jpg", imgAll: ["logo/market_logo.jpg"], classific: ["분류", "설명"],  context: ["로고 디자인", "식재료 전문 판매 사이트인 마켓 235의 브랜드 로고를 디자인하였습니다."]},

            {title: "주한상", thumbImg: "logo/juhansang_thumb.jpg", imgAll: ["logo/juhansang.jpg"], classific: ["분류", "설명"],  context: ["로고 디자인", "한식 음식점인 주한상의 브랜드 로고를 디자인하였습니다."]},

            {title: "수라 곳간", thumbImg: "logo/sura_thumb.jpg", imgAll: ["logo/sura"], classific: ["분류", "설명"],  context: ["로고 디자인", "한식 음식점인 수라 곳간의 브랜드 로고를 디자인하였습니다."]},
        ]
    },
    {
        category: "proposal",
        data : [
            {title: "닥터디퍼런트 제안서", thumbImg: "proposal/drdifferent.jpg", imgAll: ["proposal/drdifferent_proposal.jpg"], classific: ["분류", "설명"],  context: ["마케팅 제안서", "브랜드 온라인 광고 마케팅 제안서로써 회사 소개 및 전략, 예산안 등의 내용을 담고 있습니다."]},

            {title: "추계예술대학교<br>엔터테인먼트 운영 계획서", thumbImg: "proposal/university_thumb.jpg", imgAll: ["proposal/university.jpg"], classific: ["분류", "설명"],  context: ["운영 소개서", "추계예술대학교 엔터테인먼트 프로젝트 운영 계획서 입니다. 프로젝트 운영 개요와 세부내용, 예산안 등을 담고 있습니다."]},

            {title: "ANDOC 어플리케이션", thumbImg: "proposal/andoc_thumb.jpg", imgAll: ["proposal/andoc.jpg"], classific: ["분류", "설명"],  context: ["어플리케이션 소개서", "ANDOC 어플리케이션은 자체적으로 제작한 신규 눈건강관리 어플리케이션으로 어플리케이션에 대한 소개와 베타서비스 반응, 차별화 전략 등을 담고 있습니다."]},
        ]
    }
];

// 탭과 관련된 태그선택
const otherWork = document.querySelector(".cont4.otherWork");
const otherTabMenu = document.querySelectorAll(".cont4.otherWork .otherWorkWrap .tabMenu li");
const otherTabConts = document.querySelector(".cont4.otherWork .otherWorkWrap .tabConts");

// 모달창 제어
const otherModal = document.querySelector(".cont4.otherWork .modal");
const otherModalWrap = document.querySelector(".otherWork .otherWork.modal .center");
const otherModalClose = document.querySelector(".cont4.otherWork .modal .closeIcon");
const modalImgArrowWrap = document.querySelector(".otherWork .otherWork.modal .center .arrowWrap");
const modalImgPrev = document.querySelector(".otherWork .otherWork.modal .center .arrowWrap a.prev");
const modalImgNext = document.querySelector(".otherWork .otherWork.modal .center .arrowWrap a.next");
let modalImgCount = 0;

// 모달창 컨텐츠 태그선택
const otherModalImgWrap = document.querySelector(".cont4.otherWork .modal .left");
const otherModalTitle = document.querySelector(".cont4.otherWork .modal .right .modalTitle");
const otherModalLink = document.querySelector(".cont4.otherWork .modal .right .linkBtn .btn");
const otherModalContent = document.querySelector(".cont4.otherWork .modal .right .contentWrap");


// 데이털글 찾기 위한 변수 세팅
let findText;

// 탭리스트와 콘텐츠 생성 및 태그 삽입
for(let i = 0; i < otherWorkData.length; i++){
    // tabList 생성 후 tabConts에 삽입
    let tabList = document.createElement("div");
    tabList.setAttribute("class", `tabList ${otherWorkData[i].category}`);
    otherTabConts.append(tabList);

    for(let a = 0; a < otherWorkData[i].data.length; a++){
        // contWrap 생성 후 tabList에 삽입
        let contWrap = document.createElement("div");
        contWrap.setAttribute("class", "contWrap");
        tabList.append(contWrap);
    
        // contImg 생성 후 contWrap 삽입
        let contImg = document.createElement("img");
        contWrap.append(contImg);
        contImg.src = `img/other/${otherWorkData[i].data[a].thumbImg}`; 

        // conText 생성 후 contWrap 삽입
        let conText = document.createElement("div");
        conText.setAttribute("class", "conText");
        contWrap.append(conText);

        // linkBtn 생성 후 conText 삽입
        let linkBtn = document.createElement("a");
        linkBtn.setAttribute("class", "linkBtn");
        linkBtn.setAttribute("href", "#");
        conText.append(linkBtn);

        // contTextTitle 생성 후 linkBtn 삽입
        let contTextTitle = document.createElement("h3");
        linkBtn.append(contTextTitle);
        contTextTitle.innerHTML = otherWorkData[i].data[a].title;

        // plusIcon 생성 후 linkBtn 삽입
        let plusIcon = document.createElement("span");
        plusIcon.setAttribute("class", "material-symbols-outlined plusIcon");
        linkBtn.append(plusIcon);
        plusIcon.innerText = "add";
    }
}       




// 생성된 리스트 태그 선택
const otherTabList = document.querySelectorAll(".cont4.otherWork .otherWorkWrap .tabConts .tabList");

// 처음 화면에서 0번째 순번이 미리 선택
otherTabList[0].classList.add("on");
otherTabMenu[0].classList.add("on");

// 썸네일 이미지의 높이값이 작은 경우 이미지의 css 변경
if(otherTabList[0].classList.contains("on")){
    otherTabList[0].querySelectorAll("img").forEach(function(onListImg){
        if(onListImg.offsetHeight < onListImg.parentElement.offsetHeight){
            onListImg.style.transition = "all 0s";
            onListImg.style.width = "auto";
            onListImg.style.height = "100%";
            onListImg.style.position = "absolute";
            onListImg.style.top = "50%";
            onListImg.style.left = "50%";
            onListImg.style.transform = "translate(-50%, -50%)";
        }
        else {
            onListImg.style.transition = "all 0.5s";
            onListImg.style.width = "100%";
            onListImg.style.height = "auto";
            onListImg.style.position = "relative";
            onListImg.style.top = "0";
            onListImg.style.left = "0";
            onListImg.style.transform = "translate(0, 0)";
        }
    })
}


let tabContsHeight;

window.addEventListener("load", function(){
    // 처음 화면에서 랩리스트의 부모높이를 지정함
    tabContsHeight = otherTabConts.querySelector(".on").offsetHeight;
    if(mobile.matches){
        otherWork.style.height = tabContsHeight + 500 + "px";
    }
    else {
        otherWork.style.height = tabContsHeight + 750 + "px";
    }
});
window.addEventListener("resize", function(){
    // 처음 화면에서 랩리스트의 부모높이를 지정함
    tabContsHeight = otherTabConts.querySelector(".on").offsetHeight;
    if(mobile.matches){
        otherWork.style.height = tabContsHeight + 500 + "px";
    }
    else {
        otherWork.style.height = tabContsHeight + 750 + "px";
    }
});

// 탭메뉴 클릭 시 콘텐츠 및 메뉴 클래스 제어
for(let i = 0; i < otherTabMenu.length; i++){
    otherTabMenu[i].onclick = function(){
        otherTabMenu.forEach(function(menu, idx){
            menu.classList.remove("on");
            otherTabList[idx].classList.remove("on");
            otherTabList[idx].style.opacity = "0";
            otherTabList[idx].style.transform = "translateY(-50px)";
        });

        otherTabMenu[i].classList.add("on");
        otherTabList[i].classList.add("on");
        setTimeout(function(){
            otherTabList[i].style.opacity = "1";
            otherTabList[i].style.transform = "translateY(0)";
        }, 10);

        // 썸네일 이미지의 높이값이 작은 경우 이미지의 css 변경
        if(otherTabList[i].classList.contains("on")){
            otherTabList[i].querySelectorAll("img").forEach(function(onListImg){
                if(onListImg.offsetHeight < onListImg.parentElement.offsetHeight){
                    onListImg.style.transition = "all 0s";
                    onListImg.style.width = "auto";
                    onListImg.style.height = "100%";
                    onListImg.style.position = "absolute";
                    onListImg.style.top = "50%";
                    onListImg.style.left = "50%";
                    onListImg.style.transform = "translate(-50%, -50%)";
                }
                else {
                    onListImg.style.transition = "all 0.5s";
                    onListImg.style.width = "100%";
                    onListImg.style.height = "auto";
                    onListImg.style.position = "relative";
                    onListImg.style.top = "0";
                    onListImg.style.left = "0";
                    onListImg.style.transform = "translate(0, 0)";
                }
            })
        }

        // 선택한 리스트들의 높이값에 맞춰 부모창의 높이가 지정됨
        tabContsHeight = otherTabConts.querySelector(".on").offsetHeight;
        if(mobile.matches){
            otherWork.style.height = tabContsHeight + 500 + "px";
        }
        else {
            otherWork.style.height = tabContsHeight + 750 + "px";
        }
    }
}

// 탭 컨텐츠를 클릭하면 모달창 제어 및 모달창 콘텐츠 변경
for(let a = 0; a < otherTabList.length; a++){
    for(let i = 0; i < otherTabList[a].querySelectorAll(".contWrap").length; i++){
        otherTabList[a].querySelectorAll(".contWrap")[i].onclick = function(e){
            e.preventDefault();

            document.querySelector("body").style.overflow = "hidden";
            
            // 다른 컨텐츠를 클릭했을 때 기존 모달창 내용 초기화
            otherModalTitle.innerText = "";
            otherModalContent.innerText = "";
            modalImgPrev.style.display = "none";
            modalImgNext.style.display = "none";
            modalImgCount = 0;

            // 컨텐츠 클릭 시 모달창 열림
            otherModal.classList.add("on");
            setTimeout(function(){
                otherModal.style.opacity = "1";
            }, 100);

            // 모달창 열렸을 때 스크롤이 항상 최상단에 위치하게끔 변경
            otherModalWrap.scrollTop = 0;

            // 컨텐츠의 타이틀의 문구를 findText 변수에 담음
            findText =  otherTabList[a].querySelectorAll(".contWrap")[i].querySelector("h3").innerHTML;

            // 모달창에 선택된 컨텐츠와 관련된 데이터를 삽입함
            for(let i = 0; i < otherWorkData[a].data.length; i++){
                // 클릭한 컨텐츠의 타이틀을 데이터에서 찾은 후 타이틀이 있는 순번째의 데이터들만 삽입함
                if(otherWorkData[a].data[i].title === findText){
                    otherModalImgWrap.innerHTML = "";

                    // 이미지 갯수에 따라 이미지 태그 생성 및 경로 삽입
                    for(let h = 0; h < otherWorkData[a].data[i].imgAll.length; h++){
                        let otherModalImg = document.createElement("img");
                        otherModalImg.setAttribute("class", "modalImg");
                        otherModalImgWrap.append(otherModalImg);

                        otherModalImg.src = `img/other/${otherWorkData[a].data[i].imgAll[h]}`;
                    }

                    if(otherWorkData[a].data[i].imgAll.length > 1){
                        modalImgPrev.style.display = "flex";
                        modalImgNext.style.display = "flex";
                    }
                    
                    const modalImgs = otherModalImgWrap.querySelectorAll(".cont4.otherWork .modal .left img");
                    
                    modalImgs[0].classList.add("on");


                    // 모달창의 큰 이미지의 갯수가 1개일 때, 큰 이미지 영역보다 이미지의 높이값이 작다면 style 변경
                    if(modalImgs.length === 1){
                        modalImgs[0].onload = function(){
                            if(modalImgs[0].offsetHeight < modalImgs[0].parentElement.offsetHeight){
                                modalImgs[0].style.transition = "all 0s";
                                modalImgs[0].style.width = "auto";
                                modalImgs[0].style.height = "100%";
                                modalImgs[0].style.position = "absolute";
                                modalImgs[0].style.top = "50%";
                                modalImgs[0].style.left = "50%";
                                modalImgs[0].style.transform = "translate(-50%, -50%)";
                            }
                            else {
                                modalImgs[0].style.transition = "all 0.5s";
                                modalImgs[0].style.width = "100%";
                                modalImgs[0].style.height = "auto";
                                modalImgs[0].style.position = "relative";
                                modalImgs[0].style.top = "0";
                                modalImgs[0].style.left = "0";
                                modalImgs[0].style.transform = "translate(0, 0)";
                            }
                        }
                    }


                    // 오른쪽 버튼 눌렀을 때 이미지 넘어감
                    modalImgNext.onclick = function(e){
                        e.preventDefault();
                        
                        if(!mobile.matches){
                            otherModalImgWrap.scrollTop = 0;
                        }
                    
                        otherModalImgWrap.querySelectorAll(".modalImg").forEach(function(img){
                            img.classList.remove("on");
                        });
                    

                        if(modalImgCount === otherModalImgWrap.querySelectorAll(".modalImg").length - 1){
                            modalImgCount = 0;
                        }
                        else {
                            modalImgCount++;
                        }
                        otherModalImgWrap.querySelectorAll(".modalImg")[modalImgCount].classList.add("on");
                        
                    }
                    // 키보드 방향키 오른쪽 눌렀을 때 이미지 넘어감
                    document.addEventListener("keydown", function(e){
                        if(e.code === "ArrowRight"){
                            modalImgPrev.classList.remove("on");
                            modalImgNext.classList.add("on");
                            setTimeout(function(){
                                modalImgNext.classList.remove("on");
                            }, 1000);
                        
                            if(!mobile.matches){
                                otherModalImgWrap.scrollTop = 0;
                            }

                            otherModalImgWrap.querySelectorAll(".modalImg").forEach(function(img){
                                img.classList.remove("on");
                            });
                        
    
                            if(modalImgCount === otherModalImgWrap.querySelectorAll(".modalImg").length - 1){
                                modalImgCount = 0;
                            }
                            else {
                                modalImgCount++;
                            }
                        
                            otherModalImgWrap.querySelectorAll(".modalImg")[modalImgCount].classList.add("on");                            
                        }
                    });

                    // 왼쪽 버튼 눌렀을 때 이미지 넘어감
                    modalImgPrev.onclick = function(e){
                        e.preventDefault();
                        
                        if(!mobile.matches){
                            otherModalImgWrap.scrollTop = 0;
                        }
                        
                        if(modalImgCount === 0){
                            modalImgCount = otherModalImgWrap.querySelectorAll(".modalImg").length - 1;
                        }
                        else {
                            modalImgCount--;
                        }
                    
                        otherModalImgWrap.querySelectorAll(".modalImg").forEach(function(img){
                            img.classList.remove("on");
                        });
                    
                        otherModalImgWrap.querySelectorAll(".modalImg")[modalImgCount].classList.add("on");
                    }
                    // 키보드방향키 왼쪽 눌렀을 때 이미지 변경됨
                    document.addEventListener("keydown", function(e){
                        if(e.code === "ArrowLeft"){
                            modalImgNext.classList.remove("on");
                            modalImgPrev.classList.add("on");
                            setTimeout(function(){
                                modalImgPrev.classList.remove("on");
                            }, 1000);
                        
                            if(!mobile.matches){
                                otherModalImgWrap.scrollTop = 0;
                            }

                            otherModalImgWrap.querySelectorAll(".modalImg").forEach(function(img){
                                img.classList.remove("on");
                            });
                        
    
                            if(modalImgCount === 0){
                                modalImgCount = otherModalImgWrap.querySelectorAll(".modalImg").length - 1;
                            }
                            else {
                                modalImgCount--;
                            }
                        
                            otherModalImgWrap.querySelectorAll(".modalImg").forEach(function(img){
                                img.classList.remove("on");
                            });
                        
                            otherModalImgWrap.querySelectorAll(".modalImg")[modalImgCount].classList.add("on");
                        }
                    });

                    
                    // 타이틀 삽입
                    otherModalTitle.innerHTML = otherWorkData[a].data[i].title;

                    // 링크가 있는 경우만 버튼이 보이고, 링크가 삽입됨
                    if(otherWorkData[a].data[i].link){
                        otherModalLink.parentElement.style.display = "block";
                        otherModalLink.setAttribute("href", otherWorkData[a].data[i].link);
                    }
                    else {
                        otherModalLink.parentElement.style.display = "none";
                    }
                    
                    // 해당 컨텐츠의 설명과 관련된 태그들을 생성하고 내용을 삽입함
                    for(let h = 0; h < otherWorkData[a].data[i].classific.length; h++){
                        let contentWrap = document.createElement("div");
                        contentWrap.setAttribute("class", "content");

                        let contentTitle = document.createElement("p");
                        contentTitle.setAttribute("class", "contentTitle");

                        let contentText = document.createElement("p");
                        contentText.setAttribute("class", "detailText");

                        otherModalContent.append(contentWrap);
                        contentWrap.append(contentTitle);
                        contentWrap.append(contentText);

                        contentTitle.innerText = otherWorkData[a].data[i].classific[h];
                        contentText.innerText = otherWorkData[a].data[i].context[h];
                    }
                    
                    if(tablet.matches){
                        modalImgArrowWrap.style.position = "sticky";
                        modalImgArrowWrap.style.top = "calc(100% - 50px)";
                    }
                    else {
                        modalImgArrowWrap.style.top = "0";
                        modalImgArrowWrap.style.right = "calc(30% + 4px)";
                        modalImgArrowWrap.style.position = "absolute";
                    }
                }
            }
        }
        
        // 모달창에서 클로즈 버튼을 클릭하면 모달창 닫힘
        otherModalClose.onclick = function(e){
            e.preventDefault();
            

            document.querySelector("body").style.overflow = "auto";

            otherModal.style.opacity = "0";
            setTimeout(function(){
                otherModal.classList.remove("on");
            }, 500);
        }
    }
}





// 모달창에서 컨텐츠 바깥을 누르면 모달창 닫힘
otherModal.onclick = function(e){

    if(e.target.classList.contains("modal")){
        otherModal.style.opacity = "0";

        setTimeout(function(){
            otherModal.classList.remove("on");
        }, 500);
    }

}