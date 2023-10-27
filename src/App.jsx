import {BrowserRouter, Routes, Route, Router} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>

    <Routes>

      <Route path='/' element={'This is home page'} />
      <Route path='/about' element={'this is about page'}/>
      <Route path='/contact' element={'this is contact page'}  />

    </Routes>
    
    </BrowserRouter>
  )
}

export default App
