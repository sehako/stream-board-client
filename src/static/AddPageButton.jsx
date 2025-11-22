import { Button, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function AddPageButton() {
  const navigate = useNavigate();

  const navigateWritePage = () => {
    navigate('/post/write');
  };

  return (
    <Row>
      <Col className="position-absolute bottom-0 end-0 ms-3 mt-3 mb-3 me-1 text-end">
        <Button
          variant="dark"
          className="align-items-center justify-content-center rounded-4 text-center bg-dark"
          onClick={navigateWritePage}
        >
          <span className="fs-1 fw-bold lh-1">+</span>
        </Button>
      </Col>
    </Row>
  );
}

export default AddPageButton;
