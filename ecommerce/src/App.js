import './App.css';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import { Navbar } from './components/navbar';
import { Shop } from './pages/shop/shop';
import {Cart} from './pages/cart/cart';
import { ShopContextProvider } from './context/shopcontext';
import { LoginForm } from './components/LoginForm';
import { Profile } from './pages/Profile';
import { Navigate } from 'react-router-dom';
import { Protectionroute } from './components/Protectionroute'; 


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to = '/login' />} />
            <Route path="/login" element={<LoginForm />} />
            {/* <Route path="/shop" element ={<Shop />} /> */}
              <Route path="/shop" element={ <Protectionroute>  <Shop /> </Protectionroute>} />
              <Route path="/cart" element={ <Protectionroute>  <Cart /> </Protectionroute>} />
              <Route path="/profile" element={ <Protectionroute>  <Profile /> </Protectionroute>} />
          </Routes>
        </Router>
      </ShopContextProvider>



    </div>
  );
}

export default App;
