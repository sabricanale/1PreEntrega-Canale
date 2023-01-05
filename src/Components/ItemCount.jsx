import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const ItemCount = ({stock, onAdd}) => {

    const [counter, setCounter] = useState(1)
    const [itemStock, setItemStock] = useState(stock)
    const [vendido, setVendido] = useState(false)

    useEffect(()=>{
        setItemStock(stock)
    },[stock])

    const incrementarStock = () => {
        if(counter < itemStock){
            setCounter(counter + 1)
        }   
    }
    const decrementarStock = () => {
        if(counter > 1) {
            setCounter(counter - 1)
        }   
    }

    const addToCart = (quantity) => {
        setItemStock(itemStock - quantity)
        setCounter(0)
        setVendido(true)
        onAdd(quantity)
    }
    return (
        <div className="container text-center">
            <div className="row mb-3">
                <div className="col-md-12">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-success" onClick={decrementarStock}>-</button>
                        <button type="button" className="btn btn-outline-success">{counter}</button>
                        <button type="button" className="btn btn-outline-success"onClick={incrementarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    {vendido ? <Link to={"/cart"} className="btn btn-outline-success">Terminar mi compra</Link> : <button className="btn btn-outline-success" onClick={() =>{addToCart(counter)}}>Agregar al carrito</button>}
                </div>
            </div>
        </div>
        
    )
}

export default ItemCount 