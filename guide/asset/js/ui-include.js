window.addEventListener('DOMContentLoaded', function() {
  skipNavInclud.outerHTML = `
    <div class="skip-nav">
      <a href="#gnbWrap">주요 메뉴 바로가기</a>
      <a href="#container">본문 바로가기</a>
    </div>

    <div class="quick-menu">
      <ul class="quick-menu__wrap">
        <li><a href="#quickMessage" class="btn-quick-alarm"><span class="blind">알람메세지</span><i class="icon-alarm"><span class="blind">새알람</span></i></a></li>
        <li><a href="#none" class="btn-quick-like"><span class="blind">관심바이어</span></a></li>
        <li><a href="BD3.10.html" class="btn-quick-danger"><span class="blind">사기바이어이메일</span></a></li>
        <li><a href="#time" class="btn-quick-time">12:27</a></li>
      </ul>
    </div>
  `;

   
  footerInclud.outerHTML = `
    <footer class="footer">
      <div class="footer__inner">
        <div class="fnb">
          <ul class="fnb__wrap">
            <li><a href="#n" class="fnb__link">개인정보처리방침</a></li>
            <li><a href="#n" class="fnb__link">이용약관</a></li>
            <li><a href="#n" class="fnb__link">신용정보활용체제공시</a></li>
            <li><a href="#n" class="fnb__link">이메일무단수집거부</a></li>
          </ul>
        </div>

        <div class="footer__row">
          <div class="footer__logo"><img src="../assets/images/footer-logo.png" alt="NICE dun & bradstreet"></div>

          <div class="footer__familySite">
            <select id="familySite" name="familySite">
              <option>Family site</option>
              <option>family 1</option>
              <option>family 2</option>
            </select>
          </div>
        </div>  

        <address class="site-address">
          서울특별시 마포구 마포대로 217 크레디트센터 16층 ㈜나이스디앤비<br>
          통신판매업신고: 제2012-서울마포-0168호 
          사업자등록번호: 107-86-24874 
          TEL: 02-2122-2500 FAX: 02-2122-2591
        </address>

        <p class="copyright">COPYRIGHT 2006 NICE D&B Co.,Ltd. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  `;



    /*Array.prototype.forEach.call(allElements, function(el) {
        var includePath = "header.html";
        if (includePath) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    el.outerHTML = this.responseText;
                }
            };
            xhttp.open('GET', includePath, true);
            xhttp.send();
        }
    }); */

});


