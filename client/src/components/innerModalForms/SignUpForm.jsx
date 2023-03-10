import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { signup } from "../../feature/user/userSlice";
import style from "./Sign.module.css"
export default function SignUpForm() {

    const user = useSelector(state => state.user)

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("")

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Sign Up")
        dispatch(signup({ name, email, password }))

    }
    return (
        <div>
            <h1>Sign Up</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => { setName(e.target.value) }} type="text" required placeholder='Name' />
                <input onChange={(e) => { setEmail(e.target.value) }} type="email" required placeholder='Email' />
                <input onChange={(e) => { setPassword(e.target.value) }} type="password" required placeholder='Password' />
                {user.error && <h2 className={style.error} >{user.error}</h2>}
                <Button style={{ display: "block", padding: ".5rem 2rem", margin: ".5rem auto" }} type="submit" color="primary" >
                    {user.loading ? <h2>Loading</h2> : <h2>Sign Up</h2>}
                </Button>
            </form>

        </div >
    )
}
