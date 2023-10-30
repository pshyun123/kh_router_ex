import {Navigate, useNavigate} from "react-router-dom"

const MyPage = () => {
    const navigate = useNavigate();
    // const isLogin = true; // 로그인 상태일 경우 보여줄 페이지
    const isLogin = false; // 로그인 상태가 아닐경우 보여줄 페이지
    

    if (isLogin) {
        return (
            <div>
                <h1>마이페이지</h1>
                <p>마이페이지 내용입니다.</p>
                {/* <Link to="/">홈으로</Link> */}
                <button onClick={() => navigate(-1)}>뒤로가기</button>
            </div>
         );
        }else{
            return<Navigate to = "/login" replace={true} />;
        }
};

export default MyPage;