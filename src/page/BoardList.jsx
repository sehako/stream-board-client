import { useCallback, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { postApi } from '../api/postApi';
import AddPageButton from '../static/AddPageButton'; // Import AddPageButton

function BoardList() {
  const size = 20;

  const [cursor, setCursor] = useState(0);
  const [posts, setPost] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const loadPosts = useCallback(() => {
    if (isLoading || !hasMore) {
      return;
    }

    setIsLoading(true);

    postApi
      .getPostList(cursor, size)
      .then((response) => response.data)
      .then((response) => {
        const list = response.result;

        if (!list || list.length === 0) {
          setHasMore(false);
          setIsLoading(false);
          return;
        }

        if (list.length < size) {
          setHasMore(false);
        }

        const tempMax = list[list.length - 1].no;

        setCursor(tempMax);

        const convertedData = list.map((target) => {
          const createdAtDate = target.createdAt
            ? target.createdAt.split('T')[0]
            : '';
          return {
            ...target,
            createdAt: createdAtDate,
          };
        });

        // [수정된 부분] 중복 제거 로직 추가
        setPost((prevPosts) => {
          // 1. 기존 포스트들의 ID(no)를 Set으로 만듭니다 (검색 속도 최적화)
          const existingIds = new Set(prevPosts.map((p) => p.no));

          // 2. 새로 받아온 데이터 중, 기존에 없는 것만 필터링합니다.
          const uniqueNewPosts = convertedData.filter(
            (p) => !existingIds.has(p.no),
          );

          // 3. 기존 포스트 뒤에 새로운 유니크 포스트만 붙입니다.
          return [...prevPosts, ...uniqueNewPosts];
        });
      })
      .finally(() => setIsLoading(false));
  }, [cursor, hasMore, size, isLoading]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadPosts();
  }, []);

  useEffect(() => {
    const container = document.getElementById('scroll-container');

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;

      if (scrollTop + clientHeight >= scrollHeight - 10) {
        loadPosts();
      }
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, [loadPosts, isLoading]);

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
              <Link key={post.no} to={`/post/${post.no}`}>
                <Row className="mt-3">
                  <Col className="border ms-2 me-2">
                    <Row className="p-2">
                      <Col xs={8} className="text-secondary">
                        {post.title}
                      </Col>
                      <Col xs={4} className="text-center text-dark">
                        {post.createdAt}
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
