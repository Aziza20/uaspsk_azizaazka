/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

const NewsList = ({ news }) => {
  return (
    <div>
      <h2>News Articles</h2>
      {news.map((article) => (
        <div key={article.id} className="border p-4 mb-2">
          <h3 className="font-bold">{article.title}</h3>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsList;