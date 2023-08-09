import React from 'react';
import './Form.css';

const Form = ({ onSubmit }) => {
  const [content, setContent] = React.useState('');
  const inputRef = React.useRef(null);

  const handleContentChange = (e) => {
    setContent(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    if (content === '') {
      e.preventDefault();
      return;
    }
    e.preventDefault();
    onSubmit(content);
    setContent('');
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={content}
        onChange={handleContentChange}
        ref={inputRef}
      />
      <button>追加</button>
    </form>
  );
};

export default Form;
