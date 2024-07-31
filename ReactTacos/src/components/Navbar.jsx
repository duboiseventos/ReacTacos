/*
* Bootstrap Navbar
*/

import { Link } from 'react-router-dom';
import logo from '/public/images/Logo French Tacos.png';




export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{ color: 'black', backgroundColor: '#c75b0e' }}>
          <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <Link to="/" ><img src={logo} className="img-fluid rounded" style={{ width: '70%', height: 'auto' }} /></Link>
              </a>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                  <li className="nav-item">
                    <Link to="/Menu" className="nav-link active" aria-current="page">Menu</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Contact" className="nav-link active" aria-current="page">Contact</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/SignIn" className="nav-link active" aria-current="page">Sign in</Link>
                  </li>
                </ul>
                <form className="d-flex" role="log" >
                  <Link to="Cart" className="nav-link active" aria-current="page"></Link>
                  <button className="btnLog rounded" type="button" style={{ color: '#c75b0e', backgroundColor: 'black' }}>
                    Se connecter
                  </button>
                </form>

              </div>
          </div>
      </nav>
    </div>
  );
}

export default Navbar;