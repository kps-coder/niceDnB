window.addEventListener("DOMContentLoaded", function() {

  /* [S] 레이어팝업 */
  const modalPopupBtn = document.querySelectorAll("[data-roll='modal-popup']");
  
  modalPopupBtn.forEach(function(obj){
    obj.addEventListener('click', function(){
      let openPopId = this.dataset.popid;
      let closePopBtn = document.querySelector('#'+ openPopId + " .modal-popup__close > button");
      modalPopupOpen(openPopId);
      closePopBtn.addEventListener('click', function(){
        modalPopupClose(openPopId);
        obj.focus();
      });
    });
  });
  /* [E] 레이어팝업 */

  //기기확인
 const deviceCheck = Mobile();

  if(Mobile() == true){
    document.body.classList.add("mobile");
  } else {
    document.body.classList.add("pc");
  }

  // GNB focus event
  let headerPC = document.querySelector(".header-pc");
  let gnbDepth01 = document.querySelectorAll(".gnb__depth01");
  let gnbLogo = document.querySelector(".header__logo");
  gnbDepth01.forEach(function(elem, idx){
    elem.addEventListener("mouseover", function(){
      headerPC.classList.add("gnb-show");
    });
    elem.addEventListener("mouseleave", function(){
      headerPC.classList.remove("gnb-show");
    });
    elem.addEventListener("focusin", function(){
      let btnLogin = document.querySelector(".btn-login");
      headerPC.classList.add("gnb-show");
      btnLogin.addEventListener("focusin", function(){
        headerPC.classList.remove("gnb-show");
      });
      gnbLogo.addEventListener("focusin", function(){
        headerPC.classList.remove("gnb-show");
      });
    });
  });

  document.addEventListener("click", function(){
    headerPC.classList.remove("gnb-show");
  });

  //사이트맵
 

  //bread crumb 하위 메뉴
  let btnMenuOpen = document.querySelectorAll(".btn-downMenu");
  btnMenuOpen.forEach(function(elem, idx){
    elem.addEventListener("click", function(){
      if(this.className == "btn-downMenu"){
        btnMenuOpen.forEach(function(elem){
          elem.classList.remove("open");
        });
        this.classList.add("open");
      } else {
        this.classList.remove("open");
      }      
    });
  });

  

  // pc sitemap
  if(document.querySelector(".header-pc .btn-sitemap") !== null){
    sitemapPC();
  }

  // mobile sitemap
  if(document.querySelector(".header-mobile .btn-sitemap") !== null){
    sitemapMobile();
  }

  // tab
  if(document.querySelector(".com-tab") !== null){
    tabCtrl();
  }  

  // accordion
  if(document.querySelector(".com-accordion") !== null){
    accordionUi();
  }

  // 상단 sticky
  if(document.querySelector(".container") !== null){
    contentHeadSticky();
  }

  //tooltip
  if(document.querySelector(".tooltip") !== null){
    tooltip();
  }

  if(document.querySelector(".quick-message") !== null){
    quickMessage();
  }
  
  
  
});


//모바일 확인
function Mobile() {return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);}

//레어어팝업 열기
function modalPopupOpen(popUpID) {
  let openPopup = document.getElementById(popUpID);
  let closePopBtn = openPopup.querySelector(".modal-popup__close > button");
  openPopup.classList.add("modal-popup--show");
  openPopup.setAttribute("tabindex", '0');
  openPopup.focus();
  document.body.style.overflow = 'hidden';

  closePopBtn.addEventListener('click', function(){
    modalPopupClose(popUpID);
  });
}

//레이어팝업 닫기
function modalPopupClose(popUpID) {
  let closePopup = document.getElementById(popUpID);
  closePopup.classList.remove("modal-popup--show");
  closePopup.removeAttribute("tabindex");
  document.body.removeAttribute('style');
}

//modalAlert open
function modalAlertOpen(alertID) {
  let openAlert = document.getElementById(alertID);
  openAlert.classList.add("modal-alert--show");
  openAlert.setAttribute("tabindex", '0');
  openAlert.focus();
  document.body.style.overflow = 'hidden';
}

//modalAlert close
function modalAlertClose(alertID) {
  let closeAlert = document.getElementById(alertID);
  closeAlert.classList.remove("modal-alert--show");
  closeAlert.removeAttribute("tabindex");
  document.body.removeAttribute('style');
}

