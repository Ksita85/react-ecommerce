import NavbarComponent from './components/Navbar';
import { Container } from 'react-bootstrap';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './pages/Store';
import Cancel from './pages/Cancel';
import Success from './pages/Success';
import CartProvider from './CartContext';

function App() {
  return (
    <CartProvider>
      <NavbarComponent />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route index element={<Store />}/>
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel/>}/>
          </Routes>        
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
}

export default App;
