var sub = document.querySelectorAll('.sub');

function slideUp(){
  sub.forEach(function(item){
    item.style.height = '0px';
  });
}
var menuLiA = document.querySelectorAll('.m_menu li a');
menuLiA.forEach(function(item){
  item.addEventListener('click',function(){
      var subHeight = getComputedStyle(this.nextElementSibling).height;
      //getComputedStyle는 DOM 요소의 현재 스타일을 가져오기위한 메서드
      // alert(subHeight);
      if(subHeight == '0px'){
        slideUp();
        this.nextElementSibling.style.height='108px';
      }else{
        this.nextElementSibling.style.height='0px';
        //nextElementSibling : 다음 형제요소를 참조하는 속성
        // .m_menu>li>a => vartical-menu1.html 참조하면 ul이 다음형제
      }
  });
});