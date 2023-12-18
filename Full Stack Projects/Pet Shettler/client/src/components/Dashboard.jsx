import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import './Table.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'




export const Dashboard = (props) => {


    const [Allpets, setAllpets] = useState([])

    const { refreshState, refresh } = props

    useEffect(() => {
        axios.get("http://localhost:5000/api/pet/") 
            .then(res => {
                console.log(res.data)
                setAllpets(res.data)
            })
            .catch(err => {
                console.log(err)
            })
            refresh()

    }, [refreshState])

 


    return (
        <div>
            <h2>these pets are looking for a good home </h2>
       <div className='add'>   <Link className='add' to={"/Form"} type="submit"> add a pet to the shelter </Link> </div>  

          <fieldset>
          <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>type</th>
                  <th>actions</th>
                </tr>
              </thead>
              <tbody>
                {Allpets.filter(pet => pet.type).map((pet) => (
    <tr key={pet._id}>
      <td>{pet.name}</td>
      <td>{pet.type}</td>
      <td>
        <Link to={"/onepet/" + pet._id} type="submit">
          More Details
        </Link>
        <br />
        <Link to={"/update/" + pet._id} type="submit">
          Edit
        </Link>
      </td>
    </tr>
  ))}
                
              </tbody>
              </Table>
          </fieldset>
        </div>
      );
                }      
               