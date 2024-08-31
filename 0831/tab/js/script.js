const targetLink = document.querySelectorAll('.tab_menu a');
const tabContent = document.querySelectorAll('#tabContent div');

for(let i = 0; i<targetLink.length; i++){
  targetLink[i].addEventListener('click',function(e){
    e.preventDefault(); //return false; 와 유사
    const orgTarget = e.target.getAttribute('href'); //클릭한 것(e.target)
    //#tap1, #tap2, #tap3
    // alert(orgTarget);
    const tabTarget = orgTarget.replace('#',""); // #tab1 => tab1 : #을, 공백으로 바꿔준 것

    for(let j=0; j<tabContent.length; j++){
      tabContent[j].style.display = 'none';
      // relace로 변경한 tabs[j]들이 div안에 tabs[j]랑 같아지면서 display를 none으로 변경됨
    }
    document.getElementById(tabTarget).style.display='block';
    // 클릭으로 getElementById(타켓) 지정된 아이디의 컨텐츠를 보여준다.

    for(let k = 0; k<targetLink.length; k++){
      targetLink[k].classList.remove('active');
      e.target.classList.add('active'); //클릭한 버튼에 'active'를 넣음
      //tab_menu a -> active로 변경되서 주어 색상 변경됨
    }
  });
}