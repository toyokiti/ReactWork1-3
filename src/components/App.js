import React, {useState} from 'react';
import '../App.css';
import AddTaskForm from './AddTaskForm';
import RadioButtonView from './RadioButtonView';
import MakeTaskPage from './MakeTaskPage';

const App = () => {

  const [todoList, setTodoList] = useState([]); //todoListを管理するState
  const [todoText, setTodoText] = useState(''); // 新規タスクの追加のテキストフォームに入寮される文字を管理するState

  // 追加ボタンをクリックされると実行される関数
  const onClickAdd = () => {
    if (todoText === '') return; 
    const todo = todoText;
    setTodoList([...todoList, todo]);
    setTodoText('');
  }

  return (
    <div className="App">
      <h1>TODOリスト</h1>

      <RadioButtonView />
      <MakeTaskPage
        todoList={todoList}
        onClickAdd={onClickAdd}
        setTodoList = {setTodoList}
      />  
        
      <AddTaskForm
        todoText={todoText} 
        setTodoText={setTodoText}
        onClickAdd={onClickAdd}
      />

    </div>
  ); //return
}

export default App;