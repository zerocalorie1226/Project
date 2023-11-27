const DiaryItem = ({
  author,
  content,
  created_date,
  emotion,
  id,
  onRemove,
}) => {
  return (
    <div className="DiaryItem">
      <div className="info">
        <span></span>
          작성자 : {author} | 감정 : {emotion}{" "}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()} </span>
      </div>
      <div className="content">{content}</div>
      <button
        onClick={() => {
          if (window.confirm(`${id}번째 일기를 정말 삭제핫기겠습니까?`)) {
            onRemove(id);
          }
        }}
      >
        삭제하기
      </button>
    </div>
  );
};
export default DiaryItem;
