import React from "react";
import { useParams, Link } from "react-router-dom";

const ThankYou = () =>{
    const {id} = useParams()
    return(
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="alert alert-secondary" role="alert">
                        <h1>¡Gracias por tu compra!</h1>
                        <p>Yu número de compra es: <b>{id}</b></p>
                    </div>
                    <Link to={"/"} className="btn">Ir a la tienda</Link>
                </div>
            </div>
        </div>
    )
}

export default ThankYou