//import {Link} from "react-router-dom";                      // link to go in other  component
// import library------------------------------------------------------------------------------------------------------------------------
import React from 'react'
import {useEffect,useState} from 'react';                    // useEffect to render page one time  // useState to creater dynamic object 
import { useNavigate } from "react-router-dom";            // uneNavigate to redirect in an other root 
import axios from 'axios';                                // axios to communicate with IPA
import { useParams  } from "react-router";

const Delete = (props) => {

const Navigate = useNavigate();
const {_id}=useParams();
const [player , setPlayer] =useState({});
console.log(_id);



useEffect( ()=>{
  axios.get(`http://localhost:8000/api/players/${_id}`)
  .then(response =>{
      console.log(response.data);
      setPlayer(response.data)})
  .catch(err =>{console.log("thi is error came from axios in get one by id ", err);})
},[]);



const okdelete = (_id) =>{

  axios.delete(`http://localhost:8000/api/players/${_id}`)
  .then(response =>{
      console.log(response.data);
      console.log("delete is ok");
      Navigate(`/players/liste`)
      //setNotes(notes.filter((note)=> note._id !== id)) 
  })
  .catch(err =>{console.log("thi is error came from axios in delete ", err);})



}

  return (
    <div>
       <h1> you  want delete </h1>
        <p> First Name  : {player.firstName}</p>
        <p> Last Name  : {player.lastName}</p>
        <p>Number of match : {player.nbMatch} </p> 
        <p>Position : {player.nbMatch} </p>

        <button onClick={(()=>{okdelete(player._id)})}> yes </button>
        <button onClick={(()=>{ Navigate(`/players/liste`)})}> no</button>





    </div>
  )
}

export default Delete