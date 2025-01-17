$(document).ready(function () {
  // alert("제이쿼리 실행")
  //   메뉴 슬라이드
  $(".gnb > li").hover(
    function () {
      console.log(this);

      $(this).find(".depth2").stop().slideDown();
    },
    function () {
      $(this).find(".depth2").stop().slideUp();
    }
  );
  //   비주얼 슬라이드 영역
  // .siblings() 첫번째를 제외한 나머지 형제요소는 숨기기
  //   이미지 1번만 보이게하는 코드
  $(".slide-all > li").eq(0).siblings().hide();
  //   console.log($(".slide-all > li"))
  //   slidei 에다가 0을 담아놓음
  var slideI = 0;
  // setinterval 3초동안 행동하라
  //  fadein, fadeout 슬라이드 하는 방법
  setInterval(function () {
    // 슬라이드 반복하기, 1~3번 이미지 나오게
    if (slideI < 2) {
      slideI++;
    } else {
      slideI = 0;
    }
    $(".slide-all > li").eq(slideI).siblings().fadeOut();
    $(".slide-all > li").eq(slideI).fadeIn();
  }, 3000);

  //   공지사항 탭 메뉴
  $(".c1 h4 ").click(function () {
    // console.log("click");
    $(".c1 h4, .c1 ul").removeClass("on");
    $(this).addClass("on").next("ul").addClass("on");
  });
  // 모달창 close
  $(".close").click(function () {
    $("#modal").fadeOut();
  });
  // 모달창 open
  $(".popup").click(function () {
    // console.log("click");
    $("#modal").fadeIn();
  });
});
