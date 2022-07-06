import './App.css';
import {Navbar, NavDropdown, Nav, Container, Form, FormControl, Button} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">The CountDown</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Action-Adventure</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Adventure</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">Role-Playing Game</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Simulation</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Strategy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Sports</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Puzzle</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Idle</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Forums</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <NavDropdown title="Profile" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Edit Account</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
              </NavDropdown>
        </Container>
      </Navbar>
    </div>
  );
}


export default App;
