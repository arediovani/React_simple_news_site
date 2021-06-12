import React from 'react'
import Article from '../components/Article'
const ArticleList = ({ articles }) => {
    if (articles.length > 1) {
        return (
            <article class="pv4 bt bb b--black-10 ph3 ph0-l">
                {
                    articles.map((e, i) => {
                        return <Article articles={e} />
                    })
                }
            </article>
        )
    } else {
        return (
            <div>
                <h1>No News sorry</h1>
            </div>
        )
    }

}

export default ArticleList;