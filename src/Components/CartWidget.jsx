import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./Context/CartContext"

const CartWidget = () => {
    const {cartTotal} = useContext (CartContext)
    return cartTotal() ? <Link to ={"/Cart"} type="button" className="btn position-relative" title="Ir al carrito">
                <img src="/Images/Carrito.svg" alt="Carrito" width={28} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
            </Link> : "";
    
}

export default CartWidget