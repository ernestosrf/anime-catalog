import React from "react";
import { ReactComponent as GithubIcon } from 'assets/img/github.svg';
import './styles.css'
function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>Anime Catalog</h1>
                    <a href="https://github.com/ernestosrf" target="_blank" rel="noreferrer">
                        <div className="dsmovie-contact-container">
                            <GithubIcon />
                            <p className="dsmovie-contact-link">/ernestosrf</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;