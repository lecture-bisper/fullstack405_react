import Comment from "./Comment.jsx";

const commentList = [
  {seq: 1, name: '아이유', comment: '안녕하세요 아이유 입니다.'},
  {seq: 2, name: '유재석', comment: '국민 MC 유재석 입니다. 반갑습니다.'},
  {seq: 3, name: '유인나', comment: '안녕하세요 유인나 입니다.'},
  {seq: 4, name: '유병재', comment: '유병재 PD 입니다. 반갑습니다.'},
];

function CommentList() {
  return (
    <div className={'container mt-4'}>
      {/* {} 를 사용하여 자바스크립트 코드를 입력함 */}
      {
        // ES6의 map() 함수를 사용하여 배열에 저장된 내용을 모두 사용하고 반환값으로 새로운 배열을 생성
        commentList.map((item) => {
          // 반환값 부분에 Comment 컴포넌트를 반환
          return (
            // Comment 컴포넌트에 name, comment 속성을 지정하여 데이터를 전달
            // map() 을 사용하여 자식컴포넌트를 여러개 출력할 경우 key 속성을 반드시 지정해야 함
            // key 속성은 각각의 자식 컴포넌트를 식별하는 역할을 함
            // key 속성은 데이터 리스트 자체에서 데이터를 식별할 수 있는 데이터로 사용
            // 식별할 수 있는 데이터가 없을 경우 index 를 사용
            <Comment name={item.name} comment={item.comment} key={item.seq} />
          );
        })
      }
    </div>
  );
}

export default CommentList;











