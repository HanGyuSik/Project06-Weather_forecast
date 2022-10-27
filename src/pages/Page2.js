import { useLocation } from "react-router-dom";
import qs from 'query-string'
export default function Page2() {
  const location = useLocation().search
  const qurry = qs.parse(location)  // = 8번줄
  console.log(location)

  // let loc2 = location.replace('?', '').split('&')
  // loc2 = loc2.map((m) => m.split('=')[1])
  // console.log(loc2)

  console.log(qurry)
  console.log(location)

  return (
    <>
      <h1>Page2</h1>
      {Object.keys(qurry).length === 0 ? <p>선택항목이 없습니다.</p> : <h2>{qurry.item}({qurry.item2})</h2>}
    </>
  );
}