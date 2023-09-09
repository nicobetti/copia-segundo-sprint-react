 import Form from "react-bootstrap/Form"
import Col from 'react-bootstrap/Col';
import "../css/Login.css"
import { Link } from "react-router-dom"
import LoginHeader from "./LoginHeader"
import { FloatingLabel, Button } from "react-bootstrap"
import { useState } from "react"

export default function Login() {
    const [validado, setValidado] = useState(false);

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }

        setValidado(true)
    }
    return (
        <>
            <LoginHeader></LoginHeader>
            <section className="menu-ingreso">
                <div className="login">
                    <h1 className="header-login"> Bienvenido/a Banco Río, tu banco de confianza</h1>
                    <h3 className="header-login"> Para continuar, ingresa tus credenciales</h3>
                    <div className="contenedor-login">
                        <Form noValidate validado={validado} className="formulario" onSubmit={handleSubmit}>
                            <Form.Group controlId="validationCustom01">
                                <FloatingLabel controlId="floatingInput" label="nombre@ejemplo.com" className="m-3">
                                    <Form.Control required type="text" name="usuario" placeholder="nombre@ejemplo.com" />
                                    <Form.Control.Feedback type="invalid">
                                        Ingrese un usuario
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>
                            <FloatingLabel controlId="floatingPassword" label="Contraseña" className="m-3">
                                <Form.Control type="password" name="password" placeholder="Contraseña" className="" />
                            </FloatingLabel>
                            <Link to="/accounts"><button type="submit" name="boton" className="boton">Ingresar</button></Link>
                        </Form>
                        <p className="center"> Todavía no tienes una cuenta? Puedes <Link to="">crear una nueva cuenta</Link></p>
                    </div>
                </div>
            </section>
        </>
    )
} 