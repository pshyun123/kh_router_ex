import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import MyPage from './pages/MyPage';
import Setting from './pages/Setting';
import Profile from './pages/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Layout from './pages/Layout';

// MyPage와 Setting 페이지 추가
// Home 에서 About, MyPage, Setting 페이지 링크 보여주고 이동하도록
// 이동된 각 페이지 에서는 홈으로 이동하는 링크 만들고 Home으로 이동되도록 만들기

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <Router>
      <Routes>
        {/* 경로는 대소문자 구분 안함 */}
        <Route path='/login' element={<Login/>}/> 
        <Route element={<Layout />}> 
          <Route path='/home' element={<Home />}/> 
          <Route path='/About' element={<About />}/>
          <Route path='/MyPage' element={<MyPage/>} />
          <Route path='/Setting' element={<Setting/>} />
          <Route path='/Profiles/:username' element={<Profile/>} />
          <Route path='/Articles' element={<Articles/>}>
            <Route path='/Articles/:id' element={<Article/>} /> 
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
