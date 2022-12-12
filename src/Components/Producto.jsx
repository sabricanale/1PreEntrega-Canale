import React from "react";

const productos = [
    {id: 1, name:"Remera Oriana negra", price: 3650, imagen: "Images/RemeraNegra.jpeg"},
    {id: 2, name:"Remera Oriana salmón", price: 3650, imagen: "Images/RemeraNaranja.jpeg"},
    {id: 3, name:"Musculosa wanda azul", price: 1650, imagen: "Images/RemeraAzul.jpeg"},
    {id: 4, name:"Mono Julieta rojo", price: 3990, imagen: "Images/MonoRojo.jpeg"},
    {id: 5, name:"Vestido Catalina nude", price: 7000, imagen: "Images/VestidoNaranja.jpeg"},
    {id: 5, name:"Vestido Melisa rojo", price: 4500, imagen: "Images/VestidoRojo.jpeg"}
]

const Producto = () => {
    return(
        <div className="row">
            <h1 className="text-center pb-3">Todos los productos</h1>
            {productos.map(item =>
            <div className="col-md-3 mb-3" hey={item.id}>
                <div className="card text-center">
                    <img src={item.imagen} className="img-fluid" alt={item.name}/>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text"><b>${item.price}</b></p>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
}

export default Producto;