import React from 'react'
import Resturant from './components/basics/Resturant'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Resturant />} />
        </Routes>
      </Router>
    </div>
    <Resturant />
    </>
  )
}

export default App