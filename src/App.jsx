import { Container } from 'react-bootstrap';
import BoardWrite from './page/BoardWrite';
import Nav from './static/Nav';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Nav></Nav>
      <Container
        className="position-relative mt-5"
        style={{ height: '100%', overflowY: 'auto' }}
      >
        {/* <BoardList></BoardList> */}
        <BoardWrite></BoardWrite>
      </Container>
    </div>
  );
}

export default App;
