import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Loading from './components/Loading'
import Trending from './components/Trending'
import Popular from './components/Popular'

const App = () => {
  return (
    <div className='w-screen h-screen bg-[#1F1E24] flex '>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/trending' element={<Trending/>} />
          <Route path='/popular' element={<Popular/>} />
        </Routes>

    </div>
  )
}

export default App