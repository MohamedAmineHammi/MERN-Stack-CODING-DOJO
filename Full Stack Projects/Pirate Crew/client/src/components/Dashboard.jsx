import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export const Dashboard = (props) => {


    const [AllPirates, setAllPirates] = useState([])
    const notify = () => toast("Pirate deleted successfully!");
    const { refreshState, refresh } = props

    useEffect(() => {
        axios.get("http://localhost:8000/api/Pirate/") 
            .then(res => {
                console.log(res.data)
                setAllPirates(res.data)
            })
            .catch(err => {
                console.log(err)
            })

    }, [refreshState])

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/Pirate/${id}`)
        .then(res => {
            refresh();
            notify();
        })
            .catch(err => {
                console.log(err)
            })
    }




    return (
        <div>
           
            <fieldset>
               
                {
                   AllPirates
                   .sort((a, b) => a.name.localeCompare(b.name)) // Sort pirates by name alphabetically
                   .map((Pirate) => {
                     return (
                       <div key={Pirate._id}>
                       
                       
                         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Pirate.imageurl} />
      <Card.Body>
        <Card.Title>{Pirate.name}</Card.Title>
        <Link to={("/onePirate/" + Pirate._id)} type="submit" value="More Details">View Pirate</Link>
                            <button onClick={(e) => { deleteHandler(Pirate._id) }}>walk the plank</button>
      </Card.Body>
    </Card>
                        </div>
                         );
                    })
                }
            </fieldset>
        </div>
        
    )
}
