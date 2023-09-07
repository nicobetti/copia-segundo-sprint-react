import "../css/Login.css"
import { Link } from "react-router-dom"
import LoginHeader from "./LoginHeader"

export default function Login() {
    return (
        <>
            <LoginHeader></LoginHeader>
            <section className="menu-ingreso">
                <div className="login">
                    <h1 className="header-login"> Bienvenido/a Banco Río, tu banco de confianza</h1>
                    <h3 className="header-login"> Para continuar, ingresa tus credenciales</h3>
                    <div className="contenedor-login">
                        <form action="" className="formulario">
                            <div className="form-floating m-3">
                                <input type="text" name="usuario" placeholder="Usuario" className="form-control sin-borde" />
                                <label for="usuario">Usuario</label>
                            </div>
                            <div className="form-floating m-3">
                                <input type="password" name="password" placeholder="Contraseña" className="form-control sin-borde" />
                                <label for="password">Contraseña</label>
                            </div>
                            <Link to="/accounts"><button type="button" name="boton" className="boton">Ingresar</button></Link>
                        </form>
                        <p className="center"> Todavía no tienes una cuenta? Puedes <Link to="">crear una nueva cuenta</Link></p>
                    </div>
                </div>
            </section>
        </>
    )
}