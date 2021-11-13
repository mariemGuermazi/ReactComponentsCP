import {Navbar, Container, Tabs, Tab} from 'react-bootstrap';
import './App.css';
import ProfilePhoto from './components/ProfilePhoto';
import FullName from './components/FullName';
import Address from './components/Address'

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand>
        React Components CP
      </Navbar.Brand>
    </Container>
  </Navbar>
  <Tabs
  defaultActiveKey="home"
  transition={false}
  id="noanim-tab-example"
  className="mb-3"
>
  <Tab eventKey="photo" title="Photo">
  <ProfilePhoto />
  </Tab>
  <Tab eventKey="fullname" title="FullName">
  <FullName />
  </Tab>
  <Tab eventKey="address" title="Address">
  <Address />
  </Tab>
</Tabs>
  </div>
  );
}

export default App;
