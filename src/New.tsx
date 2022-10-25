import { useState, useEffect } from 'react';
import ArticleList from './ArticleList';
import CreateArticle from './CreateArticle';

function New() {
    
    const [articles, setArticles] = useState(null);
    const [isFetching,setIsFetching] = useState(true);
    
    useEffect(() => {
       fetch('http://localhost:8000/articles')
            .then(res =>{ 
                if (!res.ok) {
                    throw Error('Failed to fetch data.');
                }
                return res.json();
            })
            .then(data => {
                setArticles(data)
                setIsFetching(false);
            })
            .catch(err => { console.log(err.message) });
    }, []);
    
    const [title, setTitle] = useState('HomePage');
    
    return ( 
        <div className="home">
            { <CreateArticle/> }
        </div>
        
    ) ;
    
}

export default New;
