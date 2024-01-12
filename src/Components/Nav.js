import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Nav() {
  let count = useSelector(state => state.cart)
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          LOGO
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" style={{ justifyContent: "end" }} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contactUs">
                Contact Us
              </Link>
              {/* Use a unique path for the "Contact Us" link */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/addProduct">
               <b>Add to cart </b>( <span style={{ color: "red", fontWeight: "900" }}>{count.length}</span> )
              </Link>
              {/* Use a unique path for the "Contact Us" link */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
