import React from "react";
import {Link} from "react-router-dom"

const Item = ({item}) => {

    return(
        <Link to={"/item/" + item.id} className="text-decoration-none text-secondary">
            <div>
                <div className="card border border-1">
                <img src={item.imagen} className="img-fluid" alt={item.nombre}/>
                    <div className="card-body text-center">
                        <h6 className="card-title">{item.nombre}</h6>
                        <p className="card-text"><b>${item.precio}</b></p>
                    </div>                 
                </div>
            </div>
        </Link>
        
        )

}

export default Item; 