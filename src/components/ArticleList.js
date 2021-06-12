import React from 'react'
import Article from '../components/Article'
const ArticleList = (props) =>{
    return(
        <div>
            {
                props.articles.map((e,i)=>{
                    console.log('sdklfjsl')
                })
            }
        </div>
    )
}
export default ArticleList;