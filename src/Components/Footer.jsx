import React from "react";


const Footer = () => {
    return(
        <div>
            <footer className="text-black py-5 bg-white">
                <div className="container">
                    <nav className="row">
                        <div className="col-12 col-md-1 d-flex aling-items-center justify-content-center">
                            <img src="./Images/Logo2.png" className="mx-2" alt="Logo" width={150} />
                        </div>
                        <ul className="col-12 col-md-3 list-unstyled pt-4">
                            <li className="text-center">Comunicate con nosotras</li>
                            <li className="text-center">
                                <a href="tel:+3513451127">351-3451127</a>
                            </li>
                        </ul>
                        
                        <ul className="col-12 col-md-3 list-unstyled pt-4">
                            <li className="text-center">Envianos un correo</li>
                            <li className="text-center">
                                <a href="mailto:cirenne.tienda">cirenne.tienda@gmail.com</a>
                            </li>
                        </ul>

                        
                        <ul className="col-12 col-md-3 list-unstyled pt-4">
                            <li className="text-center">Nuestro local</li>
                            <li className="text-center">
                                <a href="https://goo.gl/maps/nENwFjWwytVy72Eg6">Av. Gral Paz 120 3L - Córdoba</a>
                            </li>
                        </ul>

                        <ul className="col-12 col-md-2 list-unstyled pt-4">
                            <li className="text-center">Nuestras redes</li>
                            <li className="text-center d-flex justify-content-center">
                                <a href="https://www.f  acebook.com/psicoteayudo"><i className=" m-2 bi bi-facebook"></i></a>
                                <a href="https://www.instagram.com/psicoteayudo/"><i className="m-2 bi bi-instagram"></i></a>
                            </li>
                        </ul>

                            
                    </nav>
                </div>
                
            </footer>  
        </div>
    )
}

export default Footer