$(function(){
  let visual = $('#brandVisual ul li'); //큰사진
  let button = $('#buttonList li'); //pager 버튼사진
  let current =0;
  let id;

  button.click(function(){
    var i = $(this).index(); //클릭한 버튼의 인덱스 번호를 i에 대입
    // alert(i);
    button.removeClass('on'); //모든 버튼에서 클래스'on'이 있으면 제거
    $(this).addClass('on');
    // button.eq(i).addClass('on');
    move(i);
    return false;
  });
  function Timer(){
    id = setInterval(function(){
      let n = current + 1;
      if(n === 3) {n = 0;}
      button.eq(n).trigger('click'); // 버튼 인덱스번호 n에 해당되는 버튼을 컴퓨터가 클릭한다.  
                                     // trigger:강제로 실행(trigger)하게 하는 함수
    },3000);
  }
  Timer();
  function move(i){
    if(current == i) return;
    //현재 활성화된 button(검정색버튼)과 클릭한 버튼이 같으면 move에서 빠져나감
    //move랑 current의 값이 같으면 리턴해서 move에서 빠져나와라
    let cu = visual.eq(current);
    let ne = visual.eq(i);
    cu.css('left','0').stop().animate({'left':'-100%'},500);
    ne.css('left','100%').stop().animate({'left':'0'},500);
    current = i;
  }
});