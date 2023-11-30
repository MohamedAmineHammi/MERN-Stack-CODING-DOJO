import React from 'react'
import './list.css'
// import library------------------------------------------------------------------------------------------------------------------------
 import {useState} from 'react';                    // useEffect to render page one time  // useState to creater dynamic object 
import { useNavigate } from "react-router-dom";            // uneNavigate to redirect in an other root 
 import axios from 'axios';                                // axios to communicate with IPA



const Create = (props) => {

  //variable declaration--------------------
  const Navigate = useNavigate();
  const [error ,setError]=useState({});
const [inputs, setInputs] =useState({
                                      firstName: "",
                                      lastName: "",
                                      gender: "",
                                      nbMatch:"" ,
                                      isPlaying: false,  
                                      position: "",
});

// function handelsubmit----------------------
const handleSubmit =(e)=>{
  e.preventDefault();
  //variable declaration--------------------
  const player ={
    firstName : inputs.firstName,
    lastName :inputs.lastName,
    gender:inputs.gender,
    nbMatch : inputs.nbMatch,
    isPlaying :inputs.isPlaying,
    position :inputs.position,
  }
 // console.log(player);                                          //console.log for tetsting variable 
// using axios for put infomation un DB
  axios.post(`http://localhost:8000/api/players`, player )
  .then(response =>{console.log(response.data);
    Navigate("/players/liste");})
  .catch(err=>{
      const errorResponse = err.response.data.error.errors; // Get the errors from err.response.data
      const obj={}
      for (const key in errorResponse){
          obj[key]=errorResponse[key].message
      }
      console.log(obj);
      setError(obj)
      
  })  
}
  return (
    
    <div>
      {JSON.stringify(error)}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">First name:</label>
            <input type="text" value={inputs.firstName} onChange={(e)=>setInputs({...inputs, firstName : e.target.value })} /> 
            {/* {error.firstName} */}
          </div>
          <div>
            <label htmlFor="">Last name:</label>
            <input type="text" value={inputs.lastName} onChange={(e)=>setInputs({...inputs, lastName : e.target.value })} />
            {/* {error.lastName} */}
          </div>
          <div>
            <label htmlFor="">Position</label>
            
            <select onChange={(e)=>setInputs({...inputs, position : e.target.value })} value={inputs.position} >
              {/* {error.position} */}
              <option value="" selected disabled hidden>Choose here</option>
              <option value="Forward">Forward</option>
                <option value="midfield">Midfield</option>
                <option value="defender ">Defender</option>
            </select>
          </div>
          <div>
              <label >Gender</label>
                <input type="radio" name='Gender' value='male' onChange={(e)=>setInputs({...inputs, gender : "male" })}/> male
                <input type="radio" name='Gender' value='female' onChange={(e)=>setInputs({...inputs, gender : "female" })}/>female 
                {error.gender}
          </div>
          <div>
              <label htmlFor=""> playing now</label>
              <input type="checkbox" onChange={(e)=>setInputs({...inputs, isPlaying : e.target.checked })} checked={inputs.isPlaying}/>{error.isPlaying}
          </div>
            
            <div>
              <label htmlFor="">Number of match</label>
              <input type="text"  onChange={(e)=>setInputs({...inputs, nbMatch : e.target.value })} value={inputs.nbMatch}/>{error.nbMatch}
            </div>
            <button> submit</button>
        </form>

    </div>
  )
}

export default Create