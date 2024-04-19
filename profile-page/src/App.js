import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Row from 'react-bootstrap/Row';
import ProfileCard from './Components/ProfileCard';
import Container from 'react-bootstrap/Container';

import Header from './Components/Header';

function App() {
  return (
    <>
      <Header />

      <Container>
        <Row className='justify-content-center'>
          <ProfileCard />
        </Row>
      </Container>
    </>
  );
}

export default App;
