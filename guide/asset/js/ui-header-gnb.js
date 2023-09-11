window.addEventListener('DOMContentLoaded', function() {
   headerInclud.outerHTML = `
   <header class="header-pc">
    <div class="header__inner">
      <h1 class="header__logo"><a href="Main.html"><img src="../assets/images/logo.png" alt="NTS 수출지원서비스"></a></h1>
      <nav class="gnb" id="gnbWrap">
        <ul class="gnb__wrap">
          <li class="gnb__depth01">
            <a href="BM0.10.html" class="gnb__a01">빅바이어 마케팅</a>
            <ul class="gnb__depth02">
              <li><a href="BM1.10.html" class="gnb__a02">빅데이터 바이어 발굴</a></li>
              <li><a href="BM2.10.html" class="gnb__a02">마케팅 발송</a></li>
              <li><a href="BM3.10.html" class="gnb__a02">마케팅 발송내역</a></li>
            </ul>
          </li>
          <li class="gnb__depth01">
            <a href="BD1.10.html" class="gnb__a01">바이어 정보</a>
            <ul class="gnb__depth02">
              <li><a href="BD1.10.html" class="gnb__a02">바이어 조회</a></li>
              <!-- <li><a href="#n" class="gnb__a02">관심 바이어</a></li> -->
              <li><a href="BD3.10.html" class="gnb__a02">사기바이어 이메일</a></li>
            </ul>
          </li>
          <li class="gnb__depth01">
            <a href="CR1.10.html" class="gnb__a01">해외기업 보고서</a>
            <ul class="gnb__depth02">
              <li><a href="CR1.10.html" class="gnb__a02">보고서 신청</a></li>
              <li><a href="CR2.10.html" class="gnb__a02">보고서 신청내역</a></li>
            </ul>
          </li>
          <li class="gnb__depth01">
            <a href="EC1.10.html" class="gnb__a01">수출바우처 컨설팅</a>
            <ul class="gnb__depth02">
              <li><a href="EC1.10.html" class="gnb__a02">컨설팅 신청</a></li>
              <li><a href="EC2.10.html" class="gnb__a02">신청내역</a></li>
            </ul>
          </li>
        </ul>
      </nav>

      <div class="util-menu">
        <div class="util-menu__wrap">
          <a href="MY0.10.html" class="btn-login"><span class="blind">마이페이지</span></a>
          <a href="CS1.10.html" class="btn-support"><span class="blind">고객센터</span></a>
          <a href="CM1.10.html" class="btn-search"><span class="blind">통합검색</span></a>
          <button class="btn-sitemap"><span class="blind">전체메뉴</span></button>
        </div>
      </div>
    </div>      
  </header><!-- //pc header -->

  <!-- mobile header --><!-- 20230911 수정 : 디자인 적용으로 마크업 변경 -->
  <header class="header-mobile">
    <div class="header__inner">
      <h1 class="header-mobile__logo"><a href="Main.html"><img src="../assets/images/logo.png" alt="NTS 수출지원서비스"></a></h1>
      <div class="header-mobile__util">
        <a href="CM1.10.html" class="btn-search"><span class="blind">통합검색</span></a>
        <button class="btn-sitemap"><span class="blind">전체메뉴</span></button>
      </div>
    </div>      
    <nav class="gnb">
      <ul class="gnb__wrap">
        <li class="gnb__depth01"><a href="#n" class="gnb__a01">빅바이어 마케팅</a></li>
        <li class="gnb__depth01"><a href="#n" class="gnb__a01">바이어 정보</a></li>
        <li class="gnb__depth01"><a href="#n" class="gnb__a01">해외기업 보고서</a></li>
        <li class="gnb__depth01"><a href="#n" class="gnb__a01">수출바우처 컨설팅</a></li>
        <li class="gnb__depth01"><a href="#n" class="gnb__a01">고객센터</a></li>
        <li class="gnb__depth01"><a href="#n" class="gnb__a01">마이페이지</a></li>
      </ul>
      <button type="button" class="btn-gnb-close"><span class="blind">닫기</span></button>
    </nav>
  </header><!-- //mobile header -->

    <!-- sitemap -->
    <div class="sitemap">
      <div class="sitemap__inner">
        <h1 class="header__logo"><a href="/"><img src="../assets/images/logo.png" alt="NTS 수출지원서비스"></a></h1>
        <div class="sitemap__gnb">
          <ul class="sitemap__list">
            <li>
              <a href="#n" class="sitemap__depth01">빅바이어 마케팅</a>
              <ul>
                <li><a href="#n" class="sitemap__depth02">빅데이터바이어발굴</a></li>
                <li><a href="#n" class="sitemap__depth02">마케팅발송</a></li>
                <li><a href="#n" class="sitemap__depth02">마케팅발송내역</a></li>
              </ul>
            </li>
            <li>
              <a href="#n" class="sitemap__depth01">바이어 정보</a>
              <ul>
                <li><a href="#n" class="sitemap__depth02">바이어조회</a></li>
                <li><a href="#n" class="sitemap__depth02">마케팅발송</a></li>
                <li><a href="#n" class="sitemap__depth02">관심바이어</a></li>
              </ul>
            </li>
            <li>
              <a href="#n" class="sitemap__depth01">해외기업 보고서</a>
              <ul>
                <li><a href="#n" class="sitemap__depth02">보고서신청</a></li>
                <li><a href="#n" class="sitemap__depth02">보고서신청내역</a></li>
              </ul>
            </li>
            <li>
              <a href="#n" class="sitemap__depth01">수출바우처 컨설팅</a>
              <ul>
                <li><a href="#n" class="sitemap__depth02">서비스신청</a></li>
                <li><a href="#n" class="sitemap__depth02">신청내역</a></li>
              </ul>
            </li>
          </ul>
          <ul class="sitemap__list">
            <li>
              <a href="#n" class="sitemap__depth01">마이페이지</a>
              <ul>
                <li><a href="#n" class="sitemap__depth02">정보 수정</a></li>
                <li><a href="#n" class="sitemap__depth02">비밀번호변경</a></li>
                <li><a href="#n" class="sitemap__depth02">캐쉬 충전</a></li>
                <li><a href="#n" class="sitemap__depth02">관심 기업</a></li>
                <li><a href="#n" class="sitemap__depth02">문의 내역</a></li>
              </ul>
            </li>
            <li>
              <a href="#n" class="sitemap__depth01">고객지원</a>
              <ul>
                <li><a href="#n" class="sitemap__depth02">문의하기</a></li>
                <li><a href="#n" class="sitemap__depth02">정보마당</a></li>
              </ul>
            </li>
          </ul>
        </div>
        
        <div class="util-menu">
          <div class="util-menu__wrap">
            <a href="#n" class="btn-login"><span class="blind">로그인</span></a>
            <a href="#n" class="btn-support"><span class="blind">고객센터</span></a>
            <button type="button" class="btn-search"><span class="blind">통합검색</span></button>
            <button type="button" class="btn-sitemap-close"><span class="blind">닫기</span></button>
          </div>
        </div>
      </div>
      
    </div>
    <!-- //sitemap -->`;


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


