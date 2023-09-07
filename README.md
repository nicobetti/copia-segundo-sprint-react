# ITBANK-comision3-grupo4

## Bienvenida
Bienvenidos/as al repositorio remoto del grupo 4, mejor conocido como Banco Río. Nos insipiramos en la famosa película argentina llamada "El robo del siglo" y tomamos al Banco Río (víctima del robo bancario más grande en la historia argentina) como referencia para construir nuestro proyecto a su alrededor.

## Integrantes del grupo: 
Santiago Ance

Mateo Brena

Pablo Ferrarese

Camila Vargas

## Trello
Este es el link a nuestro espacio de trabajo en Trello: https://trello.com/b/LXV99wbU/banco-r%C3%ADo

## Tecnologías
En el proyecto usamos los lenguajes de HTML5 JavaScript, CSS. La nueva interfaz utiliza React para renderizar las vistas y hacer una navegación más rápida y agradable. También utilizamos Bootstrap para algunas cuestiones de estilos y funcionalidad. La aplicación es responsive, preparada tanto para dispositivos móviles como para desktop.

## Guía
Nuestro banco consta de una página principal (/home) que funciona como landing para cualquier visitante. Para acceder al Home banking o bien crear una cuenta en caso de no ser todavía un cliente, usamos el login. Estas dos vistas (/home y /login) están aisladas del resto al no poseer todavía un login funcional que permita/niegue la entrada al Home banking. Para acceder al mismo se debe utilizar el botón de "Ingresar" que nos llevará al apartado de cuentas, desde allí todo el resto de las vistas están conectadas mediante la barra lateral o el menú desplegable (según la pantalla del dispositivo). Para regresar a la página principal, simplemente se debe hacer click en el item de "Inicio" de la barra de navegación o sobre el logo del banco.

## Cuestiones a mejorar
Las funcionalidades del Conversor de Monedas y el Simulador de Préstamo no llegaron a ser migradas a React (funcionan en la versión estática), sin embargo lo serán próximamente. (Utilizando la API en el conversor como es requerido). Nos gustaría tener un login funcional con algunas validaciones para autenticar usuario y contraseña y así agregar otra funcionalidad. También queremos resolver algunas cuestiones estéticas y de funcionalidad en el header y footer. Además de resolver algunas cuestiones estéticas para ubicar mejor los elementos (sobre todo el conversor, simulador de préstamo y el formulario de nuevas transferencias) y su posicionamiento.