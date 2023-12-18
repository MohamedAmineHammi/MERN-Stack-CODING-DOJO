import React, { useState } from 'react'
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'

export const Form = () => {

    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [description, setDescription] = useState("")
    const [skill1, setSkill1] = useState("")
    const [skill2, setSkill2] = useState("")
    const [skill3, setSkill3] = useState("")


    const [refreshState, SetRefreshState] = useState(false)

    const navigate = useNavigate()

    const refresh = () => {
        SetRefreshState(!refreshState)
    }



    const submitHandler = (e) => {
        e.preventDefault()
        alert('pet aded')
        navigate("/")

        // ----- Create An Object with the pet Info
        const newpet = {
            name: name,
            type: type,
            description: description,
            skill1:skill1,
            skill1:skill2,
            skill1:skill3

        }

        axios.post("http://localhost:5000/api/pet", newpet)
            .then(res => {
                console.log(res)
                refresh()
                setName("")
                setType("")
                setDescription("")
                setSkill1("")
                setSkill2("")
                setSkill3("")
            })
            .catch(err => {
                console.log(err)
            })


    }


    return (

        <div>
                   <div className='add'>   <Link className='add' to={"/"} type="submit"> back to home </Link> </div>  

            <h3>ADD NEW pet</h3>
            <fieldset>
               
                <form onSubmit={submitHandler}>
                    <label>name pet :</label><br />
                    <input onChange={e => { setName(e.target.value) }} value={name}  required /><br /><br />
                    <label>type pet :</label><br />
                    <input onChange={e => { setType(e.target.value) }} value={type}  required /><br /><br />
                    <label>Description :</label><br />
                    <input onChange={e => { setDescription(e.target.value) }} value={description}  required /><br /><br />
                    <label>skill 1:</label><br />

                    <input onChange={e => { setSkill1(e.target.value) }} value={skill1}   /><br /><br />
                    <label>skill 2 :</label><br />

                    <input onChange={e => { setSkill2(e.target.value) }} value={skill2} /><br /><br />
                    <label>skill 3 :</label><br />

                    <input onChange={e => { setSkill3(e.target.value) }} value={skill3}  /><br /><br />

                    <input type="submit" />
                </form>
            </fieldset>
        </div>
    )
}
