import "../css/LoanSimulator.css"
import Navbar from "./Navbar";

export default function LoanSimulator(){
    return(
        <div className="principal">
            <Navbar></Navbar>
            <div className="simulador">
            <h1>Simulador de préstamos</h1>
            <div className="contenedor-inputs">
                <div>
                    <label htmlFor="capital">Capital($):</label>
                    <input type="number" className="sin-borde" name="capital" id="capital" placeholder="Ej. 1000"/>
                </div>
                <div>
                    <label htmlFor="tiempo">Interés(anual):</label>
                    <input type="number" className="sin-borde" name="interes" id="interes" placeholder="Ej. 6"/>
                </div>
            </div>
            <label htmlFor="tiempo">Tiempo:</label>
            <div className="tiempo">
                <input type="number" id="tiempo" placeholder="Ej. 1"/>
                <select name="duracion" id="duracion">
                    <option value="year">Año</option>
                    <option value="mes">Mes</option>
                </select>
            </div>
            <button className="boton" id="calcular">Calcular</button>
            <div id="resultado"></div>
        </div>
        </div>
    )
}