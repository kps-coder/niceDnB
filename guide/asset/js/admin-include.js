window.addEventListener('DOMContentLoaded', function() {
   headerInclud.innerHTML = `
   <h1 class="logo"><a href="main.html"><span class="blind">Linker</span></a></h1>
      <div class="user-menu">
        <div class="user-name"><strong>홍길동 님</strong> 환영합니다.</div>
        <ul class="user-menu__mymenu">
          <li><a href="#none" class="btn-logout">로그아웃</a></li>
          <li><a href="#none" class="btn-mypage">마이페이지</a></li>
        </ul>
      </div>`;

  gnbInclud.innerHTML = `
  <ul class="global-nav__list">
    <li><a href="#none" class="btn-depth-1"><i class="icon-meun01"></i>바이어 관리</a>
      <ul class="global-nav__depth2">
        <li><a href="#none">바이어 조회/등록</a></li>
      </ul>
    </li>
    <li><a href="#none" class="btn-depth-1"><i class="icon-meun02"></i>행사관리</a>
      <ul class="global-nav__depth2">
        <li><a href="#none">행사조회/등록</a></li>
      </ul>
    </li>
    <li><a href="#none" class="btn-depth-1"><i class="icon-meun03"></i>컨설팅관리</a>
      <ul class="global-nav__depth2">
        <li><a href="#none">컨설팅신청내역</a></li>
      </ul>
    </li>
    <li><a href="#none" class="btn-depth-1"><i class="icon-meun04"></i>서비스관리</a>
      <ul class="global-nav__depth2">
        <li><a href="#none">마케팅메일템플릿</a></li>
        <li><a href="#none">캐시관리</a></li>
        <li><a href="#none">공지사항</a></li>
        <li><a href="#none">문의내역</a></li>
      </ul>
    </li>
    <li><a href="#none" class="btn-depth-1"><i class="icon-meun05"></i>회원관리</a>
      <ul class="global-nav__depth2">
        <li><a href="#none">회원조회</a></li>
        <li><a href="#none">회원등급</a></li>
      </ul>
    </li>
    <li><a href="#none" class="btn-depth-1"><i class="icon-meun06"></i>통계</a>
      <ul class="global-nav__depth2">
        <li><a href="#none">회원통계</a></li>
        <li><a href="#none">매출통계</a></li>
        <li><a href="#none">서비스 이용 통계</a></li>
        <li><a href="#none">바이어 발굴 현황</a></li>
        <li><a href="#none">바이어 회신율</a></li>
        <li><a href="#none">단계별 장애 통계</a></li>
      </ul>
    </li>
    <li><a href="#none" class="btn-depth-1"><i class="icon-meun07"></i>시스템</a>
      <ul class="global-nav__depth2">
        <li><a href="#none">버전관리</a></li>
        <li><a href="#none">관리자 메뉴 권한</a></li>
      </ul>
    </li>
  </ul>`;


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


