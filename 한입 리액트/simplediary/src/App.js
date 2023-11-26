import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

function App() {
  const dummyList = [
    {
      id: 1,
      author: "조성찬",
      content: "하이 1",
      emotion: 5,
      creted_date: new Date().getTime(),
    },
    {
      id: 2,
      author: "아무개",
      content: "하이 2",
      emotion: 3,
      creted_date: new Date().getTime(),
    },
    {
      id: 3,
      author: "홍길동",
      content: "하이 3",
      emotion: 1,
      created_date: new Date().getTime(),
    },
  ];

  return (
    <div className="App">
      <h2>일기장</h2>
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
