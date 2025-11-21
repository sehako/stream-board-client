import { Button, Col, Row } from 'react-bootstrap';

function AddPageButton() {
  return (
    <Row>
      <Col className="position-absolute bottom-0 end-0 ms-3 mt-3 mb-3 me-1 text-end">
        <Button variant="dark" className="rounded-4 text-center">
          <span className="fs-3 fw-bold">+</span>
        </Button>
      </Col>
    </Row>
  );
}

export default AddPageButton;
