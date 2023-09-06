import React from "react";
import { Link } from "react-router-dom";

export default function HomeBankingAccess() {
    return(
        <>
            <div className="dropdown" id="home-banking">
            <button type="button" className="btn btn-dark" data-bs-toggle="dropdown"><i class="fa-solid fa-right-to-bracket"></i></button>
            <ul className="dropdown-menu boton-index">
                <li className="boton-index"><Link to="/login" class="dropdown-item boton-index">Home Banking</Link></li>
            </ul>
        </div>
        </>
    )
}