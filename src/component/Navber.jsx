import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'
import "./NavBar.css";
import { HomeTwoTone, UsergroupAddOutlined, UserDeleteOutlined } from '@ant-design/icons';
import { Tooltip } from "antd";



const Navber = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  
  
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">
          <> </>
          <i className="fas fa-code"></i>
        </NavLink>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {/* {localStorage.getItem('role') === '2'} */}
          <li className="nav-item">
            <NavLink
              to="/home"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              <HomeTwoTone />
            </NavLink>
            <NavLink
              to="/follow"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              <UsergroupAddOutlined />
            </NavLink>
          </li>
          <li className="nav-item"></li>
          <li className="nav-item">
            <NavLink
              to="/unfollow"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              <Tooltip placement="topLeft" title="Unfollow users">
                <UserDeleteOutlined />
              </Tooltip>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/profile"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Profie
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/createpost"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Create Post
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/"
              activeClassName="active"
              className="nav-links"
              onClick={logout}
            >
              Logout
            </NavLink>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
