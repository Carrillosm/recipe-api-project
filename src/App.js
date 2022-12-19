import { useEffect } from "react";
import React, { useState } from "react";
import './App.css';

function RandomRecipe() {
  const [recipe, setRecipe] = useState("[ ]");
  const [search, setSearch] = useState("");
  const [query, setQuery ] = useState(" ");
  <br>
    
  </br>
useEffect(() => {
  fetchRecipe();
}, [query])
  const fetchRecipe = async () => {
    const response = await fetch
    (`https://api.spoonacular.com/recipes/complexSearch/?apiKey=4935ea1b58c640cf875455d42d3a65f7&cuisine=italian&query=${search}`)
    const json = await response.json();
    var list = [];
    var results = json.results;
    console.log(json)
    results.map((results) => {
      list.push(
        <div className="t1">
          <div className="title">{results.title}</div>
        </div>
      )
    })
    setRecipe(list)
    console.log(recipe)
  }
  useEffect(() => {
    fetchRecipe();
  }, [search])

 
  const getSearch = e => {
    e.preventDeafult();
    setQuery(search);
    setSearch(" ");
  }
  return (
    <div className="App">
    <form className="search-form" onSubmit={getSearch} >
    <input className="search-bar" type="text" placeholder="Search..." onChange={(event) => {
        console.log(event.target.value)
        setSearch()
      } } />
      {recipe}
      </form>
    </div>
  );
}
export default RandomRecipe;