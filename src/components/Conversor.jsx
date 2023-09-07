import "../css/Conversor.css"
import Navbar from "./Navbar";
import { useState} from "react";
import Header from "./Header";

export default function Conversor() {
    const [montoUno, setmontoUno] = useState("")
    const [montoDos, setmontoDos] = useState("")
    const [monedaUno, setMonedaUno] = useState("USD")
    const [monedaDos, setMonedaDos] = useState("ARS")
   /*  const [precios,setPrecios] = useState([])

    useEffect(() => {
      fetch(`https://api.exchangerate-api.com/v4/latest/${monedaUno}`)
      .then(response => response.json())
      .then( data => {
        setPrecios(data.precios)
      })
      .catch(error => {
        console.log(error("Error: ", error))
      })
    },[]) */
    return (
        <>
            <Header></Header>
            <div className="principal">
            <Navbar></Navbar>
            <article className="conversor">
                <h1> Conversor de monedas</h1>
                <h3> Indique las monedas y las cantidades para su conversión</h3>
                <p><strong>ATENCION:</strong> Todas las divisas serán convertidas a su valor oficial del día de la fecha</p>
                <div>
                    <select name="monedaUno" id="monedaUno" value={monedaUno} onChange={e => setMonedaUno(e.target.value)}>
                        <option value="ARS">ARS</option>
                        <option value="AUD">AUD</option>
                        <option value="BRL">BRL</option>
                        <option value="CLP">CLP</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                        <option value="PYG">PYG</option>
                        <option value="USD">USD</option>
                        <option value="UYU">UYU</option>
                    </select>
                    <input type="text" className="sin-borde" name="montoUno" id="montoUno" value={montoUno}
                        placeholder="0" onChange={e => { setmontoUno(e.target.value); }} />
                </div>
                <div className="contenedor_invertir">
                    <button className="boton" id="botoninvertir"><i className="fa-solid fa-shuffle"></i></button>
                    <div className="precio" id="precio"></div>
                </div>
                <div>
                    <select name="monedaDos" id="monedaDos" value={monedaDos} onChange={e => setMonedaDos(e.target.value)}>
                        <option value="ARS">ARS</option>
                        <option value="AUD">AUD</option>
                        <option value="BRL">BRL</option>
                        <option value="CLP">CLP</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                        <option value="PYG">PYG</option>
                        <option value="USD">USD</option>
                        <option value="UYU">UYU</option>
                    </select>
                    <input type="text" className="sin-borde" name="montoDos" id="montoDos"
                        placeholder="0" value={montoDos} onChange={e => { setmontoDos(e.target.value); }} />
                </div>
            </article>
        </div>
        </>
        
    )
}