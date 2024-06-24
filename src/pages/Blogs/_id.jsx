
import { useLoaderData } from "react-router-dom";

function singlePost (){
    const post = useLoaderData ();
    // const params = useParams();
    // const [post, setPosts] = useState(null);


    // useEffect(() => {
    //     fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    //       .then(response => response.json())
    //       .then(json => setPosts(json))
    //     },[]);


        return(
            <>
                <h2>{post?.title}</h2>
                <div>{post?.body}</div>
            </>
        )

}

export default singlePost;