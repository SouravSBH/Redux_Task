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
    NavLink
} from 'reactstrap';
import React, { useState } from 'react'

export default function AppNavBar() {
    const [ isOpen, setIsOpen ] = useState(true);

    const handleToggle = () => setIsOpen(!isOpen);

    return (
        <div><Navbar color="dark" dark expand="sm" className="mb-5">
            <Container>
                <NavbarBrand href="/">ShoppingList</NavbarBrand>
                <NavbarToggler onClick={handleToggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem><NavLink>aa</NavLink></NavItem>
                        <NavItem><NavLink>aa</NavLink></NavItem>
                        <NavItem><NavLink>aa</NavLink></NavItem>
                        <NavItem><NavLink>aa</NavLink></NavItem>


                    </Nav>
                </Collapse>
            </Container>
        </Navbar></div>
    )
}
