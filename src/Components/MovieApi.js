import React, { useState } from "react";
import { useEffect } from "react";
const MovieApi = () => {
    const [apiData,setApiData] = useState([]);
    const API_URL = `https://hoblist.com/api/movieList`;
    const getMovies = async (url)=>{
        try{
            const payload = {
                "category": "movies",
                "language": "kannada",
                "genre": "all",
                "sort": "voting"
            }
            const res = await fetch(url,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(payload)});
            const data = await res.json();
            // console.log("Data",data)
            setApiData(data?.result);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        getMovies(API_URL);
    },[API_URL])
    return(
        <>
        {
            apiData.map((value)=>{
                return (<div>{value?.title}</div>)
            })
        }
        </>
    )
}
export default MovieApi;