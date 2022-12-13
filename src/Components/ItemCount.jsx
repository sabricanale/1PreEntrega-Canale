import React from "react";
import { useEffect } from "react";
import { useState } from "react";


const ItemCount = ({stockItems}) => {

    const [counter, setCounter] = useState(1)
    const [stock, setStock] = useState(stockItems)

    useEffect(()=>{
        setStock(stockItems)
    },[stockItems])

    const incrementarStock = () => {
        if(counter < stock){
            setCounter(counter + 1)
        }   
    }
    const decrementarStock = () => {
        if(counter > 1) {
            setCounter(counter - 1)
        }   
    }

    const onAdd = () => {
        if(counter <= stock){
            setStock(stock - counter);
            setCounter(0);
            console.log ("Agregaste " + counter + " productos al carrito!")
        }
        
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
                    <button className="btn btn-outline-success" onClick={onAdd}>Agregar al carrito</button>
                </div>
            </div>
        </div>
        
    )
}

export default ItemCount 