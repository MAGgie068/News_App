import React, { useContext, useState } from 'react';
import { NewsContext } from '../NewsContext';
import NewsArticle from './NewsArticle';

function News() {

    const {data} = useContext(NewsContext);

    const [visible, setVisible] = useState(5);

    const loadMore = () => {
        setVisible((prevValue) => prevValue + 2);
    };

    return (
        <div>
            <div>
                {data
                    ? data.slice(0, visible).map((news) => (
                        <NewsArticle data={news} key={news.url} />
                    ))
                    : 'API Locked'}
            </div>
            <button onClick={loadMore}>Load More</button>
        </div>
    );
}

export default News
