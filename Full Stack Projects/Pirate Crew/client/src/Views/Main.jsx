import React, { useState } from 'react'
import { Dashboard } from '../components/Dashboard'
import { Forme } from '../components/Forme'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Main = () => {

    const [refreshState, SetRefreshState] = useState(false)


    const refresh = () => {
        SetRefreshState(!refreshState)
    }
    const [user, setUser] = useState(null);
    const notif = () => toast("logout successfully!");

    const navigate = useNavigate()
    const handleLogout = (e) => {
        axios.post("http://localhost:8000/api/logout", {}, { withCredentials: true })
            .then((res) => {
                setUser(res.data)
                console.log("response data: ", res.data);
                notif();
            })
            .catch(err => console.log(err))
        navigate("/");
    }

    return (
        <div>
             <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Pirate Crew</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
           <Link className='add' to={"/Form"} type="submit"> Add Pirate </Link> 
          </Navbar.Text>
          <Navbar.Text>
          <button onClick={handleLogout}>Logout</button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            

            <fieldset>
                <Dashboard refresh={refresh} refreshState={refreshState} />
            </fieldset>
            <ToastContainer />

        </div>
    )
}

export default Main