//tab
function tabCtrl() {
  let tabUI = document.querySelector(".com-tab");
  let tabBtn = tabUI.querySelectorAll("button.com-tab__btn");
  let tabContainer = document.querySelector(".tab-container");
  let tabCont = tabContainer.querySelectorAll(".tab-content");
  tabBtn.forEach(function(el, idx){
    el.addEventListener("click", function(e){
      tabBtn.forEach(function(el){
        el.classList.remove("com-tab__btn--active");
        el.removeAttribute("title");
      });
      tabCont.forEach(function(el){
        el.classList.remove("show");
      });
      tabCont[idx].classList.add("show"); 
      tabCont[idx].setAttribute("tabindex","0");
      tabCont[idx].focus();     
      this.classList.add("com-tab__btn--active");
      this.setAttribute("title", "선택됨");
    });
  });
}

//pc sitemap
function sitemapPC() {
  let sitemapBtn = document.querySelector(".header-pc .btn-sitemap");
  let sitemapWrap = document.querySelector(".sitemap");
  let sitemapClose = document.querySelector(".btn-sitemap-close");
  sitemapBtn.addEventListener("click", function(){
    sitemapWrap.classList.add("show");
    sitemapWrap.setAttribute("tabindex", '0');
    sitemapWrap.focus();

  });
  sitemapClose.addEventListener("click", function(){
    sitemapWrap.classList.remove("show");
    sitemapWrap.removeAttribute("tabindex");
  });
}

//mobile sitemap
function sitemapMobile() {
  let sitemapBtn = document.querySelector(".header-mobile .btn-sitemap");
  let sitemapWrap = document.querySelector(".header-mobile .gnb");
  let sitemapClose = document.querySelector(".btn-gnb-close");
  sitemapBtn.addEventListener("click", function(){
    sitemapWrap.classList.add("show");
    sitemapWrap.setAttribute("tabindex", '0');
    sitemapWrap.focus();

  });
  sitemapClose.addEventListener("click", function(){
    sitemapWrap.classList.remove("show");
    sitemapWrap.removeAttribute("tabindex");
  });
}

// accordion
function accordionUi() {
  let accordionBtn = document.querySelectorAll(".com-accordion__btn");
  let accordionRow = document.querySelectorAll(".com-accordion__row");
  accordionBtn.forEach(function(el, idx){
    el.addEventListener("click", function(){  
      if(accordionRow[idx].classList.contains("open")){
        accordionRow[idx].classList.remove("open");
        el.querySelector(".blind").innerHTML = "내용보기";
      } else {
        accordionRow.forEach(function(el){
          el.classList.remove("open");
          el.querySelector(".com-accordion__btn .blind").innerHTML = "내용보기" ;
        });
        accordionRow[idx].classList.add("open");
        el.querySelector(".blind").innerHTML = "내용닫기";
      }        
    });
  });
}

// content head
function contentHeadSticky() {
  let contentHead = document.querySelector(".container");
  let subVisualHeight = document.querySelector(".sub-visual");
  document.addEventListener('scroll', function(){
    let currentScroll = document.documentElement.scrollTop;
    if(currentScroll > 400){
      contentHead.classList.add("container--sticky");
    } else {
      contentHead.classList.remove("container--sticky");
    }
  });
}

// 퀵메뉴 바이어메시지
function quickMessage() {
  let quickMessageWrap = document.querySelector('.quick-message'); 
  let quickMsgBtn = document.querySelector('.btn-quick-alarm'); 
  let quickMsgCloseBtn = document.querySelector(".quick-message__close");
  quickMsgBtn.addEventListener("click", function(){
    quickMessageWrap.style.display = "block";
    setTimeout(function(){
      quickMessageWrap.animate(
        {right:["-403px","0"]}, 
        {duration: 200, fill: "forwards"}
      );  
    }); 
  });
  quickMsgCloseBtn.addEventListener("click", function(){
    quickMessageWrap.animate(
      {right:["-403px"]}, 
      {duration: 200, fill: "forwards"}
    );  
    setTimeout(function(){
      quickMessageWrap.style.display = "none";
    }, 100); 
  });
}

function tooltip() {
  let tooltip = document.querySelectorAll(".tooltip");
  
  tooltip.forEach(function(elem, idx){
    let tooltipCont = elem.querySelector(".tooltip__cont");
    let tooltipBtn = elem.querySelector("button");
    console.log(tooltipBtn);
    tooltipBtn.addEventListener("click", function(){
      tooltipCont.classList.toggle("show");
    });
  });
}