import { useState,useEffect } from "react";
import postData from "../posts.json"
import Article from "../components/Article";
import Search from "../components/Search";
function Homepage (){
    const [posts, setPosts] = useState(postData);
    const [totalPosts, setTotalposts] = useState(0);

    const onSearchChange = (value) =>{
      const filterdata = postData.filter(item => item.Title.includes(value))
      setPosts(filterdata)
      setTotalposts(filterdata.length);
    };

    useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setExternalPost(json))
    },[])


    return(
        <>
            <h1>Hello World</h1>
            <Search onSearchChange={onSearchChange} totalPosts={totalPosts}/>
            {
                posts.map(({Title , tags , Date ,isNew}, index)=>(
                    <Article title={Title}  tags={tags} date={Date} isNew={isNew} key={index}/>
                ))
            }
        </>
    )
}

export default Homepage;