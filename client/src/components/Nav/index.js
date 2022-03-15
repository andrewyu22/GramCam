/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import gramlogo from "../../Image/gramlogo.png";
import gramlogosml from "../../Image/gramlogosml.png";
import Auth from "../../utils/auth";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand d-none d-md-none d-lg-block" href="/">
          <img src={gramlogo} alt="instagram" />
        </a>
        <a className="navbar-brand d-lg-none" href="/">
          <img src={gramlogosml} alt="instagram-logo" />
        </a>
        {/* Search */}
        <form className="d-flex input-group w-auto">
          <span className="input-group-text border-0" id="search-addon">
            <i className="fas fa-search"></i>
          </span>
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
        </form>
        {/* collapse */}
        {Auth.loggedIn() ? (
          <div className="d-flex flex-row">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#collapseItem"
              aria-controls="navbarLeftAlignExample"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
            <ul className="navbar-nav">
              <div className="collapse navbar-collapse" id="collapseItem">
                <li className="nav-item me-3 me-lg-1 active">
                  <a className="nav-link" href="/">
                    <span>
                      <i className="fas fa-home fa-2x"></i>
                    </span>
                  </a>
                </li>
                <li className="nav-item me-3 me-lg-1">
                  <a
                    className="nav-link"
                    data-mdb-toggle="modal"
                    data-mdb-target="#addPostModal"
                    href="#!"
                  >
                    <span>
                      <i className="far fa-plus-square fa-2x"></i>
                    </span>
                  </a>
                </li>
                <li className="nav-item me-3 me-lg-1">
                  <a className="nav-link" href="#">
                    <span>
                      <i className="far fa-heart fa-2x"></i>
                    </span>
                  </a>
                </li>
              </div>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle d-flex align-items-center"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                    className="rounded-circle"
                    height="35"
                    alt="ProfilePicture"
                    loading="lazy"
                  />
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="/profile">
                      My profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" onClick={Auth.logout}>
                      Logout
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <button
              className="btn btn-primary"
              data-mdb-toggle="modal"
              data-mdb-target="#modalRegisterForm"
            >
              Sign Up
            </button>
            <button
              className="btn btn-primary"
              data-mdb-toggle="modal"
              data-mdb-target="#modalLoginForm"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
export default Nav;
