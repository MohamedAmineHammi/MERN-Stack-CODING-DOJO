import React from 'react'
// import library------------------------------------------------------------------------------------------------------------------------
 import {useState , useEffect} from 'react';                    // useEffect to render page one time  // useState to creater dynamic object 
 //import {Link} from "react-router-dom";                      // link to go in other  component
import { useNavigate } from "react-router-dom";            // uneNavigate to redirect in an other root 
 import axios from 'axios';                               // axios to communicate with IPA
 import { useParams  } from "react-router";




const UpDate = () => {


    const Navigate = useNavigate();
const {_id}=useParams();
const [inputs, setInputs] =useState({
                            firstName: "",
                            lastName: "",
                            gender: "",
                            nbMatch:"" ,
                            isPlaying: false,  
                            position: "",
                        });
console.log(_id);

useEffect( ()=>{
    axios.get(`http://localhost:8000/api/players/${_id}`)
    .then(response =>{
        console.log(response.data);
        setInputs(response.data);})
    .catch(err =>{console.log("thi is error came from axios in get one by id  form update", err);})
    },[]);

    // function handelsubmit----------------------
const handleSubmit =(e)=>{
    e.preventDefault();
    const player ={
        firstName : inputs.firstName,
        lastName :inputs.lastName,
        gender:inputs.gender,
        nbMatch : inputs.nbMatch,
        isPlaying :inputs.isPlaying,
        position :inputs.position,
    }
      console.log(player);                                          //console.log for tetsting variable 
    
    axios.post(`http://localhost:8000/api/players`, player )
    .then(response =>{console.log(response.data);
        Navigate("/players/liste");})
    .catch(err =>{console.log("thi is error came from axios in update ", err);})
}






    return (
    <div>
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="">First name:</label>
            <input type="text" value={inputs.firstName} onChange={(e)=>setInputs({...inputs, firstName : e.target.value })} />
        </div>
        <div>
            <label htmlFor="">Last name:</label>
            <input type="text" value={inputs.lastName} onChange={(e)=>setInputs({...inputs, lastName : e.target.value })} />
        </div>
        <div>
            <label htmlFor="">Position</label>
            
            <select onChange={(e)=>setInputs({...inputs, position : e.target.value })} value={inputs.position}  >
                <option value="" selected disabled hidden>Choose here</option>
                <option value="Forward">Forward</option>
                <option value="midfield">Midfield</option>
                <option value="defender ">Defender</option>
            </select>
        </div>
        <div>
            <label >Gender</label>
            <input type="radio" name='Gender' value={inputs.gender} onChange={(e)=>setInputs({...inputs, gender : "male" })}/>
            <input type="radio" name='Gender' value={inputs.gender} onChange={(e)=>setInputs({...inputs, gender : "female" })}/>
        </div>
        <div>
            <label htmlFor=""> playing now</label>
            <input type="checkbox" onChange={(e)=>setInputs({...inputs, isPlaying : e.target.checked })} checked={inputs.isPlaying}/>
        </div>
            
            <div>
                <label htmlFor="">Number of match</label>
                <input type="text"  onChange={(e)=>setInputs({...inputs, nbMatch : e.target.value })} value={inputs.nbMatch}/>
            </div>
            <button> submit</button>
        </form>

    </div>
  )
}

export default UpDate