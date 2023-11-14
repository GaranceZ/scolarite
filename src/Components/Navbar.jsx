import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarScolarite() {
    return (
      <>
        <Navbar sticky="top" bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Scolarité</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/etudiant">Etudiants</Nav.Link>
              <Nav.Link href="/ue">UE</Nav.Link>
              <Nav.Link href="/formateur">Formateurs</Nav.Link>
              <Nav.Link href="/suivre">Suivre</Nav.Link>
              <Nav.Link href="/proposer">Proposer</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    )
    };

export default NavbarScolarite;