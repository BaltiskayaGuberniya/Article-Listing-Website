import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateArticle() {
    
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const navigate = useNavigate();
    
    const submitForm = (e:any) => {
        e.preventDefault();
        
        const article = { title, body, author };
        // use fetchhook 
        fetch('http://localhost:8000/articles', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(article)
        }).then(() => { navigate('/');  } );
    }
    
    return (
     <div className="createArticle">
     <h2>Add a New Article!</h2>
     <form onSubmit={submitForm}>
        <label> Article Title: </label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" required/>
        <label> Article Body: </label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} required> </textarea>
        <label> Author: </label>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} type="text" required/>
        <button> Add Entry</button>
     </form>
     </div>
    );
    
}

export default CreateArticle;
