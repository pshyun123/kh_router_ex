import { Link,useNavigate } from "react-router-dom";

const Home = () => {
    // Link to 사용하지 않고 다른 페이지로 이동할때 사용
    const navigate = useNavigate();
return(
    <>
        <h1>여기가 홈입니다.</h1>
        <p>가장 먼저 보여지는 페이지 입니다.</p>
        <Link to="/about">소개페이지로 이동</Link>
        <button onClick={()=>navigate("/mypage")}>마이페이지</button>
        <br />
        <Link to="/Mypage">마이페이지</Link>
        <br />
        <Link to="/Setting">설정</Link>
        <br />
        <ul>
            <li>
                <Link to ="/Profiles/frontend">frontend 프로필</Link>
            </li>
            <li>
                <Link to ="/Profiles/backend">backend 프로필</Link>
            </li>
            <li>
                <Link to ="/Profiles/database">database 프로필</Link>
            </li>
            <li>
                <Link to ="/Articles">게시판 목록</Link>
            </li>
            
        </ul>
    </>
    );
};

export default Home;