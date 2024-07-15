/*
* Bootstrap Navbar
*/

import { Link } from 'react-router-dom';



export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ color: 'black', backgroundColor: '#c75b0e' }}>
          <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <div><img src="./public/images/Logo French Tacos.png" className="img-fluid rounded" style={{ width: '50%', height: 'auto' }} /></div>
              </a>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/Menu" className="nav-link active" aria-current="page">Menu</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Contact" className="nav-link">Contact</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/SignIn" className="nav-link">Sign in</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="Cart" className="nav-link">Panier</Link>
                  </li>
                </ul>
                
              </div>
          </div>
      </nav>
    </div>
  );
}

export default Navbar;