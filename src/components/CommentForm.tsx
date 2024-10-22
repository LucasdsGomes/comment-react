import React, { useState } from 'react';

interface CommentFormProps {
  addComment: (comment: { author: string; text: string; timestamp: string }) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ addComment }) => {
  const [author, setAuthor] = useState<string>('');
  const [text, setText] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (author && text) {
      const newComment = {
        author,
        text,
        timestamp: new Date().toLocaleString(),
      };
      addComment(newComment);
      setAuthor('');
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Seu nome"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <textarea
        placeholder="Seu comentário"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button type="submit">Enviar Comentário</button>
    </form>
  );
}

export default CommentForm;
