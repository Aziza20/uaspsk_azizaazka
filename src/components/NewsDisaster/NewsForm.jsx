// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNews } from '../../redux/actions/newsActions';

const NewsForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(addNews({ title, content }));
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
        className="border p-2"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        required
        className="border p-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2">Add News</button>
    </form>
  );
};

export default NewsForm;