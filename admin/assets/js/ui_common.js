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

  gnbCtrl();
});

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


function gnbCtrl(depth1, depth2) {
  let globalNavBtn1 = document.querySelectorAll(".btn-depth-1");
  let globalNavList = document.querySelectorAll(".global-nav__list > li");  
  
  let globalNavDepth2 = globalNavList[depth1].querySelectorAll(".global-nav__depth2 > li");   
  globalNavList[depth1].classList.add("open");
  globalNavDepth2[depth2].classList.add("on");

  globalNavBtn1.forEach(function(elem, i){
    elem.addEventListener("click", function(){
      globalNavList.forEach(function(elem, i){
        elem.classList.remove("open");
      });
      globalNavList[i].classList.add("open");
    });
  });
}

