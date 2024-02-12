import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import divStyle from '../../Styles/NavbarStyle';
import InputGroup from 'react-bootstrap/InputGroup';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import img from './Logo.png'

function NavBar(){
    return (
        <div>
            <Navbar bg="white" variant="light" style={divStyle.navbar} className="mb-3">
                <Container>
                    <Link to="project">

                        <Navbar.Brand><img width="120" height="50" src={img}/></Navbar.Brand>
                    </Link>
                
                <Nav className="me-auto">
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-light" style={divStyle.searchButton}>Search</Button>
                </Form>
                </Nav>
                </Container>
            </Navbar>
       
            {/* <Navbar bg="white" variant="light" style={divStyle.navbar}>
                <Navbar.Brand href="#home">Lumba.ai</Navbar.Brand>
                <Container style={divStyle.search}>
                    
                    <InputGroup style={divStyle.searchBar} >
                        <Form.Control
                        placeholder="Search"
                        aria-label="search"
                        aria-describedby="basic-addon2"
                        size="sm"
                        /> 
                    
                        <Button variant="outline-light" id="button-addon2" style={divStyle.searchButton}>
                            Search
                        </Button>
                    </InputGroup>
                    

                </Container>
            </Navbar> */}
        </div>
    )
        
        
    
}

export default NavBar;