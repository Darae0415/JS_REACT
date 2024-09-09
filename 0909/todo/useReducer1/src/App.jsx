import Header from "./Components/Header";
import "./App.css";
import Editor from "./components/Editor";
import List from "./components/List";
import { useState } from "react";
import { useRef } from "react";
import Exam from "./components/Exam";

const mockData = [
  {
    id : 0,
    isDone : false,
    content : "React 공부하기",
    date :new Date().getTime(),
  },
  {
    id : 1,
    isDone : false,
    content : "빨래하기",
    date :new Date().getTime(),
  },
  {
    id : 2,
    isDone : false,
    content : "노래연습하기",
    date :new Date().getTime(),
  },
];

function App(){
  const [todos, setTodos] = useState(mockData); //useState : 수정 추가
  const idRef = useRef(3); //초기값을 다시 줄 때
  const onCreate = (content) =>{
    const newTodo = { //객체형태
      id:idRef.current++,
      isDone : false,
      content : content,
      date : new Date().getTime()
    };
    setTodos([newTodo,...todos]);
    //새로할일을 기존에 할일밑에 추가
  }
  const onUpdate = (targetId)=>{
    setTodos(
      todos.map((todo)=>
        todo.id === targetId ? {...todo, isDone : !todo.isDone} :todo
      )
    );
  }
  const onDelete = (targetId)=>{
    setTodos(todos.filter((todo) => todo.id !== targetId));
  }

  return(
    <div className="App">
     {/* <Header/>
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>*/}
      <Exam/>
    </div>
  );
  
}

export default App;