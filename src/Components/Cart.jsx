import React, { useContext } from "react";
import {CartContext} from "./Context/CartContext"
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, removeItem, clear, cartTotal, sumTotal} = useContext(CartContext)

    if(cartTotal() === 0){
        return(
            <div className="container py-5">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="alert alert-secondary" role="alert">
                            No se encontraron productos en el carrito!
                            </div>
                            <Link to={"/"} className="btn">Ver productos</Link>
                        </div>
                    </div>
            </div>
        )
    }
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12">
                    <table class="table">
                    <thead>
                        <tr>
                            <th scope="col" colSpan={5} className="text-end"><Link onClick={clear} className="btn" title="Vaciar carrito">Vaciar carrito</Link></th>
                        </tr>
                        <tr>
                            <th scope="col">&nbsp;</th>
                            <th scope="col">Producto</th>
                            <th scope="col" className="text-center">Cantidad</th>
                            <th scope="col" className="text-center">Precio</th>
                            <th scope="col">&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(item => (
                            <tr key={item.id}>
                                <td className="text-center align-middle"><img src={item.imagen} alt={item.nombre} width={32} /></td>
                                <td className="align-middle">{item.nombre}</td>
                                <td className="text-center align-middle">{item.quantity}</td>
                                <td className="text-center align-middle">${item.quantity * item.precio}</td>
                                <td className="text-center align-middle"><Link onClick={()=>{removeItem(item.id)}}title="Eliminar producto"><img src={"Images/Eliminar.svg"} alt={"Eliminar producto"} /></Link></td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={2}>&nbsp;</td>
                            <td className="text-center">Total</td>
                            <td className="text-center"><b>${sumTotal()}</b></td>
                            <td className="text-end"><Link to={"/checkout"} className="btn" title="Finalizar compra">Finalizar compra</Link></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart; 