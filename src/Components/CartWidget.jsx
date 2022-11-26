import React from "react";

const CartWidget = () => {
    return(
        <div>
            <button type="button" className="btn position-relative">
                <img src="Images/Carrito.svg" alt="Carrito" width={28} />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
            </button>
        </div>
    )
}

export default CartWidget