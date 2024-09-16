import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage'
import MainLayout from './layout/MainLayout'
import { Provider } from 'react-redux';
import store, {persistor} from './redux/store/store';
import ProductPage from './pages/ProductPage';
import { PersistGate } from 'redux-persist/integration/react';
import CartPage from './pages/CartPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
        <MainLayout>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/women' element={<HomePage category={'Women'}/> }/>
            <Route path='/men' element={<HomePage category={'Men'}/> }/>
            <Route path='/product' element={<ProductPage/>} />
            <Route path='/cart' element={<CartPage/>} />
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
          </Routes>
        </MainLayout>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
