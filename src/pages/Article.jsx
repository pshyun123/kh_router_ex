import { useParams } from "react-router-dom";

const Article = () => {
    const {id} = useParams();
    console.log(id);
    return(
        <>
            <h2>게시글{id}</h2>
        </>
    );
};
export default Article;