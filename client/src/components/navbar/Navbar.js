import React from 'react';
import Auth from "../../utils/auth"; 
import { Link } from "react-router-dom";

const NavbarTop = () => {

    function showNavbar() {
        if (Auth.loggedIn()) {
            return (
              <ul>
                <li>
                    <Link to="/orderHistory">
                        Order History
                    </Link>
                </li>
                <li>{
                    <a href="/" onclick={() => Auth.logout()}>
                    logout</a>
                }</li>
              </ul>

            );
        } else {
            return (
                <ul>
                    <li>
                        <Link to="/signup">
                            Signup
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            Login
                        </Link>
                    </li>
                </ul>
            )
        }
    }
  return (
    <header>
        <h1>
            <Link to="/">
                Home
            </Link>
        </h1>

        <nav>
            {showNavbar()}
        </nav>
    </header>
  )
}

export default NavbarTop;