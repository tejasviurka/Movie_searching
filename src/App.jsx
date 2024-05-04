import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'
import MovieCard from './components/MovieCard'

const App = () => {
  const [allMovieData,setAllMovieData] = useState([]);
  const [searchMovie,setSearchMovie] = useState('');
  const [loading,setloading] = useState(false);

  const fetchMovieData = async () => {
  try {
      setloading(true);
      const res = await fetch(`https://omdbapi.com/?s=${searchMovie}&apikey=a1de9591`);
      const data = await res.json();
      setAllMovieData(data.Search);
      console.log(data.Search)
      setloading(false)
  } catch (error) {
      console.log(error)
      setloading(false)
  }
}

  return (
    <div>
      <Navbar/>
      <div className="bg">
      <Searchbar searchMovie={searchMovie} setSearchMovie={setSearchMovie} fetchMovieData={fetchMovieData}/>
      <MovieCard allMovieData={allMovieData} loading={loading}/>
      </div>
    </div>
  )
}

export default App