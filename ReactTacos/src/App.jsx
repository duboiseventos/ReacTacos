import './App.css';
import { Navbar } from './components/Navbar.jsx';
import { Footer } from './components/footer.jsx';
import { Home } from './components/home/Home.jsx';
import { Cart } from './components/cart/Cart.jsx';
import { Contact } from './components/contact/Contact.jsx';
import { TacoCustomizer } from './components/menu/TacoCustomizer.jsx';
import { SignIn } from './components/signIn/sign.jsx';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="contenu">  
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Menu' element={<TacoCustomizer />} />
              <Route path='/Contact' element={<Contact />} />
              <Route path='/SignIn' element={<SignIn />} />
              <Route path='/Cart' element={<Cart />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
  );
}

export default App;

