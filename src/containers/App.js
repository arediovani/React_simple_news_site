import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import 'tachyons'
import ArticleList from '../components/ArticleList'
function App() {

  const [articles, setArticles] = useState({})
   
  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(articles=>{setArticles(articles)})
    console.log(articles)
  },[])
   
  return (
    <div>
      <Header />
      {
        articles.length== 0? <ArticleList/> : <h1>No News</h1>
      }
    </div>
  );
}

export default App;
