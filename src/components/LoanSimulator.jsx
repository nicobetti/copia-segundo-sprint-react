import { useState } from "react";
import "../css/LoanSimulator.css"
import Navbar from "./Navbar";
import Header from "./Header";

export default function LoanSimulator(){
    const [capital, setCapital] = useState("")
    const [interes, setInteres] = useState("")
    const [tiempo, setTiempo] = useState("")
    const [duracion, setDuracion] = useState("year")
    const interesCalculado = duracion === "year" ?  (capital*interes*tiempo) / 100 : (capital*interes*tiempo) / 1200
    const totalCalculado = parseInt(capital)
    const total = parseInt(totalCalculado+interesCalculado)
    const [ocultar, setOcultar] = useState(true)

    return(
        <>
            <Header></Header>
            <div className="principal">
            <Navbar></Navbar>
            <div className="simulador">
            <h1>Simulador de préstamos</h1>
            <div className="contenedor-inputs">
                <div>
                    <label htmlFor="capital">Capital($):</label>
                    <input type="number" className="sin-borde" name="capital" id="capital" placeholder="Ej. 1000"
                     value={capital} onChange={e => setCapital(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="tiempo">Interés(anual):</label>
                    <input type="number" className="sin-borde" name="interes" id="interes" placeholder="Ej. 6" 
                    value={interes} onChange={e => setInteres(e.target.value)}/>
                </div>
            </div>
            <label htmlFor="tiempo">Tiempo:</label>
            <div className="tiempo">
                <input type="number" id="tiempo" placeholder="Ej. 1" value={tiempo} onChange={e => setTiempo(e.target.value)}/>
                <select name="duracion" id="duracion" value={duracion} onChange={e => (setDuracion(e.target.value))}>
                    <option value="year">Año</option>
                    <option value="mes">Mes</option>
                </select>
            </div>
            <button className="boton" id="calcular" onClick={ () => setOcultar(false)}>Calcular</button>
            { ocultar ? <div></div>: <div id="resultado"> <div>Capital: ${capital}</div> <div>Intereses: ${interesCalculado}</div><div>Total: ${total}</div></div>}
        </div>
        </div>
        </>
        
    )
}