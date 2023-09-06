import React from "react";
import "../css/Accounts.css"
import Navbar from "./Navbar";
import { Nav } from "react-bootstrap";

export default function Accounts() {
    return (
        <>
            <Navbar></Navbar>
            <div className="container-lg m-3 contenedor-cuentas" >
                <div className="container p-2 bg-secondary text-white cada-cuenta">
                    <h4 >Caja de Ahorro en $ARS</h4>
                    <p>Saldo: $***</p>
                    <p>CBU: 000215684156</p>
                    <a href="#" className="btn btn-primary">Ver detalle</a>
                </div>
                <div className="container p-2 bg-secondary text-white cada-cuenta">
                    <h4 >Caja de Ahorro en $USD</h4>
                    <p>Saldo: $***</p>
                    <p>CBU: 000215684156</p>
                    <a href="#" className="btn btn-primary">Ver detalle</a>
                </div>
                <div className="container p-2 bg-secondary text-white cada-cuenta">
                    <h4 >Tarjeta terminada en 8004</h4>
                    <p>Saldo: $***</p>
                    <p>Vencimiento: 07/11</p>
                    <a href="#" className="btn btn-primary">Ver detalle</a>
                </div>
                <div className="container p-2 bg-secondary text-white cada-cuenta">
                    <h4 >Tarjeta terminada en 4256</h4>
                    <p>Saldo: $***</p>
                    <p>Vencimiento: 09/11</p>
                    <a href="#" className="btn btn-primary">Ver detalle</a>
                </div>
            </div>
        </>
    )
}