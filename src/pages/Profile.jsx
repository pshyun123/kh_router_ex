import { useParams } from "react-router-dom";
//useParams: 리액트 라우터에서 URL 파라미터 값을 가져오기 위한hook

// 서버에 다녀올 수 없어서 만든 데이터임
const data = {
    frontend: {
        name: "곰돌이 사육사",
        description: "리액트 러버"
    },
    backend: {
        name: "달빛사냥꾼",
        description: "스트링부트 러버",
    },
    database: {
        name: "천재",
        description: "Database 러버",
    },
};

const Profile = () => {
    const params = useParams();
    // userName은 호출하는 페이지에서 지정한 유동적인 값으로 대체되어 컴포넌트에 전달.
    const profile = data[params.username];
    console.log(params.username);

    return (
        <>
            <h1>사용자 프로필</h1>
            {/* 삼항연산자 사용 참이면 앞의 값, 거짓이면 뒤의 값 */}
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>
            ) : (
                <p>존재하지 않는 프로필입니다.</p>
            )}
        </>
    );
};

export default Profile;