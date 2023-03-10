import React from 'react'
import { useSelector } from 'react-redux'
import { Container } from 'reactstrap';


export default function Profile() {
    const user = useSelector(state => state.user);
    // console.log(Object.keys(user.user).length !== 0)
    const cardStyle = {
        // width: '300px',
        // height: '200px',
        borderRadius: '10px',
        marginBlock: "1rem",
        padding: '2rem',
        color: 'white',
        // Use a linear gradient with two colors and an angle
        background: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
        background: `radial-gradient(circle at 0% 125%,#ff58a8, #ff2c75, #ff0037)`,
        boxShadow: '5px 5px 10px #ff2c75aa'

    };
    return (

        <>
            {(!!user.user && Object.keys(user.user).length !== 0) && <Container><h1>Profile</h1>
                <div style={cardStyle}>
                    <h1>{user.user.name}</h1>
                    <p>ID: {user.user.id}</p>
                    <p>Email: {user.user.email}</p>
                </div>
            </Container>}
        </>
    )
}
