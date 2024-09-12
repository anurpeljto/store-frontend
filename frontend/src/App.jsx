import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage'
import MainLayout from './layout/MainLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <MainLayout>
      <Routes>
        <Route path='/' element={HomePage} />
        <Route path='/women' element={<HomePage category={'Test%20Category'}/> }/>
      </Routes>
    </MainLayout>
    </Router>
  )
}

export default App
