import "../css/Home.css"

export default function Home() {
    return (
        <>
            <section>
                <div class="banner">
                    <img src="../images/banner.png" alt="Frente de sucursal" class="d-block w-100" />
                </div>
                <article class="valores">
                    <div class="container-xl p-5 mision">
                        <h4> Nuestra Misión</h4>
                        <p>Somos un Banco Universal, moderno y cercano que ofrece una variedad de servicios financieros de excelencia, permitiendo a nuestros clientes satisfacer sus necesidades de financiamiento, ahorro y pago. Creamos valor para nuestros accionistas, construyendo relaciones de confianza con quienes interactuamos y ofrecemos las condiciones para que las personas desarrollen su potencial, en un ambiente laboral desafiante y de respeto a nuestros valores.</p>
                    </div>
                    <div class="container-xl p-5 vision">
                        <h4> Nuestra visión</h4>
                        <p> Ser una compañía que resuelve todas las necesidades financieras de nuestros clientes, entregándoles la mejor experiencia personal y digital, sustentada en nuestra capacidad de conocerlos y personalizando el servicio que les entregamos. Queremos lograr convertirnos en el banco líder a partir de la permanente innovación en productos y servicios  financieros, el compromiso con nuestros clientes y el desarrollo y capacitación de nuestra gente.</p>
                    </div>
                </article>
                <h2 class="titulo-section">¿Por qué elegir Banco Río?</h2>
                <div class="contenedor-tarjetas-index">
                    <div class="card tarjetas-index">
                        <img class="card-img-top" src="../images/modelo-tarjeta.jpg" alt="Persona sosteniendo tarjeta" />
                        <div class="card-body">
                            <h4 class="card-title">Nuestros productos</h4>
                            <p class="card-text">Tenemos los mejores productos que se adaptan a tus necesidades. Tanto individuos como empresas podrán encontrar opciones al mejor precio del mercado</p>
                        </div>
                    </div>
                    <div class="card tarjetas-index">
                        <img class="card-img-top" src="../images/modelo-celular.jpg" alt="Persona sosteniendo celular" />
                        <div class="card-body">
                            <h4 class="card-title">Home Banking</h4>
                            <p class="card-text">Nuestro home banking te permitirá estar conectado estés donde estés. Podrás realizar trámites, transferencias, chequear tus cuentas y mucho más desde la comodidad de tu hogar o incluso desde tu smartphone.</p>
                        </div>
                    </div>
                    <div class="card tarjetas-index">
                        <img class="card-img-top" src="../images/cajas-seguridad.png" alt="Cajas de seguridad" />
                        <div class="card-body">
                            <h4 class="card-title">Seguridad</h4>
                            <p class="card-text">Tenemos un gran compromiso con la seguridad de todos nuestros clientes, tanto de manera presencial en nuestras sucursales como de manera virtual. Tu dinero y tus datos siempre estarán seguros.</p>
                        </div>
                    </div>
                    <div class="card tarjetas-index">
                        <img class="card-img-top" src="../images/modelo-soporte.jpg" alt="Persona con headset" />
                        <div class="card-body">
                            <h4 class="card-title">Atención al cliente</h4>
                            <p class="card-text">Nuestro equipo está siempre preparado para resolver tus dudas o inconvenientes. Ya sea en una sucursal o de forma virtual, te garantizamos que serás atendido con la mejor predisposición y sin largas esperas.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}