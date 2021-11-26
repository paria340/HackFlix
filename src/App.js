//NPM Modules
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom'

//Components
import Catalogue from './components/Catalogue'
import MovieDetail from './components/MovieIDetail'


const App = () => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios({
      url: 'https://api.themoviedb.org/3/discover/movie',
      params: {
        api_key: 'bfb23e9c017a2be83f91472023334cb6',
        language: 'en-US',
        sort_by: 'popularity.desc',
        include_adult: 'false',
        include_video: 'false',
        page: 1,
        primary_release_year: 1999,
      }
    }).then((response) => {
      setMovies(response.data.results)
    })
  }, [])

  return (
    <BrowserRouter>
      <div className="wrapper">
        <header>
          <Link to="/" style={{textDecoration:'none'}}>
            <h1>HackFlix</h1>
          </Link>
        </header>

        <Routes>

          <Route path="/" element={<Catalogue movies={movies} />} />
          <Route path="movie/:movieID" element={<MovieDetail />} />
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App
