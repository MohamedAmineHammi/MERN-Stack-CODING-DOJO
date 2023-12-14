import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const MoviesHome = (props) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate()
    const handleLogout = (e) => {
        axios.post("http://localhost:8000/api/logout", {}, { withCredentials: true })
            .then((res) => {
                setUser(res.data)
                console.log("response data: ", res.data);
            })
            .catch(err => console.log(err))
        navigate("/");
    }
    return (
        <div>
            <h1>Home of Movies</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default MoviesHome