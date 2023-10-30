import {Link, useSearchParams} from "react-router-dom"


const About = () => {
    // const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const detail = searchParams.get("detail");
    const mode = searchParams.get("mode");
    const onToggleDetail = () => {
        // 구조분해
        setSearchParams({mode, detail: detail === "true" ? false: true});
    };
    const onIncreaseMode = () =>{
        // null이면 초기값 1 넣어줌
    const nextMode = mode === null ? 1: parseInt(mode) +1;
    setSearchParams({mode: nextMode, detail});

}
    return(
        <>
            <h1>소개</h1>
            <p>리액트 라우터 사용해보는 프로젝트입니다.</p>
            {/* <Link to="/">홈으로 이동</Link>
            <p>쿼리스트링 : {location.search}</p> */}
            <p>detail: {detail}</p>
            <p>mode: {mode}</p>
            <button onClick={onToggleDetail}>Toggle detail</button>
            <button onClick={onIncreaseMode}>mode + 1</button>
        </>
    );
};

export default About;