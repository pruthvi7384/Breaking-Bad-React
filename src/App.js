import React,{useState,useEffect} from 'react';
import ActoreGrid from './components/ActoreGrid';
import Footer from './components/Footer';
import Home from './components/Home';
import Search from './components/Search';
import './components/style.css';
function App() {
  const [result,setresult]=useState([]);
  const [isloading,setloading] = useState(true);
  const [error,seterror]=useState(null);
  const [search,setsearch] = useState('');
  useEffect(()=>{
      fetch(`https://www.breakingbadapi.com/api/characters?name=${search}`)
      .then(response=>response.json())
      .then(results=>setresult(results))
      .catch(err=>seterror(err.message))
      setloading(false)
  },[search]);
  const searchIn = (event)=>{
      setsearch(event);
  }
  console.log(result);
  return (
    <div className="container">
      <Home/>
      <Search inputSearch={searchIn}/>
      <ActoreGrid data={result} isloading={isloading} error={error} />
      <Footer/>
    </div>
  );
}

export default App;
