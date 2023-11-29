// import library------------------------------------------------------------------------------------------------------------------------
import React from 'react'
import {useEffect,useState} from 'react';                    // useEffect to render page one time  // useState to creater dynamic object 
//import { useNavigate } from "react-router-dom";            // uneNavigate to redirect in an other root 
import axios from 'axios';                                // axios to communicate with IPA
import { useParams  } from "react-router";


const GetOne = () => {


const {_id}=useParams();
const [player , setPlayer] =useState({});
console.log(_id);

useEffect( ()=>{
    axios.get(`http://localhost:8000/api/players/${_id}`)
    .then(response =>{
        console.log(response.data);
        setPlayer(response.data)})
    .catch(err =>{console.log("thi is error came from axios in get one by id ", err);})
    },[_id]);



  return (
    <div>
        
        <p> First Name  : {player.firstName}</p>
        <p> Last Name  : {player.lastName}</p>
        <p>Number of match : {player.nbMatch} </p> 
        <p>Position : {player.nbMatch} </p>
        <p>Gender : {player.nbMatch} </p>
        <p>{player.nbMatch ? "he play now": "he don't play" }

        </p>
    </div>
  )
}

export default GetOne