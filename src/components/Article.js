import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
const Article = ({ articles }) => {
    let { id } = useParams();
    return (
        <div>
            <article class="pv4 bt bb b--black-10 ph3 ph0-l">
            <Link key={articles.id.toString()} to={articles.id.toString()}>
                    <div class="flex flex-column flex-row-ns">
                        <div class="w-100 w-60-ns pr3-ns order-2 order-1-ns">
                            <h1 class="f3 athelas mt0 lh-title">{articles.title}</h1>
                            <p class="f5 f4-l lh-copy athelas">
                                {articles.body}
                                {id}
                            </p>
                        </div>
                        <div class="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
                            <img src={`https://picsum.photos/seed/picsum/200/300`} class="db" alt={articles.id}>
                            </img>
                        </div>
                    </div>
                </Link>
            </article>
        </div>

    )
}
export default Article