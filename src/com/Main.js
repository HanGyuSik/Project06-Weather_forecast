// import WeatherMain from "./WeatherMain";
import '../CSS/Main.css'
import { useNavigate } from "react-router-dom";
export default function Main() {
  const navi = useNavigate()
  const url = {
    '단기예보': '/WeatherMain2?base_date=202210',
    '중기예보': '/WeatherMain?tmFc=202210'
  }

  const Click = (k) => {
    navi(url[k])
    console.log(url[k])
  }
  

  return (
    <>
      <h1>일기예보</h1>

      <div className='ddi'>
        <button className="btt1" onClick={() => Click('단기예보')}>단기예보</button>
        <button className="btt1" onClick={() => Click('중기예보')}>중기예보</button>
      </div>
    </>
  )
}