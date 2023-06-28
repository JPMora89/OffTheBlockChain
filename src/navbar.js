// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function NavBar() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home">Off the BlockChain</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Watchlist</Nav.Link>
//             <NavDropdown title="Knowledge" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Blockchains</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 DeFi
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               {/* <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item> */}
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import React from 'react';

// function NavBar() {
//   return (
//     <>
//       <Navbar bg="dark" variant="dark">
//         <Container>
//           <Navbar.Brand href="#home">Off The BlockChain</Navbar.Brand>
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#features">Watchlist</Nav.Link>
//             <Nav.Link href="#pricing">Knowledge</Nav.Link>
//           </Nav>
//         </Container>
//       </Navbar>

//       </>
//   );
// }

// export default NavBar;

import React from "react";
import { Link } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';


function NavBar({ currentUser, logout}) {
  const loginLinks = (
    <>
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
        <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
    </>);

  const userLinks = (
    <>
      <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
      <Nav.Link as={Link} to="/" onClick={logout}>Logout</Nav.Link>
    </>
  )

  return (
    <div>
    <Navbar expand="lg" variant="dark" bg="dark">
      <Container>
          <Navbar.Brand as={Link} to="/">Off The BlockChain</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to="/watchlist">Watchlist</Nav.Link>
              <Nav.Link as={Link} to="/knowledge">Knowledge</Nav.Link>
              {currentUser ? userLinks: loginLinks}
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>
  );
}

export default NavBar;