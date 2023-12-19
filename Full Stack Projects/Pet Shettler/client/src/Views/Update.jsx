import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from "axios"

const Update = () => {
    const [name, setName] = useState("")
    const [type, setType] = useState("")
    const [description, setDescription] = useState("")
    const [skill1, setSkill1] = useState("")
    const [skill2, setSkill2] = useState("")
    const [skill3, setSkill3] = useState("")

    const navigate = useNavigate()


    const { pet_id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:5000/api/pet/${pet_id}`)
            .then(res => {
                console.log(res.data.Onepet)
                const { name,type,description,skill1,skill2,skill3 } = res.data.Onepet

                setName(name)
                setType(type)
                setDescription(description)
                setSkill1(skill1)
                setSkill2(skill2)
                setSkill3(skill3)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    const UpdateHandler = (e) => {
        e.preventDefault()

        // ----- Create An Object with the Book Info

        const updatepet = {
            name: name,
            type: type,
            description: description,
            skill1:skill1,
            skill1:skill2,
            skill1:skill3
        }

        axios.put(`http://localhost:5000/api/pet/${pet_id}`, updatepet)
            .then(res => {
                console.log(res)
                alert('pet updated')
                navigate("/")
                

            })
            .catch(err => {
                console.log(err)
            })

    }


    return (

        <div>
            <h3>Update NEW pet</h3>
            <div className='add'>   <Link className='add' to={"/"} type="submit"> back to home </Link> </div>  

            <fieldset>
                Form ..
                <form onSubmit={UpdateHandler}>
                <label>name pet :</label><br />
                    <input onChange={e => { setName(e.target.value) }} value={name} /><br /><br />
                    <label>type pet :</label><br />
                    <input onChange={e => { setType(e.target.value) }} value={type} /><br /><br />
                    <label>Description :</label><br />
                    <input onChange={e => { setDescription(e.target.value) }} value={description} /><br /><br />
                    <label>skill 1:</label><br />

                    <input onChange={e => { setSkill1(e.target.value) }} value={skill1} /><br /><br />
                    <label>skill 2 :</label><br />

                    <input onChange={e => { setSkill2(e.target.value) }} value={skill2} /><br /><br />
                    <label>skill 3 :</label><br />

                    <input onChange={e => { setSkill3(e.target.value) }} value={skill3} /><br /><br />
                    <input type="submit" value="Update" />
                </form>
            </fieldset>
        </div>
    )
}

export default Update