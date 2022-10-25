function ArticleList(props:any) {
    const articles = props.articles;
    const title = props.title;
    
     const deleteArticle = (id:Number) => {
         
        fetch('http://localhost:8000/articles/' + id , {
            method: 'DELETE'
        }).then(() => { window.location = window.location; } );
    }
    
    return ( 
    
        <div className="article-list">
            <h3> {title} </h3>
            {articles.map((article:any) => (
                <div key={article.id} className="article-preview">
                <h2> { article.title } </h2>
                <p className="article-preview-author" > Written by: { article.author } <br/><br/> </p>
                <p className="article-preview-body"> { article.body} </p>
                <button className="article-preview-delete" onClick={() => { deleteArticle(article.id) } }> Delete </button>
                </div>
            ))}
        </div>
        
    ) ;
}

export default ArticleList;
