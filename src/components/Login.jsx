import React from "react";
import "../css/Login.css"


export default function Login() {
    return (
        <>
            <section className="menu-ingreso">
                <div className="login">
                    <h1 className="header-login"> Bienvenido/a Banco Río, tu banco de confianza</h1>
                    <h3 className="header-login"> Para continuar, ingresa tus credenciales</h3>
                    <div className="contenedor-login">
                        <form action="" className="formulario">
                            <div>
                                <label for="usuario">Usuario</label>
                                <input type="text" name="usuario" placeholder="Usuario" className="sin-borde" />
                            </div>
                            <div>
                                <label for="password">Contraseña</label>
                                <input type="password" name="password" placeholder="Contraseña" className="sin-borde" />
                            </div>
                            <button type="button" name="boton" className="boton">Ingresar</button>
                        </form>
                        <p className="center"> Todavía no tienes una cuenta? Puedes <a href="#">crear una nueva cuenta</a></p>
                    </div>
                </div>
            </section>
        </>
    )
}