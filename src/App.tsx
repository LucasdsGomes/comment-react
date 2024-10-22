import React, { useState, useEffect } from 'react';
import CommentForm from '../src/components/CommentForm';
import CommentList from '../src/components/CommentList';
import CommentCounter from '../src/components/CommentCounter';
import './App.css'; 

interface Comment {
  author: string;
  text: string;
  timestamp: string;
}

const App: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>(() => {
    const savedComments = localStorage.getItem('comments');
    return savedComments ? JSON.parse(savedComments) : [];
  });

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const addComment = (newComment: Comment) => {
    setComments([newComment, ...comments]);
  };

  return (
    <div className="App">
      <h1>Comentários</h1>
      <CommentForm addComment={addComment} />
      <CommentCounter count={comments.length} />
      <CommentList comments={comments} />
    </div>
  );
}

export default App;
