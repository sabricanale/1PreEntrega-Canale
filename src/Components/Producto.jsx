import React from "react";

const Producto = () => {
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="text-center p-3">Todos los productos</h2>
                        <div className="row row-cols-1 row-cols-md-3 g-4 p-2">
                            <div className="col">
                                <div className="card h-100">
                                <img src="Images/RemeraNegra.jpeg" className="card-img-top" alt="Remera negra"/>
                                <div className="card-body">
                                    <h6 className="card-title text-center">Remera Oriana negra</h6>
                                    <h4 className="card-text text-center">$3650,00</h4>
                                    <div className="d-flex justify-content-around">
                                    <button type="button" class="btn btn-outline-secondary">Comprar</button>                                    
                                    </div>
                                    
                                </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                <img src="Images/RemeraNaranja.jpeg" className="card-img-top" alt="Remera naranja"/>
                                <div className="card-body">
                                <h6 className="card-title text-center">Remera Oriana salmón</h6>
                                    <h4 className="card-text text-center">$3650,00</h4>
                                    <div className="d-flex justify-content-around">
                                    <button type="button" class="btn btn-outline-secondary">Comprar</button>                                    
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                <img src="Images/RemeraAzul.jpeg" className="card-img-top" alt="Remera azul"/>
                                <div className="card-body">
                                <h6 className="card-title text-center">Musculosa wanda azul</h6>
                                    <h4 className="card-text text-center">$1650,00</h4>
                                    <div className="d-flex justify-content-around">
                                    <button type="button" class="btn btn-outline-secondary">Comprar</button>                                    
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                <img src="Images/MonoRojo.jpeg" className="card-img-top" alt="Mono rojo"/>
                                <div className="card-body">
                                <h6 className="card-title text-center">Mono Julieta rojo</h6>
                                    <h4 className="card-text text-center">$3990,00</h4>
                                    <div className="d-flex justify-content-around">
                                    <button type="button" class="btn btn-outline-secondary">Comprar</button>                                    
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                <img src="Images/VestidoNaranja.jpeg" className="card-img-top" alt="Vestido naranja"/>
                                <div className="card-body">
                                <h6 className="card-title text-center">Vestido Catalina nude</h6>
                                    <h4 className="card-text text-center">$7000,00</h4>
                                    <div className="d-flex justify-content-around">
                                    <button type="button" class="btn btn-outline-secondary">Comprar</button>                                    
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card h-100">
                                <img src="Images/VestidoRojo.jpeg" className="card-img-top" alt="Vestido rojo"/>
                                <div className="card-body">
                                <h6 className="card-title text-center">Vestido Melisa rojo</h6>
                                    <h4 className="card-text text-center">$4500,00</h4>
                                    <div className="d-flex justify-content-around">
                                    <button type="button" class="btn btn-outline-secondary">Comprar</button>                                    
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Producto;