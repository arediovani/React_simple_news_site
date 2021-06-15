import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import 'tachyons'
import ArticleList from '../components/ArticleList'
import Article from '../components/Article'
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
      .then(response => response.json())
      .then(articles => { setArticles(articles) })
  }, [])

  return (
    <div>
      <Link to="/home">
        <Header />
      </Link>
      <ArticleList articles={articles} />
      <Switch>
        <Route path="/:id" children={<Article />} />
      </Switch>
    </div>
  );
}

export default App;
