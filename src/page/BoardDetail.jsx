import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { postApi } from '../api/postApi';

function BoardDetail() {
  const { no } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [boardInfo, setBoardInfo] = useState({
    no: '',
    title: '',
    content: '',
    createdAt: '',
  });

  useEffect(() => {
    postApi
      .getPostDetail(no)
      .then((response) => response.data)
      .then((response) => setBoardInfo(response.result));
  }, []);

  return (
    <>
      <Row className="mt-4 mb-2">
        <Col>
          <Row>
            <Col>
              <span className="fs-4 text-secondary">{boardInfo.title}</span>
            </Col>
          </Row>
          <Row>
            <Col>
              <span className="text-secondary text-opacity-50">
                {boardInfo.createdAt.split('T')[0]}
              </span>
            </Col>
            <Col
              xs={4}
              className="text-secondary text-opacity-50 pt-1 text-end"
              style={{ fontSize: '0.8em' }}
            >
              <span>수정&nbsp;&nbsp;</span>
              <span>삭제</span>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="border-top">
        <Col className="mt-3 fs-5 text-dark text-break">
          {boardInfo.content}
        </Col>
      </Row>
    </>
  );
}

export default BoardDetail;
