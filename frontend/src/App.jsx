import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage'
import MainLayout from './layout/MainLayout'
import { Provider } from 'react-redux';
import store from './redux/store/store';
import ProductPage from './pages/ProductPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <Router>
      <MainLayout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/women' element={<HomePage category={'Women'}/> }/>
          <Route path='/product' element={<ProductPage/>} />
        </Routes>
      </MainLayout>
      </Router>
    </Provider>
  )
}

export default App
