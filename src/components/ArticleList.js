import React from 'react'
import Article from '../components/Article'
const ArticleList = ({ articles }) => {
    if (articles.length > 1) {
        return (
            <div>
                {
                    articles.map((e, i) => {
                        return <Article articles={e} />
                    })
                }
            </div>
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