import React from 'react';

function NewsArticle({ data }) {
    return (
    <div>
        <header>
            <div className='header'>News App</div>
        </header>
        <div className='page'>
            <div className='inBlock'>
                <div>
                    <img src={data.urlToImage} alt='NewsImage' />
                </div>
                <div>
                    <h2 className="heading">{data.title}</h2>
                    <p className="authndate">{data.author} | {data.publishedAt} | {data.source}</p>
                </div>
            </div>
            <p>{data.description}</p>
            <p>{data.content}</p>
            <a href={data.url}>View Site</a>
        </div>
        <footer>
            <div className='footer'>-by MAGgie068</div>
        </footer>
    </div>
    );
}

export default NewsArticle;
