import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom'; // 1. Routes 추가
import BoardDetail from './page/BoardDetail';
import BoardList from './page/BoardList';
import BoardWrite from './page/BoardWrite';
import Nav from './static/Nav';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Nav />
      <Container
        className="position-relative mt-5"
        style={{ flex: 1, overflowY: 'auto' }}
      >
        <Routes>
          <Route path="/" element={<BoardList />} />
          <Route path="/post/:no" element={<BoardDetail />} />
          <Route path="/post/write" element={<BoardWrite />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
