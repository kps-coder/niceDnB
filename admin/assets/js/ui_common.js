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