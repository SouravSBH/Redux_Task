// import React, { useState } from 'react';
// import {
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     Container
// } from 'reactstrap';
// // import { connect } from 'react-redux';
// // import RegisterModal from './auth/RegisterModal';
// // import LoginModal from './auth/LoginModal';
// // import Logout from './auth/Logout';
// // import { IAppNavbar, IAuthReduxProps } from '../types/interfaces';

// const AppNavbar = (IAppNavbar) => {
//     const [ isOpen, setIsOpen ] = useState(false);

//     const handleToggle = () => setIsOpen(!isOpen);

//     const authLinks = (
//         <>
//             <NavItem>
//                 <span className="navbar-text mr-3">
//                     <strong>
//                         {auth && auth.user ? `Welcome ${auth.user.name}` : ''}
//                     </strong>
//                 </span>
//             </NavItem>
//             <NavItem>
//                 <Logout />
//             </NavItem>
//         </>
//     );

//     const guestLinks = (
//         <>
//             <NavItem>
//                 <RegisterModal />
//             </NavItem>
//             <NavItem>
//                 <LoginModal />
//             </NavItem>
//         </>
//     );

//     return (
//         <div>
//             <Navbar color="dark" dark expand="sm" className="mb-5">
//                 <Container>
//                     <NavbarBrand href="/">ShoppingList</NavbarBrand>
//                     <NavbarToggler onClick={handleToggle} />
//                     <Collapse isOpen={isOpen} navbar>
//                         <Nav className="ml-auto" navbar>
//                             {auth && auth.isAuthenticated ? authLinks : guestLinks}
//                         </Nav>
//                     </Collapse>
//                 </Container>
//             </Navbar>
//         </div>
//     );
// };

// const mapStateToProps = (IAuthReduxProps) => ({
//     auth: state.auth
// });

// export default connect(mapStateToProps, null)(AppNavbar);


import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container,
    NavLink,
    Button
} from 'reactstrap';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { showSignUpAction, showSignInAction } from "../feature/modal/modalSlice"
import { signOut } from '../feature/user/userSlice';
export default function AppNavBar() {
    const [ isOpen, setIsOpen ] = useState(true);

    const handleToggle = () => setIsOpen(!isOpen);


    const dispatch = useDispatch();


    return (
        <div><Navbar color="dark" dark expand="sm" className="mb-5">
            <Container>
                <NavbarBrand href="/">ShoppingList</NavbarBrand>
                <NavbarToggler onClick={handleToggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <Button className='m-1'
                            onClick={() => {
                                // console.log(showSignUpAction())
                                dispatch(showSignInAction())
                            }}

                            outline color='primary'>Sign In</Button>
                        <Button className='m-1'
                            onClick={() => {
                                console.log(showSignUpAction())
                                dispatch(showSignUpAction())
                            }}

                            outline color='primary'>Sign Up</Button>

                        <Button className='m-1'
                            onClick={() => {
                                console.log(signOut)
                                dispatch(signOut())
                            }}

                            outline color='primary'>Sign Out</Button>


                    </Nav>
                </Collapse>
            </Container>
        </Navbar></div>
    )
}
