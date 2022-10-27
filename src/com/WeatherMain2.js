import { useNavigate } from "react-router-dom"
import item from "../Json/item.json"
import wt2 from "../Json/Weather2.json"
import "../CSS/Weather.css"

export default function WeatherMain2() {
  const url = {
    '메인화면': '/'
  }
  const navi = useNavigate()
  const Click = (k) => {
    navi(url[k])
    console.log(url[k])
  }

  // json파일에서 가져온 item 배열(Object형식)
  const wd2 = wt2.response.body.items.item;
  console.log(wd2)

  const pty = { "0": "없음", "1": "비", "2": "비/눈", "3": "눈", "4": "소나기", "5": "빗방울", "6": "빗방울눈날림", "7": "눈날림" };
  const sky = { "1": "맑음", "3": "구름많음", "4": "흐림" };


  // 빈 배열 선언
  //let lis = [];
  // json파일의 데이터를 담음->for문과 switch문 사용
  // 객체 내의 모든것을 쏟아내는 반복문
  /*for (let w of wt2) {
    console.log(w)
    switch (w) {
      // 반복되는 부분을 없애기 위해 map함수와 삼항연산자 사용
        case "POP":
        // key값 : 카테고리를 지정하여 차별화
        // " " 안의 값 : 각 카테고리의 배열의 [0~7] -> item.json내용물과 일치
        lis.push(<li key={w.category}>{item[w.category][0]} : {w.obsrValue}%</li>);
        break;
      
        case "PTY":
        lis.push(<li key={w.category}>{item[w.category][1]} : {w.obsrValue}%</li>);
        break;
     
        case "PCP":
        lis.push(<li key={w.category}>{item[w.category][2]} : {w.obsrValue}%</li>);
        break;
      
        case "REH":
        lis.push(<li key={w.category}>{item[w.category][3]} : {w.obsrValue}%</li>);
        break;
      
        case "RN1":
        lis.push(<li key={w.category}>{item[w.category][4]} : {w.obsrValue}%</li>);
        break;
      
        case "SNO":
        lis.push(<li key={w.category}>{item[w.category][5]} : {w.obsrValue}%</li>);
        break;
      
        case "SKY":
        lis.push(<li key={w.category}>{item[w.category][6]} : {w.obsrValue}%</li>);
        break;
      
    }   
  }*/

  const lis2 = wd2.map((r) => (
    (r.category === 'PTY')
      ? <li key={r.category}><span className="category1">{item[r.category][0]}</span> : <span className="category2">{pty[r.obsrValue]}</span></li>
      : (r.category === 'SKY')

        ? <li key={r.category}><span className="category1">{item[r.category][0]}</span> : <span className="category2">{sky[r.obsrValue]}</span></li>
        : <li key={r.category}><span className="category1">{item[r.category][0]}</span> : <span className="category2">{r.obsrValue}</span><span className="category3">{item[r.category][1]}</span></li>
  )

  );

  console.log(lis2)


  // Object.entries() : 배열화-> 하나의 객체로 취급하여 생각
  // wd2를 배열로 하여 lis2를 생성
  // const lis2 = Object.entries(wd2).map((r) => Object.entries(wd2) = w로 하여 뒤의 함수식 실행
  // map : 빈 배열을 순회(==for)하면서 데이터를 대입하는 함수 -> map(변수)[순번(가져온 배열의 길이까지)]
  // lis = 태그를 찍는 배열

  /*  const lis2 = Object.entries(wd2).map((r) => (
      //<li key={r[1].category}>{item[r[1].category]}</li>
    )    
  
    );
  
    console.log(lis2)
  */

  // // object.entries : 배열화
  //   const lis = Object.entries(wd2).map((m) =>
  //    (m[1].category === 'PTY' ? 
  //    (<li key={m[1].category}>
  //       {item[m[1].category][0]}
  //       {m[1].obsValue}
  //       {item[m[1].category][1]}</li>)
  //       :
  //       (<li key={m[1].category}>
  //         {item[m[1].category][0]}
  //         {m[1].obsValue}
  //         {item[m[1].category][1]}</li>)
  //   ));
  //   console.log(lis)

  return (
    <>
      <h1>날씨예보-단기정보</h1>
      <button className="btt2" onClick={() => Click('메인화면')}>메인화면</button>
      <ul>
        {lis2}
      </ul>

    </>
  );
}