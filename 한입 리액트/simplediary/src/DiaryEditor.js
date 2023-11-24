import { useState } from "react";

const DiaryEditor = () => {
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const hadleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    alert("저장 성공");
  };
  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <input name="author" value={state.author} onChange={hadleChangeState} />
      <div>
        <textarea
          name="content"
          value={state.content}
          onChange={hadleChangeState}
        />
      </div>
      <div>
        오늘의 감정 점수 :
        <select
          name="emotion"
          value={state.emotion}
          onChange={hadleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};
export default DiaryEditor;
