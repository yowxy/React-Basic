import { useContext } from "react";
import { globalContext } from "../context";
const ArticleStatus = ({ isNew }) => {
    return isNew && <span>-- Baru !!!</span>;
  };

  const NewArticle = () => {
    return <span>--BARU !!</span>
  }

function Article (props) {
  const user = useContext(globalContext);
    return(
        <>
            <h3>{props.title}</h3>
            <small>
            Date: {props.date}, tags: {props.tags.join(", ")}{" "}
            <ArticleStatus isNew={props.isNew} />
            {props.isNew && <NewArticle/>}
            </small>
            <div>
              <small>Ditullis oleh {user.username}</small>
            </div>
        </>
    )
}


export default Article;