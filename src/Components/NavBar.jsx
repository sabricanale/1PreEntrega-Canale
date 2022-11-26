import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    let logo = "Images/LogoSinFondo.png"
    return (
        <div className="row">
            <div className="col-md-6">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/"><img src={logo} alt="Cirenne tienda" width={100}/></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <a className="nav-link" href="/">Inicio</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="/productos">Productos</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="/contacto">Contacto</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="col-md-6 d-flex justify-content-end align-items-center">
                <CartWidget/>
            </div>
        </div>
    );
}

export default NavBar;