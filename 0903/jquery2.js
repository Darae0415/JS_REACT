document.addEventListener("DOMContentLoaded", function () {
  // id가 list1인 요소에 li 요소 중 홀수 인덱스만 선택 후 배경 노란색
  let list1OddItems = document.querySelectorAll("#list1 li:nth-child(odd)");
  list1OddItems.forEach(function (item) {
      item.style.background = "yellow";
  });

  // id가 list1인 요소에 li 요소 중 짝수 인덱스만 선택 후 배경 회색
  let list1EvenItems = document.querySelectorAll("#list1 li:nth-child(even)");
  list1EvenItems.forEach(function (item) {
      item.style.background = "gray";
  });

  // id가 list1인 요소에 첫번째 li 요소만 선택 후 글자색 빨간색
  document.querySelector("#list1 li:first-child").style.color = "red";

  // id가 list1인 요소에 마지막 li 요소만 선택 후 글자색 초록색
  document.querySelector("#list1 li:last-child").style.color = "green";

  // id가 list1인 요소에 두번째 li 요소만 선택 후 이탤릭체로 변경
  document.querySelectorAll("#list1 li")[1].style.fontStyle = "italic";

  // id가 list1인 요소에 인덱스 2보다 작은 li 요소들에 테두리 점선 적용
  let list1Lt2Items = document.querySelectorAll("#list1 li:nth-child(-n+2)");
  list1Lt2Items.forEach(function (item) {
      item.style.border = "2px dotted aqua";
  });

  // id가 list1인 요소에 인덱스 3보다 큰 li 요소들에 테두리 점선 적용
  let list1Gt2Items = document.querySelectorAll("#list1 li:nth-child(n+4)");
  list1Gt2Items.forEach(function (item) {
      item.style.border = "2px dotted purple";
  });

  // id가 list2인 요소에 li 요소 중 2의 배수번째 li 요소 선택 후 배경색 오렌지
  let list2Nth2nItems = document.querySelectorAll("#list2 li:nth-child(2n)");
  list2Nth2nItems.forEach(function (item) {
      item.style.background = "orange";
  });

  // li 중 '리스트11' 텍스트가 포함된 요소만 선택 후 글자색 빨간색
  let list2ContainsTextItems = document.querySelectorAll("#list2 li");
  list2ContainsTextItems.forEach(function (item) {
      if (item.textContent.includes('리스트11')) {
          item.style.color = "red";
      }
  });

  // id가 list2인 요소에 li 요소 중 span 태그를 포함한 li 요소 선택 후 글자색 aqua
  let list2HasSpanItems = document.querySelectorAll("#list2 li span");
  list2HasSpanItems.forEach(function (span) {
      span.parentElement.style.color = "aqua";
  });

  // id가 list2인 요소에 li 요소 중 class가 theObj인 요소 선택 후 폰트 크기 20px
  let list2ClassItems = document.querySelectorAll("#list2 li.theObj");
  list2ClassItems.forEach(function (item) {
      item.style.fontSize = "20px";
  });

  // id가 list2인 요소에 li 요소의 하위 a 요소만 선택 후 배경색 빨간색
  let list2AnchorItems = document.querySelectorAll("#list2 li a");
  list2AnchorItems.forEach(function (item) {
      item.style.backgroundColor = "red";
  });

  // class가 theTitle인 요소의 HTML 내용 변경
  document.querySelector(".theTitle").innerHTML = "<a href='#'>요소 객체 조작</a>";

  // class가 obj1인 요소의 텍스트 내용 변경
  document.querySelector(".obj1").textContent = "리스트_2";

  // id가 list3인 요소에 마지막에 새 li 요소 추가
  let list3 = document.querySelector("#list3");
  let newListItem1 = document.createElement("li");
  newListItem1.textContent = "list_6";
  list3.appendChild(newListItem1);

  // id가 list3인 요소에 첫번째에 새 li 요소 추가
  let newListItem2 = document.createElement("li");
  newListItem2.textContent = "list_1";
  list3.insertBefore(newListItem2, list3.firstChild);

  // id가 list3인 5번째 li 요소 이전에 새 요소 추가
  let insertBeforeItem = document.createElement("li");
  insertBeforeItem.textContent = "insertBefore";
  let list3Items = document.querySelectorAll("#list3 li");
  list3.insertBefore(insertBeforeItem, list3Items[4]);

  // id가 list3인 6번째 li 요소 이후에 새 요소 추가
  let insertAfterItem = document.createElement("li");
  insertAfterItem.textContent = "insertAfter";
  list3.insertBefore(insertAfterItem, list3Items[5].nextSibling);

  // class가 obj1인 요소를 복제 후 id가 list3인 요소에 마지막 위치에 추가
  let obj1Clone = document.querySelector(".obj1").cloneNode(true);
  list3.appendChild(obj1Clone);

  // id가 list3인 요소에 첫번째 li 요소 삭제
  list3.removeChild(list3.firstChild);

  // id가 list3인 요소의 첫번째 li 요소에 클래스 이름을 반환
  let firstListItem = list3.querySelector("li");
  console.log(firstListItem.getAttribute('class'));

  // 첫번째 li 요소에 클래스 이름을 설정하고 스타일 변경
  firstListItem.setAttribute('class', 'obj2');
  firstListItem.style.backgroundColor = 'yellow';

  // 첫번째 li 요소에 클래스 추가 후 스타일 변경
  firstListItem.classList.add("obj3");
  firstListItem.style.color = "red";
});