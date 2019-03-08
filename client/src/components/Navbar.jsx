import React, {PureComponent} from 'react'
import {Link} from "react-router-dom";

class Navbar extends PureComponent {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', () => {

            // Get all "navbar-burger" elements
            const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

            // Check if there are any navbar burgers
            if ($navbarBurgers.length > 0) {

                // Add a click event on each of them
                $navbarBurgers.forEach( el => {
                    el.addEventListener('click', () => {

                        // Get the target from the "data-target" attribute
                        const target = el.dataset.target;
                        const $target = document.getElementById(target);

                        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                        el.classList.toggle('is-active');
                        $target.classList.toggle('is-active');

                    });
                });
            }

        });
    }

    render() {
        return (
            <div>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <Link className={"navbar-item"} to="/">
                            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt={"RateUrGow Logo"}/>
                        </Link>

                        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                           data-target="navbarBasicExample" href="#">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-start">
                            <Link className={"navbar-item"} to="/">Home</Link>
                            {/*<Link className={"navbar-item"} to="/gows">Gows</Link>*/}
                            <Link className={"navbar-item"} to="/gow/add">Ajouter une Gow</Link>
                        </div>

                        <div className="navbar-end">
                            <Link className={"navbar-item"} to="/login/">Se connecter</Link>
                            <Link className={"navbar-item"} to="/register/">Creer un compte</Link>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}


export default Navbar