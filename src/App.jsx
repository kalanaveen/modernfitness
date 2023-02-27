import React from 'react'
import { About } from './pages'
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './components/navbar/Navbar';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <About/>
    </BrowserRouter>
  )
}

export default App
