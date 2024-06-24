import { useState } from "react";

function search(props){
    const [search ,setSearch] = useState("");
    const onSearchChange = () =>{
        props.onSearchChange(search);
    };

    const searchKeydown = (e) =>{
        if(e.key === "Enter") {
            onSearchChange();
        }
    };
    
    return (
        <>
             <div>
                Cari Artikel : <input onChange={(e) => setSearch(e.target.value)}  onKeyDown={searchKeydown} ></input>
                <button onClick={onSearchChange}>Search</button>
            </div>
            <small>Ditemukan {props.totalPosts} data dengan pencarian kata {search}</small>
        </>
    )

}

export default search;