import React from 'react'
import Home from './Home';
import Add from './Add';
import Sidebar from './Sidebar.js'
import Update from './Update';
import Paste from './Paste';
import Banner from './Banner';
import Delete from './Delete';
import { BrowserRouter, BrowserRouter as Router,Route,Routes } from 'react-router-dom'

const App = () => {


  return (
  <Router>

  <Routes>
    <Route path='/del' element={<Delete/>}/>
    <Route path='/add' element={<Add/>}/>
    <Route path='/update' element={<Update/>}/>
    <Route path='/paste' element={<Paste/>}/>
    <Route path='/banner' element={<Banner/>}/>
    <Route path='/' element={<Home/>}/>
  </Routes>
 
</Router>

  )
}

export default App