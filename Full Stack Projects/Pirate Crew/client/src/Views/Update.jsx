import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from 'react-bootstrap/Form';
import './Update.css';





const Update = () => {
    // State variables
    const [name, setName] = useState("")
    const [treasure, setTreasure] = useState(0)
    const [imageurl, setImageurl] = useState("")
    const [piratecatch, setPiratecatch] = useState("")
    const [Crewposition, setCrewposition] = useState("")

    const [errors, setErrors] = useState([]);

    // Router navigation hook
    const navigate = useNavigate();

    // Toast notification function
    const notify = () => toast("Pirate updated successfully!") ;


    // Get the book ID from the URL parameter
    const { Pirate_id } = useParams();

    // Fetch the book's information from the API when the component mounts
    useEffect(() => {
        axios.get(`http://localhost:8000/api/Pirate/${Pirate_id}`)
            .then(res => {
                console.log(res.data.OnePirate);
                const { name,treasure,imageurl,piratecatch,Crewposition } = res.data.OnePirate;
                setName("")
                setTreasure(0)
                setImageurl("")
                setPiratecatch("")
                setCrewposition("")
              
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    // Function to handle book update
    const UpdateHandler = (e) => {
        e.preventDefault();
      
        const updatePirate = {
          name,
          treasure,
          imageurl,
          piratecatch,
          Crewposition 
        };
      
        // Validation
        const errors = [];
        if (name.length < 1) {
          errors.push("Title is required");
        }
        if (imageurl.length < 1) {
          errors.push("Author must be at least 3 characters long.");
        }
        if (piratecatch < 5) {
          errors.push("Pages must be at least 5  pages.");
        }
      
        if (errors.length > 0) {
          setErrors(errors);
          return;
        }
      
        axios.put(`http://localhost:8000/api/Pirate/${Pirate_id}`, updatePirate)
          .then(res => {
            notify();
            console.log(res);

            
             
          })
          .catch(err => {
            if (err.response && err.response.data && err.response.data.err && err.response.data.err.errors) {
              const errorRes = err.response.data.err.errors;
              const errArr = Object.values(errorRes).map(error => error.message);
              setErrors(errArr);
            } else {
              console.log(err);
              setErrors(["An error occurred. Please try again."]);
            }
           
          });
          navigate("/movies");
      };
      

    // Render the component
    return (
        <div>
           <h3>ADD NEW Pirate</h3>
            <fieldset>
                <form onSubmit={UpdateHandler}>
                    <label>Pirate name :</label><br />
                    <input onChange={e => { setName(e.target.value) }} value={name} /><br /><br />
                    <label>Imageurl :</label><br />
                    <input onChange={e => { setImageurl(e.target.value) }} value={imageurl} /><br /><br />
                    <label>of treasure chests  :</label><br />
                    <input onChange={e => { setTreasure(e.target.value) }} value={treasure} type="number" id="tentacles" name="tentacles"  min="0" /> <br /> <br />
                  
                    <label>Pirate catch phrese:</label><br /> <br />
                    <input onChange={e => { setPiratecatch(e.target.value) }} value={piratecatch} /><br /> <br />
                    setCrewposition("captain");
                    <input onChange={e => { setCrewposition(e.target.value) }} value={Crewposition} /><br /> <br />


                   



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
                        {errors.map((err, key) => {
                            return (
                                <p key={key} style={{ color: "red" }}>{err}</p>
                            );
                        })}
                    </div>
                </form>
            </fieldset>
            <ToastContainer />
        </div>
    );
};

export default Update;



        
