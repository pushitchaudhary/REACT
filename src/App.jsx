import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Home from './Pages/Home/Home'

function App() {

  return (
  <BrowserRouter>
  
  <Routes>

    <Route path='/' element={ <Home/> }/>
    <Route path='/contact'  element={ <Contact/>}/>
    <Route path='/about' element={ <About/> }  />

  </Routes>

  </BrowserRouter>
  )
}

export default App
