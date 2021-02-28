import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Item() {
  const [isLoading, setLoading] = useState(true);
  const [articles, setArticles] = useState();

  useEffect(() => {
    axios.get("https://reelspaper-api.vercel.app/theverge/tech").then(response => {
      setArticles(response.data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div className="loadingTitle">Loading latest news...</div>;
  }

  return (
    articles.map(function (article, index) {
      return (
        <div className="item" key={index}>
          <div className="container">
            <div className="row">
              <div className="col-12 articleTitle pb-2">{article.title}</div>
              <div className="col-12 articleSubtitle pb-3">{article.subTitle}</div>
              <div className="col-12 articleDate pb-3">{article.date} <br/> <a href={article.url} className="readFull" target="_blank" rel="noopener noreferrer">Read full article on The Verge</a></div>
              <div className="col-12 bg-light text-dark p-3 articleBody">{article.content}</div>
            </div>
          </div>
        </div>
      )
    })
  );
}

export default Item;