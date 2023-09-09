import Form from "react-bootstrap/Form"
import "../css/NewTransfer.css"
import Navbar from "./Navbar";
import Header from "./Header";

export default function NewTransfers() {
    return (
        <>
            <Header></Header>
            <div className="principal">
        <Navbar></Navbar>
          <div className="contenedor-form">
            <h1> Nueva transferencia</h1>
        <form action="" className="formulario-transfer">
            <div>
                <label htmlFor="destinatario">Destinatario:</label>
                <Form.Select name="identificacion" id="identificacion">
                    <option value="cbu">CBU</option>
                    <option value="alias">Alias</option>
                </Form.Select>
                <input type="text" name="destinatario" id="destinatario" className="form m-3"/>
            </div>
            <div>
                    <label htmlFor="origen">Cuenta de origen:</label>
                    <select name="origen" id="origen" >
                        <option value="ars">CA $ARS 000215684156</option>
                        <option value="usd">CA $USD 000215684157</option>
                    </select>
            </div>
            <div>
                    <label htmlFor="monto">Monto:</label>
                    <input type="number" id="monto" name="monto"/>
            </div>
            <div>
                <label htmlFor="motivo">Motivo:</label>
                <select name="motivo" id="motivo">
                    <option value="alquiler">Alquiler</option>
                    <option value="expensas">Expensas</option>
                    <option value="facturas">Facturas</option>
                    <option value="prestamo">Préstamo</option>
                    <option value="seguro">Seguro</option>
                    <option value="varios">Varios</option>
                </select>
            </div>
            <div>
                <label htmlFor="referencia">Referencia:</label>
                <input type="text" id="referencia" name="referencia"/>
            </div>
            <button className="boton-transferencia">Enviar</button>
        </form>
        </div>
        </div>
        </>
    )
}