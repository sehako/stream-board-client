import { useEffect, useState } from 'react';
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { postApi } from '../api/postApi';

function BoardEdit() {
  const navigate = useNavigate();
  const { no } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    postApi
      .getPostDetail(no)
      .then((response) => response.data)
      .then((response) => {
        const result = response.result;
        setTitle(result.title);
        setContent(result.content);
      });
  }, []);

  const editPost = (e) => {
    e.preventDefault();

    postApi.patchPost(no, title, content);
    navigate(`/post/${no}`, { replace: true });
  };

  return (
    <Form className="mt-4" onSubmit={editPost}>
      <Col>
        <FloatingLabel label="Title" className="mb-3">
          <Form.Control
            type="text"
            placeholder="제목을 입력하세요."
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </FloatingLabel>
        <FloatingLabel label="Content" className="mb-3">
          <Form.Control
            as="textarea"
            placeholder="내용을 입력하세요."
            style={{ height: '50vh' }}
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
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

export default BoardEdit;
