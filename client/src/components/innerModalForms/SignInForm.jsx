import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import style from "./Sign.module.css"
import { signin } from "../../feature/user/userSlice";
import { hideAction, showSignUpAction } from '../../feature/modal/modalSlice';


export default function SignInForm() {

    const user = useSelector(state => state.user)

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("")

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Sign In")
        dispatch(signin({ email, password }))

    }
    return (
        <div>
            <h1>Sign In</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                {/* <input onChange={(e) => { setName(e.target.value) }} type="text" required placeholder='Name' /> */}
                <input onChange={(e) => { setEmail(e.target.value) }} type="email" required placeholder='Email' />
                <input onChange={(e) => { setPassword(e.target.value) }} type="password" required placeholder='Password' />

                {user.error && <h2 className={style.error} >{user.error}</h2>}

                <p>Don't have an account?<span
                    onClick={() => {
                        console.log("clicked")
                        dispatch(hideAction())
                        setTimeout(() => {
                            dispatch(showSignUpAction())
                        }, 100);
                    }}
                >Sign Up</span></p>
                <Button style={{ display: "block", padding: ".5rem 2rem", margin: ".5rem auto" }} type="submit" color="primary" >
                    {user.loading ? <h2>Loading</h2> : <h2>Sign In</h2>}
                </Button>

            </form>

        </div >
    )
}
