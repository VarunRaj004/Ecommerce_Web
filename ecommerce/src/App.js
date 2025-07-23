import './App.css';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import { Navbar } from './components/navbar';
import { Shop } from './pages/shop/shop';
import {Cart} from './pages/cart/cart';
import { ShopContextProvider } from './context/shopcontext';
import { LoginForm } from './components/LoginForm';
import { Profile } from './pages/Profile';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to = '/login' />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/shop" element ={<Shop />} />
            <Route path="/cart" element={<Cart />}/>
            <Route path = '/profile' element={<Profile />} />
          </Routes>
        </Router>
      </ShopContextProvider>



    </div>
  );
}

export default App;
