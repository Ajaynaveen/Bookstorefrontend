import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateBook from './pages/CreateBook'
import ShowBook from './pages/ShowBook'
import DeleteBook from './pages/DeleteBook'
import EditBook from './pages/EditBook' 

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/createbook' element={<CreateBook />} />
      <Route path='/showbook/:id' element={<ShowBook />} />
      <Route path='/editbook/:id' element={<EditBook />} /> {/* Corrected path */}
      <Route path='/deletebook/:id' element={<DeleteBook />} />
    </Routes>
  )
}

export default App
