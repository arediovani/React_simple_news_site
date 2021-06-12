import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import 'tachyons'
import ArticleList from '../components/ArticleList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {

  const [articles, setArticles] = useState({})
   
  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(response=>response.json())
    .then(articles=>{setArticles(articles)})
  },[])
   
  return (
    <div>
      <Header />
      <ArticleList articles={articles}/>
    </div>
  );
}

export default App;
