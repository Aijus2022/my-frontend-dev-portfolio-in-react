import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">My Portfolio</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Projects
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <Link className="dropdown-item" to="/projects/project1">Project 1</Link>
                  <Link className="dropdown-item" to="/projects/project2">Project 2</Link>
                  <Link className="dropdown-item" to="/projects/project3">Project 3</Link>
                  <Link className="dropdown-item" to="/projects/project4">Project 4</Link>
                  <Link className="dropdown-item" to="/projects/project5">Project 5</Link>
                  <Link className="dropdown-item" to="/projects/project6">Project 6</Link>
                   {/* Add more dropdown items for other projects */}
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

