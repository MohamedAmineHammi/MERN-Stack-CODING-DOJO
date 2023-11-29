import React from 'react'
import './style.css'

// import library------------------------------------------------------------------------------------------------------------------------
import {useEffect,useState} from 'react';                    // useEffect to render page one time  // useState to creater dynamic object 
//import {Link} from "react-router-dom";                      // link to go in other  component
//import { useNavigate } from "react-router-dom";            // uneNavigate to redirect in an other root 
import axios from 'axios';                                // axios to communicate with IPA

// import component from views----------------------------------------------------------------------------------------------------------------
import Liste from '../views/Liste';
//============================================================================================================================================

const GetAll = () => {
    const [players , setPlayers] =useState([]);
    const [loding , setLoding ] = useState(true);


// call IPA to keep  all information  from DB===============================================================

        // use useEffect  to rendering the page  one time ---------------------------------------------------
        useEffect( ()=>{
            // call DB with axios and using IPA === GetAll (find) === -----------
            axios.get(`http://localhost:8000/api/players`)                                                   // call IPA
            .then(response =>{
                console.log(response.data);                                                              //console.log  response from DB
                setPlayers(response.data)                                                                 // put reponse form DB in Notes varible 
                setLoding(false)})
            .catch(err =>{console.log("thi is error came from axios in allNote ", err);})               // if err catch err
        },[]);
    //-----------------------------------------------------------------------------------------------------
// =============================================================================================================

  return (
    <div className='App'>

        
        {
            loding ? "loding" : <Liste players={players} />

        }
    </div>
  )
}

export default GetAll