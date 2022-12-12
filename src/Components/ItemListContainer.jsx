import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import ArrayProductos from "./Json/ArrayProductos.json"

const ItemListContainer = () => {
    
    const [items, setItems] = useState([])
    const {id} = useParams()
    useEffect(()=> {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? ArrayProductos.filter(item => item.categoria === id) : ArrayProductos)
            }, 2000)
        })
    promesa.then ((data)=> {
        setItems(data)
    })   
    }, [id])


    return(
        <div className="container py-5"> 
            <ItemList items={items}/>
                       
        </div>
    )
}

export default ItemListContainer;













