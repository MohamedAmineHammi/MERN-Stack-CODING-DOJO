import React from 'react'
import './list.css'
// import library------------------------------------------------------------------------------------------------------------------------
// import {useEffect,useState} from 'react';                    // useEffect to render page one time  // useState to creater dynamic object 
 import {Link} from "react-router-dom";                      // link to go in other  component
import { useNavigate } from "react-router-dom";            // uneNavigate to redirect in an other root 
// import axios from 'axios';                                // axios to communicate with IPA
// import Delete from '../components/Delete';


const Liste = (props) => {
    const Navigate = useNavigate();
    const players = props.players;
    
    const updateplayer = (_id)=>{
        Navigate(`/update/${_id}`)
    }
    const deleteplayer =(_id)=>{
        Navigate(`/delete/${_id}`)
        
        
        
    
    }


  return (
    <div>
        <div>
        <Link to={"/players/new"} >Add Player</Link> | <Link to={"/players/liste"} >List of players</Link>
        </div>
        <div>
        <table >
        
            <tr>
                <th>Full Name</th>
                <th>Number of match</th>
                <th>Position</th>
                <th>Playing/ not Playing</th>
                <th>action</th>
            </tr>

            {players.map((player)=>{
            return <tr key={player._id}>
                <td><Link to={`/player/${player._id}`} >{`${player.firstName} ${player.lastName}`}</Link></td>
                <td>{player.nbMatch}</td>
                <td>{player.position}</td>
                <td>{player.isPlaying}</td>
                <td><button onClick={()=>{updateplayer(player._id)}}>Update </button><button onClick={()=>{deleteplayer(player._id)}}>delete</button></td>
            </tr>
            })}
        </table>










        </div>
    </div>
  )
}

export default Liste