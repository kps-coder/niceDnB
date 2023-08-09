window.addEventListener('DOMContentLoaded', function() {
   headerInclud.outerHTML = `
   <!-- 로그인, 회원가입, 처리방침, 약관 등의 화면 PC용 -->
   <header class="header-pc header--gnbNone">
     <div class="header__inner">
       <h1 class="header__logo"><a href="/"><img src="../assets/images/logo.png" alt="NTS 수출지원서비스"></a></h1>
       <p class="header__msg">수출지원서비스플랫폼에 오신 것을 환영합니다.</p>
       <div class="util-menu">
         <div class="util-menu__wrap">
           <a href="#n" class="btn-support"><span class="blind">고객센터</span></a>
           <button class="btn-sitemap"><span class="blind">전체메뉴</span></button>
         </div>
       </div>
     </div>
   </header>

    <!-- mobile header -->
    <header class="header-mobile">
      <div class="header__inner">
        <h1 class="header-mobile__logo"><a href="/"><img src="../assets/images/logo.png" alt="NTS 수출지원서비스"></a></h1>        
        <button class="btn-sitemap"><span class="blind">전체메뉴</span></button>
      </div>      
      <nav class="gnb">
        <ul class="gnb__wrap">
          <li class="gnb__depth01"><a href="#n" class="gnb__a01">빅바이어 마케팅</a></li>
          <li class="gnb__depth01"><a href="#n" class="gnb__a01">바이어 정보</a></li>
          <li class="gnb__depth01"><a href="#n" class="gnb__a01">해외기업 보고서</a></li>
          <li class="gnb__depth01"><a href="#n" class="gnb__a01">수출바우처 컨설팅</a></li>
        </ul>
      </nav>
    </header><!-- //mobile header -->

    <!-- sitemap -->
    <div class="sitemap">
      <div class="sitemap__inner">
        <ul class="sitemap__list">
          <li>
            <a href="#n" class="sitemap__depth01">빅바이어마케팅</a>
            <ul>
              <li><a href="#n" class="sitemap__depth02">빅데이터바이어발굴</a></li>
              <li><a href="#n" class="sitemap__depth02">마케팅발송</a></li>
              <li><a href="#n" class="sitemap__depth02">마케팅발송내역</a></li>
            </ul>
          </li>
          <li>
            <a href="#n" class="sitemap__depth01">바이어정보</a>
            <ul>
              <li><a href="#n" class="sitemap__depth02">바이어조회</a></li>
              <li><a href="#n" class="sitemap__depth02">마케팅발송</a></li>
              <li><a href="#n" class="sitemap__depth02">관심바이어</a></li>
            </ul>
          </li>
          <li>
            <a href="#n" class="sitemap__depth01">해외기업보고서</a>
            <ul>
              <li><a href="#n" class="sitemap__depth02">보고서신청</a></li>
              <li><a href="#n" class="sitemap__depth02">보고서신청내역</a></li>
            </ul>
          </li>
          <li>
            <a href="#n" class="sitemap__depth01">수출바우처컨설팅</a>
            <ul>
              <li><a href="#n" class="sitemap__depth02">서비스신청</a></li>
              <li><a href="#n" class="sitemap__depth02">신청내역</a></li>
            </ul>
          </li>
        </ul>
        <ul class="sitemap__list">
          <li>
            <a href="#n" class="sitemap__depth01">고객지원</a>
            <ul>
              <li><a href="#n" class="sitemap__depth02">문의하기</a></li>
              <li><a href="#n" class="sitemap__depth02">정보마당</a></li>
            </ul>
          </li>
          <!-- 로그아웃 상태 노출 -->
          <li>
            <a href="#n" class="sitemap__depth01">로그인</a>
            <a href="#n" class="sitemap__depth01">회원가입</a>
          </li>
          <!-- 로그인 상태 노출 -->
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
            <a href="#n" class="sitemap__depth01">메시지 알림(0)</a>
            <a href="#n" class="sitemap__depth01">로그아웃</a>
          </li>
        </ul>
      </div>
      <button type="button" class="btn-sitemap-close"><span class="blind">닫기</span></button>
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


