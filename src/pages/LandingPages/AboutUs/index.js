import React, { useState, useEffect } from 'react';

// Material Kit 2 React components
import MKBox from "components/MKBox";
import '../../Presentation/css/Nosotros.css';
// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";


// Routes
import routes from "routes";
import footerRoutes from "footer.routes";



function AboutUs() {
  const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 4000);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentSlide]);
  return (
    <>
      
      <div className='containerNosotros'>
        <div className='primeraFilaNosotros'>
          <div>
            <div className='slider-containerNosotros' style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              <div className='slider-itemNosotros'>
                <img src={require("../../../assets/Nosotros/Nosotros1.jpg")} alt="Slide 1" />
              </div>
              <div className='slider-itemNosotros'>
                <img src={require("../../../assets/Nosotros/Nosotros2.jpg")} alt="Slide 2" />
              </div>
              <div className='slider-itemNosotros'>
                <img src={require("../../../assets/Nosotros/Nosotros3.jpg")} alt="Slide 3" />
              </div>
            </div>
          </div>
          <div className='historiaNosotros'>
            <div className='historia-rowNosotros'>
              <div className='historia-imagenNosotros imgmision' style={{ height: 350 }}>

                <img src={require("../../../assets/Nosotros/Misión.png")} alt="Slide 4" style={{ marginTop: '-10%' }} />
                <h1 className='historia-textoNosotros' style={{ textAlign: 'center', fontSize: 40, marginTop: '-5%' }}>Misión</h1>
              </div>
              <div className='historia-textoNosotros'><strong>TECNIALARMAS LTDA</strong> es una compañía dedicada a proteger la vida y bienes de
                nuestros usuarios a través de un servicio de Seguridad Electrónica Integral en la
                Costa Atlántica, el cual incluye las gestiones de asesoría, provisión, instalación, prestación del servicio de monitoreo permanente, mantenimiento de los mismos y supervisión; apoyados en un Talento Humano competente y comprometido con nuestra Política de Calidad.</div>
            </div>
            <div className='historia-rowNosotros imgvision' >
              <div className='historia-imagenNosotros '>
                <img src={require("../../../assets/Nosotros/Visión.png")} alt="Slide 5" style={{ marginTop: '-30%' }} />
                <h1 className='historia-textoNosotros' style={{ textAlign: 'center', fontSize: 40, marginTop: '-30%' }}>Visión</h1>
              </div>
              <div className='historia-textoNosotros'><strong>TECNIALARMAS LTDA</strong> en el año 2025 mantendrá su posicionamiento en la Costa Atlántica, con Innovación, Tecnología de Punta, Efectividad en los Servicios, Calidad,
                Confiabilidad y Servicio al Cliente.</div>
            </div>
            <div className='historia-rowNosotros ' >
              <div className='historia-imagenNosotros imghistoria' style={{ height: 420 }}>
                <img className='' src={require("../../../assets/Nosotros/Historia.png")} alt="Slide 6" style={{ marginTop: '-15%' }} />
                <h1 className='historia-textoNosotros' style={{ textAlign: 'center', fontSize: 40, marginTop: '-7%' }}>Historia</h1>
              </div>
              <div className='historia-textoNosotros'><strong>TECNIALARMAS LTDA</strong> es una compañía de Seguridad Electrónica fundada en 1979, la cual
                representa a HONEYWELL Security para la Costa Norte Colombiana en calidad de Integradores.
                Nuestra empresa creó la primera Central de Monitoreo en la Costa Atlántica en 1990 y
                hemos instalado cuatro (4) Centrales de Monitoreo a otras empresas de seguridad reconocidas de la región, asesoramos a dos compañías en Puerto Príncipe, Haití y en Quito
                Ecuador.
                Contamos con 44 años de experiencia, más de 6.120 sistemas instalados y 3.600 usuarios.</div>
            </div>
          </div>

        </div>
        <div className='SeparadorNosotros'>
          <h1 className='titulo'>NUESTRAS VENTAJAS</h1>
        </div>
        <div className='segundaFilaNosotros'>
          <div className='columnaIzquierdaNosotros'>
            <div className='separatorNosotros'>
              Somos inmunes a cortes en el suministro de energía.
            </div>
            <div className='historiaNosotros'>
              <div className='historia-rowNosotros' style={{ marginLeft: "-12%" }}>
                <div className='historia-imagenNosotros'>
                  <img src={require("../../../assets/Nosotros/1.png")} alt="Slide 7" />
                </div>
                <div className='historia-textoNosotros' style={{ color: 'white' }}>En el evento de presentarse fallas en
                  el suministro de energía pública, nuestra Central de Monitoreo dispone de
                  tres (3) generadores de energía, sincronizados para funcionar secuencialmente de manera automática.</div>
              </div>
              <div className='separatorNosotros'>
                Central de Monitoreo blindada
              </div>
              <div className='historia-rowNosotros' style={{ marginLeft: "-12%" }} >
                <div className='historia-imagenNosotros'>
                  <img src={require("../../../assets/Nosotros/2.png")} alt="Slide 7" />
                </div>
                <div className='historia-textoNosotros' style={{ color: 'white' }}>Los operadores y el hardware se encuentran dentro de un
                  bunker de seguridad blindado que imposibilita el
                  acceso de terceros no autorizados.
                  Contamos con equipos de backup o
                  repuesto para toda la infraestructura
                  de la Central de Monitoreo. Nuestra
                  Central de Monitoreo cuenta con suficientes turnos de operadores para
                  darle tratamiento adecuado y eficiente a las señales recibidas. Contamos
                  con la red de comunicación radial y
                  GPRS de sistemas de alarmas más
                  amplia de la costa norte.</div>
              </div>
              <div className='separatorNosotros'>
                Protegemos la información almacenada.
              </div>
              <div className='historia-rowNosotros' style={{ marginLeft: "-12%" }}>
                <div className='historia-imagenNosotros'>
                  <img src={require("../../../assets/Nosotros/3.png")} alt="Slide 7" />
                </div>
                <div className='historia-textoNosotros' style={{ color: 'white' }}>Nuestros servidores contienen discos
                  duros y fuentes de poder redundantes que duplican en tiempo real los
                  datos almacenados en el disco principal, lo cual imposibilita la pérdida de
                  información valiosa.</div>
              </div>

            </div>
          </div>
          <div className='columnaDerechaNosotros'>
            <div className='separatorNosotros'>
              Sin congestiones telefónicas.
            </div>
            <div className='historiaNosotros'>
              <div className='historia-rowNosotros'>

                <div className='historia-textoNosotros' style={{ color: 'white', }}>Dos (2) PBX con 12 líneas telefónicas y acometidas subterráneas
                  anti-sabotaje, aseguran la recepción de TODAS las señales telefónicas que emiten los sistemas de
                  alarmas que aún trasmiten por
                  ese medio. Sistema telefónico de
                  voz dotado con un E1 encriptado,
                  el cual no permite que las comunicaciones sean intervenidas desde
                  el exterior.</div>
                <div className='historia-imagenNosotros' style={{ backgroundColor: "#21305D" }}>
                  <img src={require("../../../assets/Nosotros/4.png")} style={{ marginLeft: 0, marginRight: '-25%' }} alt="Slide 8" />
                </div>
              </div>

              <div className='separatorNosotros'>
                Somos los más RECONOCIDOS en la región.
              </div>
              <div className='historia-rowNosotros'>

                <div className='historia-textoNosotros' style={{ color: 'white', }}>Nuestra tradición.
                  Más de 44 años nos acreditan
                  como la compañía de seguridad
                  electrónica más antigua y solida
                  en la costa norte de nuestro país.
                  Servimos a más de 3.600 usuarios
                  activos.</div>
                <div className='historia-imagenNosotros' style={{ backgroundColor: "#21305D" }}>
                  <img src={require("../../../assets/Nosotros/5.png")} style={{ marginLeft: 0, marginRight: '-25%' }} alt="Slide 8" />
                </div>
              </div>
              <div className='separatorNosotros'>
                ¡Somos locales!
              </div>
              <div className='historia-rowNosotros'>

                <div className='historia-textoNosotros' style={{ color: 'white' }}>Nuestra tradición.
                  TECNIALARMAS es de origen totalmente Colombiano y de la
                  Costa Norte. Tenemos la primera
                  Central de Monitoreo creada en la
                  Costa Norte de nuestro país, la
                  cual tiene la mayor cantidad de
                  cuentas de la región. Hemos instalado cuatro (4) Centrales de
                  Monitoreo a otras empresas de
                  seguridad reconocidas de la
                  región y una Central de Monitoreo
                  en Puerto Príncipe, Haití, asesoramos a dos compañías en Puerto
                  Príncipe, Haití y en Quito, Ecuador.</div>
                <div className='historia-imagenNosotros' style={{ backgroundColor: "#21305D" }}>
                  <img src={require("../../../assets/Nosotros/6.png")} style={{ marginLeft: 0, marginRight: '-25%' }} alt="Slide 8" />
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className='historiaNosotros' style={{ backgroundColor: "#21305D" }}>
          <div className='historia-rowNosotros' style={{ marginLeft: "-15%" }}>
            <div className='historia-imagenNosotros' style={{ backgroundColor: "#21305D" }}>
              <img src={require("../../../assets/Nosotros/7.png")} alt="Slide 8" />
            </div>
            <div className='historia-textoNosotros' style={{ color: 'white', textAlign: "left" }}>TECNIALARMAS tiene el Departamento Técnico más competitivo de la región
              por su capacidad instalada antigüedad y experiencia de los técnicos en el
              campo.</div>

          </div>
        </div>

      </div>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default AboutUs;
