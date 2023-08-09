import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import './App.css';
import TodoList from './TodoList';
import Form from './Form';
import Purge from './Purge';

function App() {
  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    let savedTodos;
    if (localStorage.getItem('todos') === null) {
      savedTodos = [];
    } else {
      savedTodos = JSON.parse(localStorage.getItem('todos'));
    }
    setTodos(savedTodos);
  }, []);

  const updateTodos = (newTodos) => {
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const handlePurgeClick = () => {
    confirmAlert({
      message: '選択した項目を削除しますか？',
      buttons: [
        {
          label: 'キャンセル',
        },
        {
          label: 'OK',
          onClick: () => {
            const newTodos = todos.filter((todo) => {
              return todo.isChecked === false;
            });
            updateTodos(newTodos);
          },
        },
      ]
    });
  };

  const handleCheckboxChange = (id) => {
    const newTodos = todos.map((todo) => {
      return {
        id: todo.id,
        content: todo.content,
        isChecked: todo.id === id ? !todo.isChecked : todo.isChecked,
      };
    });
    updateTodos(newTodos);
  };

  const handleAddSubmit = (content) => {
    const newTodos = [...todos];
    newTodos.push({
      id: Date.now(),
      content: content,
      isChecked: false,
    });
    updateTodos(newTodos);
  };

  const handleDeleteClick = (id) => {
    confirmAlert({
      message: '削除しますか？',
      buttons: [
        {
          label: 'キャンセル',
        },
        {
          label: 'OK',
          onClick: () => {
            const newTodos = todos.filter((todo) => {
              return todo.id !== id;
            });
            updateTodos(newTodos);
          },
        },
      ]
    });
  };

  const todoLists = todos.map((todo) => {
    return (
      <TodoList
        key={todo.id}
        todo={todo}
        onDeleteClick={handleDeleteClick}
        onCheckboxChange={handleCheckboxChange}
      />
    );
  });

  return (
    <>
      <h1>
        ToDoリスト
        <Purge onClick={handlePurgeClick} />
      </h1>
      <ul>
        {todoLists}
      </ul>
      <Form
        onSubmit={handleAddSubmit}
      />
    </>
  );
}

export default App;
