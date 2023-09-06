import "../css/Conversor.css"
import Navbar from "./Navbar";

export default function Conversor(){
    return (
        <div className="principal">
            <Navbar></Navbar>
            <article className="conversor">
            <h1> Conversor de monedas</h1>
            <h3> Indique las monedas y las cantidades para su conversión</h3>
            <p><strong>ATENCION:</strong> Todas las divisas serán convertidas a su valor oficial del día de la fecha</p>
            <div>
                <select name="moneda1" id="moneda1">
                    <option value="ARS">ARS</option>
                    <option value="AUD">AUD</option>
                    <option value="BRL">BRL</option>
                    <option value="CLP">CLP</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="PYG">PYG</option>
                    <option value="USD" selected>USD</option>
                    <option value="UYU">UYU</option>
                </select>
                <input type="text" className="sin-borde" name="monto1" id="monto1" placeholder="0"/>
            </div>
            <div className="contenedor_invertir">
                <button className="boton" id="botoninvertir"><i className="fa-solid fa-shuffle"></i></button>
                <div className="precio" id="precio"></div>
            </div>
            <div>
                <select name="moneda2" id="moneda2">
                    <option value="ARS" selected>ARS</option>
                    <option value="AUD">AUD</option>
                    <option value="BRL">BRL</option>
                    <option value="CLP">CLP</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                    <option value="PYG">PYG</option>
                    <option value="USD">USD</option>
                    <option value="UYU">UYU</option>
                </select>
                <input type="text" className="sin-borde" name="monto2" id="monto2" placeholder="0"/>
            </div>
        </article>
        </div>
    )
}