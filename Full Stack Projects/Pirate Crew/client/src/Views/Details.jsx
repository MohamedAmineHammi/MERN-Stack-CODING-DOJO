import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from "axios"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';


export const Details = () => {

    const [onePirate, setOnePirate] = useState({})

    const { Pirate_id } = useParams()


    useEffect(() => {
        axios.get(`http://localhost:8000/api/Pirate/${Pirate_id}`)
            .then(res => {
                console.log(res.data)
                setOnePirate(res.data.OnePirate)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (




        <div>
                                    <Link className='add' to={"/movies"} type="submit"> Crow board </Link>


<Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">{onePirate.name}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>



            {(onePirate) ?
                <div>
                                      <Card.Text>"Shiver me timbers"</Card.Text>

                         <Card style={{ width: '18rem',marginLeft:'42%',marginTop:'2%' }}>
                         <Card.Img  style={{ width: '18rem'}} variant="top" src={onePirate.imageurl} />

      <Card.Body> 
        <Card.Title>Position:{onePirate.Crewpostion}</Card.Title>

        <Card.Title>Treasure:{onePirate.treasure}</Card.Title>
        <h1>peg leg:</h1>

        {onePirate.peg ? (
  <>
    <p>true</p>
    <button onClick={() => setOnePirate({ ...onePirate, peg: false })}>false</button>
  </>
) : (
  <>

    <p>false</p>
    <button onClick={() => setOnePirate({ ...onePirate, peg: true })}>true</button>
  </>
)}
 {onePirate.eye ? (
  <>
    <h1>Eye Patch:</h1>

    <p>true</p>
    <button onClick={() => setOnePirate({ ...onePirate, eye: false })}>false</button>
  </>
) : (
  <>
    <p>false</p>
    <button onClick={() => setOnePirate({ ...onePirate, eye: true })}>true</button>
  </>
)}
    <h1>Hook Hand:</h1>

 {onePirate.hook ? (
  <>

    <p>true</p>
    <button onClick={() => setOnePirate({ ...onePirate, hook: false })}>false</button>
  </>
) : (
  <>
    <p>false</p>
    <button onClick={() => setOnePirate({ ...onePirate, hook: true })}>true</button>
  </>
)}

      </Card.Body>
    </Card>




                  
                </div> : null}
        </div>
    )
}
