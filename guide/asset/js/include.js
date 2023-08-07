window.addEventListener('load', function() {
    const elHeader = document.querySelector('.fixed-side');

    elHeader.outerHTML = `
      <header class="fixed-side">
        <div class="side-bar">
          <a href="#wrap-gnb" class="btn-menu"><span class="hidden">전체메뉴</span></a>
          <ul class="quick-menu">
            <li><a href="#n"><i class="icon-home" title="Home"></i></a></li>
            <li><a href="#n"><i class="icon-mypage" title="마이페이지"></i></a></li>
            <li><a href="#n"><i class="icon-result" title="실적관리"></i></a></li>
            <li><a href="#n"><i class="icon-status" title="대출신청현황"></i></a></li>
            <li><a href="#n"><i class="icon-calcurator" title="금융계산기"></i></a></li>
            <li><a href="#n"><i class="icon-logout" title="로그아웃"></i></a></li>
          </ul>
        </div>
        <nav class="wrap-gnb">
          <div class="gnb-container">
            <div class="gnb-head">
              <span class="member">홍길동</span>
              <span class="time">58:30</span>
              <button type="button" class="btn-time">연장</button>
            </div>
            <ul class="gnb-list">
              <li class="open"><button type="button" class="btn-tgg">대출</button>
                <ul>
                  <li><a href="#n">개별대출신청</a></li>
                  <li><a href="#n">개별대출약정</a></li>
                  <li><a href="#n">집단대출신청</a></li>
                  <li><a href="#n">집단대출약정</a></li>
                  <li><a href="#n">기타대출신청</a></li>
                  <li><a href="#n" class="fc-point1">대출신청현황</a></li>
                </ul>
              </li>
              <li><button type="button" class="btn-tgg">상담하기</button>
                <ul>
                  <li><a href="#n">상품안내장</a></li>
                  <li><a href="#n">간편상담</a></li>
                  <li><a href="#n">금융계산기</a></li>
                  <li><a href="#n">금리조회</a></li>
                </ul>
              </li>
              <li><button type="button" class="btn-tgg">담보평가</button>
                <ul>
                  <li><a href="#n">KB시세조회</a></li>
                  <li><a href="#n">써브감정평가 인터넷 탁상자문</a></li>
                  <li><a href="#n">현장조사의뢰</a></li>
                  <li><a href="#n">써브감정평가 인터넷 정식조사</a></li>
                </ul>
              </li>
              <li><button type="button" class="btn-tgg">영업지원</button>
                <ul>
                  <li><a href="#n">공지사항</a></li>
                  <li><a href="#n">영업자료실</a></li>
                  <li><a href="#n">교육자료실</a></li>
                </ul>
              </li>
            </ul>
            <div class="gnb-close"><button type="button"><span class="hidden">메뉴닫기</span></button></div>
          </div>
        </nav>
      </header>`;



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


    gnbControl(); // gnb
});


