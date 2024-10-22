import React from 'react';

interface CommentCounterProps {
  count: number;
}

const CommentCounter: React.FC<CommentCounterProps> = ({ count }) => {
  return <h2>Total de comentários: {count}</h2>;
}

export default CommentCounter;
