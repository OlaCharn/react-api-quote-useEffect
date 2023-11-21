import { useCallback, useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  // 1 approach
/*
  useEffect( ()=>{
    getQuote()
  }, [])

  const getQuote = async()=>{
    const responce = await fetch("https://api.quotable.io/random");
    const data = await responce.json();
    //console.log(data)
    setQuote(data.content)
    setAuthor(data.author)
  }
*/
  // 2 approach

  /*
  useEffect( ()=>{
    const getQuote = async()=>{
      const responce = await fetch("https://api.quotable.io/random");
      const data = await responce.json();
      setQuote(data.content);
      setAuthor(data.author);
    }
    getQuote()
  }, [])
*/

  // 3 approach
  const getQuote = useCallback(async()=>{
    const responce = await fetch("https://api.quotable.io/random");
    const data = await responce.json();
    setQuote(data.content);
    setAuthor(data.author);
  },[]);

  useEffect(()=>{
    getQuote()
  }, [getQuote] )


  return (
    <div className="App">
      <div className='Quote'>
        <h2> "{quote}" </h2>
        <p> <i> {author} </i> </p>
      </div>
      <div>
      <button onClick={getQuote} >GET YOUR QUOTE</button>
      </div>   
    </div>
  );
}


export default App;
