import React, { useState } from 'react'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


export const Forme = (props) => {

    const [name, setName] = useState("")
    const [treasure, setTreasure] = useState(0)
    const [imageurl, setImageurl] = useState("")
    const [piratecatch, setPiratecatch] = useState("")
    const [Crewposition, setCrewposition] = useState("")
    const navigate = useNavigate()



    const [errors, setErrors] = useState([])



    const { refresh } = props

    const notify = () => toast("PIrate added successfully!");
   
    const submitHandler = (e) => {
        e.preventDefault()
        notify()
      
   

        // ----- Create An Object with the Book Info
        const newPirate = {
            name : name,
            treasure : treasure,
            imageurl:imageurl,
            piratecatch :piratecatch,
            Crewposition :Crewposition
        }

        axios.post("http://localhost:8000/api/Pirate", newPirate)
            .then(res => {
                console.log(res)
                refresh();
                setName("");
                setTreasure(0);
                setImageurl("");
                setPiratecatch("");
                setCrewposition("");
                navigate("/movies");


                
            })

            .catch(err => {
                // console.log(err.response.data.err.errors.singer.message)
                // console.log(err.response.data.err.errors.singer.message)
                const errorRes = err.response.data.err.errors
                const errArr = []
                console.log(errorRes)
                for (const key of Object.keys(errorRes)) {
                    console.log(errorRes[key].message)
                    errArr.push(errorRes[key].message)
                }
                setErrors(errArr)
            })
    }


    return (

        <div>
            
             <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Add Pirate</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Link className='add' to={"/movies"} type="submit"> Crow board </Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
                       

           
            <fieldset>
                <form onSubmit={submitHandler}>
                    <label>Pirate name :</label><br />
                    <input onChange={e => { setName(e.target.value) }} value={name} /><br /><br />
                    <label>Imageurl :</label><br />
                    <input onChange={e => { setImageurl(e.target.value) }} value={imageurl} /><br /><br />
                    <label>of treasure chests  :</label><br />
                    <input onChange={e => { setTreasure(e.target.value) }} value={treasure} type="number" id="tentacles" name="tentacles"  min="0" /> <br /> <br />
                  
                    <label>Pirate catch phrese:</label><br /> <br />
                    <input onChange={e => { setPiratecatch(e.target.value) }} value={piratecatch} /><br /> <br />
                    <label>Crowposition</label><br /> <br />
                    <input onChange={e => { setCrewposition(e.target.value) }} value={Crewposition} /> <br /> <br />
                   



                 <div>
                 <label>Crew position:</label><br /><br />

<select onChange={e => {
  const selectedValue = e.target.value;
  if (selectedValue === "1") {
    setCrewposition("captain");
  } else if (selectedValue === "2") {
    setCrewposition("first mate");
  } else if (selectedValue === "3") {
    setCrewposition("quarter master");
  } else if (selectedValue === "4") {
    setCrewposition("boatswain");
  } else if (selectedValue === "5") {
    setCrewposition("powder monkey");
  }
}} defaultValue="1">
  <option value="1" selected>captain</option>
  <option value="2">first mate</option>
  <option value="3">quarter master</option>
  <option value="4">boatswain</option>
  <option value="5">powder monkey</option>
</select> <br /><br />


   
    
<>
  <Form.Check inline
    label="Peg Leg"
    name="group1"
    defaultChecked
  /> <br /><br />
  <Form.Check inline
    label="Eye Patch"
    name="group1"
    defaultChecked
  /> <br /><br />
  <Form.Check inline
    label="Hook Hand"
    name="group1"
    defaultChecked
  /> <br /><br />
</>


    
      
            
        
     

                 </div>




                    <input type="submit" />
                    <div>
                    {
                errors.map((err, key) => {
                    return (
                        <p key={key} style={{ color: "red" }}>{err}</p>
                    )
                })
            }
                    </div>
                 
                </form>
            </fieldset>
            <ToastContainer />
        </div>
    )
}
