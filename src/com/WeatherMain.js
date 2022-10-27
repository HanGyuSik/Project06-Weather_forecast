// 메인 확장팩
// 1. 날씨예보 버튼으로 나올 확장팩 호출
import "../CSS/Weather_1.css"
import WeatherDay from "./WeatherDay";
// useState import
import { useState } from "react";
import { useNavigate } from "react-router-dom"

function WeatherMain() {
  const url = {
    '메인화면': '/'
  }
  const Click = (k) => {
    navi(url[k])
    console.log(url[k])
  }
  const navi = useNavigate()

  let[day, setDay] = useState(3);
  // 변하지 않는 함수 지정 : 
  const handleClick = (d) => {
    setDay(d);
    console.log(d)
  }



  return (

    <>
      <h1>날씨예보</h1>
      <button className="bt22" onClick={() => Click('메인화면')}>메인화면</button>
      {/* form으로 버튼 생성*/}
      {/* 버튼으로 어떠한 이벤트가 발생하게 하기위해 onclick함수 생성 */}
      <form className="weather_form">
        {/* preventDefault : 이벤트(새창으로 로딩) 방지 */}
        {/* handleclick : 임의로 위에서 지정하는 함수 */}
        <button className="weatherbt1" onClick={(e) => {e.preventDefault() ; handleClick(3);}}>3일후 날씨</button>
        {/* 변수 e 가 들어올 경우 아래와 같은 이벤트(함수)가 실행*/}
        <button className="weatherbt1" onClick={(e) => {e.preventDefault() ; handleClick(4);}}>4일후 날씨</button>
        <button className="weatherbt1" onClick={(e) => {e.preventDefault() ; handleClick(5);}}>5일후 날씨</button>
        <button className="weatherbt1" onClick={(e) => {e.preventDefault() ; handleClick(6);}}>6일후 날씨</button>
     </form>
     {/* {day} : 스테이트 변수 */}
      <WeatherDay d={day}/>
    </>




  );
}
export default WeatherMain;