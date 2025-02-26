import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Loading from './components/Loading'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movie from './components/Movie'
import Tvshows from './components/Tvshows'
import People from './components/People'
import About from './components/About'
import ContactUs from './components/ContactUs'

const App = () => {
  return (
    <div className='w-screen h-screen bg-[#1F1E24] flex '>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/trending' element={<Trending/>} />
          <Route path='/popular' element={<Popular/>} />
          <Route path='/movie' element={<Movie/>} />
          <Route path='/tv' element={<Tvshows/>} />
          <Route path='/people' element={<People/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contactus' element={<ContactUs/>} />
        </Routes>

    </div>
  )
}

export default App