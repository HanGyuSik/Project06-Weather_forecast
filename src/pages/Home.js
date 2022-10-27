import { Link, useNavigate } from "react-router-dom";


export default function Home() {
  const navi = useNavigate();

  const handleClick = (k) => {
    console.log(url[k])
    navi(url[k])
  }

  // const handleClick = (k) => {
  //   let url = null
  //   switch (k) {
  //     case 'apple':
  //       url = '/p2?item=사과&item2=과일'
  //       break;
  //     case 'banana':
  //       url = '/p2?item=바나나&item2=과일'
  //       break;
  //   }
  //   navi(url)
  // }

  const url = {
    'apple': '/p2?item=사과&item2=과일',
    'banana': '/p2?item=바나나&item2=과일'
  }





  return (
    <>
      <h1>Home</h1>

      <h2>Page1으로 이동</h2>
      <ul>
        <li><Link to='/p1/apple'>apple</Link></li>
        <li><Link to='/p1/banana'>banana</Link></li>
      </ul>

      <h2>Page2으로 이동</h2>
      <ul>
        <li><Link to='/p2?item=사과&item2=과일'>apple2</Link></li>
        <li><Link to='/p2?item=바나나&item2=과일'>banana2</Link></li>
      </ul>

      <button><Link to='/p2?item=사과&item2=과일'>apple2</Link></button>
      <button><Link to='/p2?item=바나나&item2=과일'>banana2</Link></button>



      <h2>Page2으로 이동</h2>
      <button onClick={() => handleClick('apple')}>apple2</button>
      <button onClick={() => handleClick('banana')}>banana2</button>

    </>
  );
}