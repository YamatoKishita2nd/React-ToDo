import React from 'react';
import './TodoList.css';

const TodoList = ({ todo, onDeleteClick, onCheckboxChange }) => {
  const handleDeleteClick = () => {
    onDeleteClick(todo.id);
  };
  
  const handleCheckboxChange = () => {
    onCheckboxChange(todo.id);
  };

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={handleCheckboxChange}
        />
        <span>{todo.content}</span>
      </label>
      <button onClick={handleDeleteClick}>削除</button>
    </li>
  );
};

export default TodoList;
