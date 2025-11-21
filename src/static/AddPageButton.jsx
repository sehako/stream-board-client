import { Button } from 'react-bootstrap';

function AddPageButton() {
  return (
    <Button
      variant="dark"
      // 핵심 클래스 설명:
      // 1. rounded-circle: 원형으로 깎기
      // 2. p-3: 상하좌우 패딩을 똑같은 크기(1rem)로 강제 통일 (기본 버튼은 좌우가 더 넓음)
      // 3. lh-1: 글자 줄간격을 1로 줄여서 위아래 불필요한 여백 제거
      // 4. d-flex justify-content-center align-items-center: 중앙 정렬 확실하게
      className="rounded-circle p-3 lh-1 d-flex justify-content-center align-items-center position-absolute bottom-0 end-0 m-3"
    >
      {/* fs-3: 폰트 크기로 버튼 전체 크기 조절 (숫자가 작을수록 커짐 1~6) */}
      {/* fw-bold: 플러스 기호를 굵게 */}
      <span className="fs-3 fw-bold">+</span>
    </Button>
  );
}

export default AddPageButton;
