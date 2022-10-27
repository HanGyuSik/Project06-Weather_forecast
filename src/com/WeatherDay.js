// json데이터를 호출
import "../CSS/Weather_1.css"
import wt from '../Json/Weather.json';
export default function WeatherDay(props){
  const d = props.d;
  console.log(d)
  const wta = wt.response.body.items.item[0];
  console.log(wta)

  const items = [];
  const keys = [`rnSt${d}Am`, `rnSt${d}Pm`, `wf${d}Am`, `wf${d}Pm`] 
  console.log(keys)
  for(let k of keys){
    
    items.push(wta[k])
  }

  console.log(keys)
  return(
    <>
    <h2>{props.d}일 후</h2>
    <ul>
      <li className="day_1"><span className="day_sp">{d}일후 오후강수량</span>: <span className="day_sp2">{items[1]}%</span></li>
      <li className="day_1"><span className="day_sp">{d}일후 오전강수량</span>: <span className="day_sp2">{items[0]}%</span></li>
      <li className="day_1"><span className="day_sp">{d}일후 오전날씨예보</span>: <span className="day_sp2">{items[2]}</span></li>
      <li className="day_1"><span className="day_sp">{d}일후 오후날씨예보</span>: <span className="day_sp2">{items[3]}</span></li>
    </ul>
    </>
  );
}