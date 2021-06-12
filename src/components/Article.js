import React from 'react'

const Article = ({articles}) => {

    return (
        <div key={articles.id}>
            <div class="flex flex-column flex-row-ns">
                <div class="w-100 w-60-ns pr3-ns order-2 order-1-ns">
                    <h1 class="f3 athelas mt0 lh-title">{articles.title}</h1>
                    <p class="f5 f4-l lh-copy athelas">
                        {articles.body}
                    </p>
                </div>
                <div class="pl3-ns order-1 order-2-ns mb4 mb0-ns w-100 w-40-ns">
                    <img src="http://mrmrs.github.io/photos/cpu.jpg" class="db" alt={articles.id}>
                    </img>
                </div>
            </div>
        </div>

    )
}
export default Article