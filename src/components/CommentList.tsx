import React from 'react';

interface Comment {
  author: string;
  text: string;
  timestamp: string;
}

interface CommentListProps {
  comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <ul>
      {comments.map((comment, index) => (
        <li key={index}>
          <strong>{comment.author}</strong>: {comment.text} <em>({comment.timestamp})</em>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
