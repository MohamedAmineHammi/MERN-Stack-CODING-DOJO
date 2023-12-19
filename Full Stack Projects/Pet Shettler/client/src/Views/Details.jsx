import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import axios from "axios"
import Card from 'react-bootstrap/Card';
import './Details.css';
import Button from 'react-bootstrap/Button';



export const Details = () => {

    const [onepet, setOnepet] = useState({})
   
    const [refreshState, SetRefreshState] = useState(false);
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
      };


    const refresh = () => {
        SetRefreshState(!refreshState)
    }
    const navigate = useNavigate()


    const { pet_id } = useParams()
    const deleteHandler = (id) => {
    axios.delete(`http://localhost:5000/api/pet/${id}`)
      .then(res => {
        navigate("/")
      })
      .catch(err => {
        console.log(err);
      });
  };


    useEffect(() => {
        axios.get(`http://localhost:5000/api/pet/${pet_id}`)
            .then(res => {
                console.log(res.data)
                setOnepet(res.data.Onepet)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <div>
                        <div className='add'>   <Link className='add' to={"/"} type="submit"> back to home </Link> </div>  


            {(onepet) ?
                <div>
                    <h1>DEtails about : {onepet.name}</h1>
          <Card className='Caa' style={{ width: '18rem' }}>
<Card.Body>
  <Card.Title><h2>type:</h2></Card.Title>
  <Card.Subtitle className="mb-2 text-muted">{onepet.type} </Card.Subtitle>
  <Card.Title><h2>Description:</h2></Card.Title>
  <Card.Subtitle className="mb-2 text-muted"> {onepet.description}</Card.Subtitle>
  <Card.Title><h2>skills:</h2></Card.Title>
  <Card.Subtitle className="mb-2 text-muted"> {onepet.skill1}</Card.Subtitle>
  <Card.Subtitle className="mb-2 text-muted"> {onepet.skill2}</Card.Subtitle>
  <Card.Subtitle className="mb-2 text-muted"> {onepet.skill3}</Card.Subtitle>

  
  <Card.Link href="#">
  <Button onClick={(e) => deleteHandler(onepet._id)}>Adobt {onepet.name}</Button>

</Card.Link> 
{count === 0 ? (
        <Card.Link href="#">
          
          <Button variant="primary" onClick={increment}>like {onepet.name}</Button>
        </Card.Link>
      ) : null}
      <h5>{count} like(s)</h5>
</Card.Body>
</Card>
                    
                </div> : null}
        </div>
    )
}
