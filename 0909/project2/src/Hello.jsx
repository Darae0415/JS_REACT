
function Hello({color, name, isSpecial}){  //구조분해 할당 : props를 쓰지않고 직접 파라미터 안에 {}를 더 적어서 변수명을 적어주는 것
  return  (
  <div style={{ color }}>
    {isSpecial ? <b>*</b> : null}  {/*https://learnjs.vlpt.us/useful/03-short-circuiting.html*/}
    안녕하세요 {name}</div>
   

);
}
Hello.defaultProps = {
  name : "이름없음"
}
export default Hello