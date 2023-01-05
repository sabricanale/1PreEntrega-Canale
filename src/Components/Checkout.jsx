import React, { useState, useContext } from "react";
import { CartContext } from "./Context/CartContext";
import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore";
import { Navigate } from "react-router-dom";

const Checkout = () =>{
    const {cart, clear, sumTotal} = useContext(CartContext)
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [telefono, setTelefono] = useState("")
    const [orderId, setOrderId] = useState("")

    const generarOrden = () =>{
        const fecha = new Date();
        const order = {
            buyer: {name:nombre, email: email, phone: telefono},
            items: cart.map(item =>({id: item.id, title: item.nombre, price: item.precio, quantity: item.quantity, price_total: item.quantity * item.precio})),
            date:`${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`,
            total: sumTotal()
        }
        const db = getFirestore()
        const orderCollection = collection(db, "Orders")
        addDoc(orderCollection, order).then((snapShot) =>{
            setOrderId(snapShot.id)
            const orderDoc = doc(db, "Orders", snapShot.id) //Buscar un documento por ID
            updateDoc(orderDoc, {total: order.total * 0.9}) //Actualizar un documento
            clear()
        } )
    }
    return (
        <div className="container">
            <div className="row my-3">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre y apellido: </label>
                            <input type="text" className="form-control" id= "nombre" placeholder= "Ingrese nombre y apellido" onInput={(e) =>{setNombre(e.target.value)}}/>
                        </div>    
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email: </label>
                            <input type="email" id="email" className="form-control" placeholder= "Ingrese su correo" onInput={(e) =>{setEmail(e.target.value)}}/>
                        </div>    
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">Teléfono: </label>
                            <input type="number" id="telefono" className="form-control" placeholder= "Ingrese teléfono de contacto" onInput={(e) =>{setTelefono(e.target.value)}}/>
                        </div>    
                        <button type="button" onClick={generarOrden} className="btn">Generar orden</button>
                    </form>
                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td className="text-center align-middle"><img src={item.imagen} alt={item.nombre} width={32} /></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="text-center align-middle">{item.quantity}</td>
                                    <td className="text-center align-middle">${item.quantity * item.precio}</td>
                            </tr>
                            ))}
                            <tr>
                                <td colSpan={3} className="text-end"><b>Total a pagar</b></td>
                                <td className="text-center"><b>${sumTotal()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-3">
                <div className="col">
                    {orderId ? <Navigate to={"/thankyou/" + orderId}/> : "" }
                    
                </div>
            </div>
        </div>
        
    )
}

export default Checkout