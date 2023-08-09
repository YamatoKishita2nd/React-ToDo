import React from 'react';
import './Purge.css';

const Purge = ({ onClick }) => {
  const handlePurgeClick = () => {
    onClick();
  };

  return (
    <button onClick={handlePurgeClick}>選択した項目を削除</button>
  );
};

export default Purge;
