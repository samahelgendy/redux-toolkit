import logo from './logo.svg';
import './App.css';
import AppNavbar from './Components/AppNavbar';
import { Route, Routes } from 'react-router-dom';
import Products from './Components/Products';
import Cart from './Components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div className="App">
      
     <AppNavbar />
     <Routes>
      <Route path='/' element={<Products />} />
      <Route path='cart' element={<Cart />} />
     </Routes>
      
    </div>
  );
}

export default App;
