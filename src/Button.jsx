import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} style={{ padding: '10px 20px', fontSize: '16px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
      {children}
    </button>
  );
};

export default Button;
