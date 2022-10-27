import { Route, Routes } from 'react-router-dom';
// import WeatherDay from './com/WeatherDay';
import Main from './com/Main';
import WeatherMain2 from './com/WeatherMain2';
import WeatherMain from './com/WeatherMain';
// import Home from './pages/Home';
// import Page1 from './pages/Page1';
// import Page2 from './pages/Page2';
// import Nav from './pages/Nav';
function App() {
  return (
    <>
      {/* <Nav />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/p1/:item' element={<Page1/>}/>
        <Route path='/p2' element={<Page2/>}/>
      </Routes> */}
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/WeatherMain2' element={<WeatherMain2/>}/>
        <Route path='/WeatherMain' element={<WeatherMain/>}/>        
      </Routes>  
    </>
  );
}

export default App;
