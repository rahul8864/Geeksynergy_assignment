import axios from "axios";
import React, { useEffect, useState } from "react";

function Home() {
  const [data, setData] = useState([])
  const API_URL = `https://hoblist.com/api/movieList`;
  useEffect(() => {
    document.title = "Home";
  },[])
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
            setData(data?.result);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        getMovies(API_URL);
    },[API_URL])
    console.log(data)
  return (
    <div className="main d-flex flex-wrap">
    {data.map( item => (
      <div className="contain d-flex flex-column" style={{width: "550px", height: "450px", boxShadow: "0px 0px 15px 2px rgba(0,0,0,0.25)", margin: "15px", borderRadius: "10px", padding:"10px"}}>
      <div className="d-flex justify-content-around">
        <div className="vote d-flex flex-column align-items-center justify-content-between p-1">
          <div className="d-flex flex-column justify-content-around align-items-center" style={{margin:"auto"}}>
            <span style={{fontSize:"5rem"}}><i class="fa-solid fa-sort-up"></i></span>
            <span style={{fontSize:"2rem"}}>{item.totalVoted}</span>
            <span style={{fontSize:"5rem"}}><i class="fa-solid fa-sort-down"></i></span>
          </div>
          <span className="fw-bold" style={{fontSize:"2rem"}}>Votes</span>
        </div>
        <div className="images d-flex flex-column align-items-center justify-content-center">
          <img src={item.poster} width="200px" style={{objectFit: "cover", borderRadius: "5px", boxShadow: "0px 0px 10px 3px rgba(0,0,0,0.25)"}}/>
        </div>
        <div className="d-flex flex-column p-2 justify-content-around" style={{height: '100%'}}>
          <span className="fw-bold" style={{fontSize:"2rem"}}>{item.title}</span>
          <span>Genre: {item.genre}</span>
          <span>Director: {item.director}</span>
          <span>Starring: {item.stars}</span>
          <span>-</span>
          <span>{item.pageViews} views | voted by {item.voting} People</span>
        </div>
        </div>
        <button className="btn btn-primary">Watch Trailer</button>
      </div>
    ))}
  </div>
  );
}

export default Home;
