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
import ProfilePage from './pages/ProfilePage';
import CreateProductPage from './pages/CreateProductPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
        <MainLayout>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/women' element={<HomePage category={'66e2d33ada1ea24177058e10'}/> }/>
            <Route path='/men' element={<HomePage category={'66e2d59b8b9d809527fef9de'}/> }/>
            <Route path='/kids' element={<HomePage category={'66e2d5a18b9d809527fef9e0'}/> }/>
            <Route path='/product' element={<ProductPage/>} />
            <Route path='/cart' element={<CartPage/>} />
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/profile' element={<ProfilePage/>}></Route>
            <Route path='/create' element={<CreateProductPage/>}></Route>
          </Routes>
        </MainLayout>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
