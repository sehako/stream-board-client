import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';

function BoardWrite() {
  return (
    <Form className="mt-4">
      <Col>
        <FloatingLabel label="Title" className="mb-3">
          <Form.Control type="text" placeholder="제목을 입력하세요." />
        </FloatingLabel>
        <FloatingLabel label="Content" className="mb-3">
          <Form.Control
            as="textarea"
            placeholder="내용을 입력하세요."
            style={{ height: '50vh' }}
          />
        </FloatingLabel>
        <Row>
          <Col className="text-end">
            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Col>
    </Form>
  );
}

export default BoardWrite;
