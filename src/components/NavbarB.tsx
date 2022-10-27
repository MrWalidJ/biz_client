import { FunctionComponent } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getBiz } from "../services/usersService";

interface NavbarBProps {}

const NavbarB: FunctionComponent<NavbarBProps> = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/homein">
          <i className="fa-solid fa-address-card"></i> Biz
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/aboutin">
                  About
                </NavLink>
              </li>
              {getBiz() ? (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/add-card">
                      New Card
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/my-cards">
                      My cards
                    </NavLink>
                  </li>
                </>
              ) : null}

              <li className="nav-item">
                <NavLink className="nav-link" to="/allcards">
                  All Cards
                </NavLink>
              </li>
            </ul>

            <button
              className="btn btn-primary"
              type="submit"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarB;
