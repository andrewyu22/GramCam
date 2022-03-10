import React from "react";
function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div class="container">
        {/* Logo */}
        <a class="navbar-brand d-none d-md-none d-lg-block" href="#">
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="instagram"
          />
        </a>
        <a class="navbar-brand d-lg-none" href="#">
          <img
            src="https://img.icons8.com/office/40/000000/instagram-new.png"
            alt="instagram-logo"
          />
        </a>
        {/* Search */}
        <form class="d-flex input-group w-auto">
          <span class="input-group-text border-0" id="search-addon">
            <i class="fas fa-search"></i>
          </span>
          <input
            type="search"
            class="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
        </form>
        {/* collapse */}
        <div className="d-flex flex-row">
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#collapseItem"
            aria-controls="navbarLeftAlignExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <ul class="navbar-nav">
            <div class="collapse navbar-collapse" id="collapseItem">
              <li class="nav-item me-3 me-lg-1 active">
                <a class="nav-link" href="#">
                  <span>
                    <i class="fas fa-home fa-lg"></i>
                  </span>
                </a>
              </li>
              <li class="nav-item me-3 me-lg-1">
                <a class="nav-link" href="#">
                  <span>
                    <i class="far fa-plus-square fa-lg"></i>
                  </span>
                </a>
              </li>
              <li class="nav-item me-3 me-lg-1">
                <a class="nav-link" href="#">
                  <span>
                    <i class="far fa-heart fa-lg"></i>
                  </span>
                </a>
              </li>
            </div>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle d-flex align-items-center"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                  class="rounded-circle"
                  height="22"
                  alt="Portrait of a Woman"
                  loading="lazy"
                />
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a class="dropdown-item" href="#">
                    My profile
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
