import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddPageButton from '../static/AddPageButton'; // Import AddPageButton

function BoardList() {
  // eslint-disable-next-line no-unused-vars
  const [posts, setPost] = useState([
    { no: 1, title: '첫 번째 게시글', date: '2024-01-01' },
    { no: 2, title: '게시글', date: '2024-01-01' },
    { no: 3, title: '게시글', date: '2024-01-01' },
  ]);

  return (
    <>
      <Row>
        <Col className="p-3">
          {!posts.length && (
            <Row>
              <Col className="text-center position-absolute top-50 start-50 translate-middle">
                <span className="text-secondary">
                  게시글이 존재하지 않습니다.
                </span>
              </Col>
            </Row>
          )}
          {posts.map((post) => {
            return (
              <Link to={`/post/${post.no}`}>
                <Row key={post.no} className="mt-3">
                  <Col className="border ms-2 me-2">
                    <Row className="p-2">
                      <Col xs={8} className="text-secondary">
                        {post.title}
                      </Col>
                      <Col xs={4} className="text-center text-dark">
                        {post.date}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Link>
            );
          })}
        </Col>
      </Row>
      <AddPageButton />
    </>
  );
}

export default BoardList;
