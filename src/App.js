import React,{useState, useEffect} from 'react'
import './App.css'
import Food from './comp/Food';
import Header from './comp/Header';
import Axios from 'axios';

function App() {
const [search,setSearch] = useState("");
const [recipes,setRecipes] =useState([]);

const APP_ID = "f08f0174";
const APP_KEY = "28a25b6e99e28dc52b63154e2857516f";

useEffect(() =>{
   getRecipes();
} ,[]);

const getRecipes = async () =>{
  const result = await Axios.get(
    `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
  );
  setRecipes(result.data.hits);
}

const onInputChange = (e)=>{
  setSearch(e.target.value)
  
};
const onSearch = () =>{  //button
  getRecipes();
  setSearch()
}
  return (
    <div className="App">
          <Header  search={search} onInputChange={onInputChange} onSearch={onSearch}/>
          <div className='container'>
            <Food recipes={recipes} />
          </div>
    </div>
  );
}
export default App;
