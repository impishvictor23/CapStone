import './App.css';
import Home from './components/Home';
import Forums from './components/Forums';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import {Navbar, NavDropdown, Nav, Container, Form, FormControl, Button} from 'react-bootstrap';
import { useEffect, useState } from 'react';

function App() {
const [pages, setPages] = useState(0);
const [games, setGames] = useState([]);
const [filteredGames, setFilteredGames] = useState([]);

const home = () => {
  setPages(0);
}

const forums = () => {
  setPages(1);
}

const profile = () => {
  setPages(2);
}

const signUp = () => {
  setPages(3);
}

function Pages(){

  if(pages === 0){
    return <Home games={games} list = {filteredGames}></Home>
  }
  else if(pages === 1){
    return <Forums></Forums>
  }
  else if(pages === 2){
    return <Profile></Profile>
  }
  else if(pages === 3){
    return <SignUp></SignUp>
  }
}

const getData = () => {
  var url = "https://api.rawg.io/api/games?key=68b518954afe4f0f85f3f60b808aa197&dates=2019-09-01,2019-09-30&platforms=18,1,7";
  fetch(url)
  .then(r => r.json(0))
  .then(data => {
    setGames(data.results);
    setFilteredGames(data.results);
  }).catch(e => console.log(e));
}

useEffect(() => {
  getData();
}, [])

  return (
    <div className="App">
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">The CountDown</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => home()}>Home</Nav.Link>
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
              <Nav.Link onClick={() => forums()}>Forums</Nav.Link>
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
                <NavDropdown.Item onClick={() => profile()}>Login</NavDropdown.Item>
                <NavDropdown.Item onClick={() => signUp()}>Create Account</NavDropdown.Item>
              </NavDropdown>
        </Container>
      </Navbar>
      <div>
        {
          Pages()
        }
      </div>
    </div>
  );
}


export default App;
