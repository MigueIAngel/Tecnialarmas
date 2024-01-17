import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../Presentation/css/Productos.css';
// import Slider from '../components/Slider';

function Productos() {
  const { section } = useParams();
  const [selectedSection, setSelectedSection] = useState(section || "alarma");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
    setSelectedProduct(null);
    window.scrollTo(0, 0);
    setOpen(false);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsPopupOpen(true)
  };

  const toggleMenu = () => {
    console.log(!open);
    setOpen(!open);
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 27) { // 27 is the keycode for "Esc" key
        setIsPopupOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className='productos-container'>

      <div className={`sidebar ${isMobile ? open ? 'mob-show' : 'mob-hide' : ''}`}>
        <div className='toggle-close-container'>
          {isMobile && (
            <button className='toggle-sidebar' onClick={() => toggleMenu()}>&#x2715;</button>
          )}
        </div>

        <img className={`section-button ${selectedSection === "alarma" ? "selected" : ""}`} onClick={() => handleSectionClick("alarma")} src={require("../../../assets/alarma_blanco_btn.png")} alt="Logo 3" />
        <img className={`section-button ${selectedSection === "cctv" ? "selected" : ""}`} onClick={() => handleSectionClick("cctv")} src={require("../../../assets/cctv_blanco_btn.png")} alt="Logo 3" />
        <img className={`section-button ${selectedSection === "acceso" ? "selected" : ""}`} onClick={() => handleSectionClick("acceso")} src={require("../../../assets/control_acceso_blanco_btn.png")} alt="Logo 3" />
        <img className={`section-button ${selectedSection === "otros" ? "selected" : ""}`} onClick={() => handleSectionClick("otros")} src={require("../../../assets/otros_blanco_btn.png")} alt="Logo 3" />

      </div>
      <div className="main-content">
        <div className='toggle-container'>
          {isMobile && (
            <button className='toggle-sidebar' onClick={() => toggleMenu()}>&#9776;</button>
          )}
          {isMobile && (
            <h1 className='section-tittle'>Sección de {selectedSection}</h1>
          )}
        </div>


        <hr className="blue-horizontal-line"></hr>
        {selectedSection === "alarma" && (
          <div className={"section"}>

            <div className='product-card' onClick={() => handleProductClick({ title: "VISTA 48LA.", image: "vista48la.jpg", description: "Este panel tiene 8 zonas básicas alámbricas, de las cuales 7 pueden ser duplicadas llegando hasta 15 zonas, sin necesidad de expansor.<br/>- Expande hasta 48 zonas alámbricas o inalámbricas a través de módulo expansor. <br/>- Ofrece hasta 3 particiones.<br/>- 48 códigos de usuarios con diferentes niveles de autoridad.<br/>- Recibe equipos inalámbricos.<br/><strong>*Este panel también viene en versión totalmente inalámbrica.</strong>" })}>
              <img className='product-image' src={require("../../../assets/Productos/vista48la.jpg")} alt="Logo 3" />
              <span className='product-title'>VISTA 48LA.</span>
            </div>

            <div className='product-card' onClick={() => handleProductClick({ title: "VISTA 128BPT", image: "vista128bpt.jpg", description: "Este panel de alarma logra integrar Intrusión, CCTV y Control de Acceso.<br/>- Soporta hasta 119 zonas a través de expansor V-Plex.<br/>- Soporta hasta 127 zonas inalámbricas.<br/>- Controla hasta 8 particiones independientes.<br/>- Recibe hasta 150 usuarios con 7 niveles de autoridad diferentes.<br/>- En la aplicación de Control de Acceso puede operar hasta 8 puertas y 250 usuarios." })}>
              <img className='product-image' src={require("../../../assets/Productos/vista128bpt.jpg")} alt="Logo 3" />
              <span className='product-title'>VISTA 128BPT</span>
            </div>

            <div className='product-card' onClick={() => handleProductClick({ title: "VISTA 250 BPT", image: "vista250bpt.jpg", description: "Al igual que el panel 128BPT, éste panel también integra Intrusión, CCTV y Control de Accesos.<br/><br/>- Soporta hasta 241 zonas a través de expansor.<br/>- Soporta hasta 249 zonas inalámbricas.<br/>- Controla hasta 8 particiones independientes.<br/>- Recibe hasta 250 usuarios con 7 niveles de autoridad diferentes.<br/>- En la aplicación de Control de Acceso puede operar hasta 15 puertas y 500 usuarios.<br/>- Éste panel se puede enlazar con 8 paneles adicionales para cubrir las exigencias de seguridad más robustas a través del sistema Panel Linking." })}>
              <img className='product-image' src={require("../../../assets/Productos/vista250bpt.jpg")} alt="Logo 3" />
              <span className='product-title'>VISTA 250 BPT</span>
            </div>

            <div className='product-card' onClick={() => handleProductClick({ title: "Infrarrojo Rokonet RK-815 Grado 3.", image: "rk815.jpg", description: "<strong>Caracteristicas</strong><br/>- Tiene tecnología MW & PIR/Quad PIR.<br/>- Tecnología anti-enmascaramiento y anti-burla (patent pending).<br/>- Cubrimiento hasta 15mt.<br/>- Indicador de problema.<br/>- Ajuste de rango de micro-ondas." })}>
              <img className='product-image' src={require("../../../assets/Productos/rk815.jpg")} alt="Logo 3" />
              <span className='product-title'>Infrarrojo Rokonet RK-815 Grado 3.</span>
            </div>

            <div className='product-card' onClick={() => handleProductClick({ title: "Infrarrojo Rokonet RK150 Grado 3.", image: "rk150.jpg", description: "Los detectores lunares DT reducen dramáticamente las falsas alarmas a través de la combinación de la tecnología pasiva y micro-ondas, las cuales verifican una intrusión antes de generar la activación.<br/>- Tecnología dual MW + PIR.<br/>- Compensación real de temperatura patentada.<br/>- Ajuste de rango de micro-ondas.<br/>- Inmunidad superior RFI." })}>
              <img className='product-image' src={require("../../../assets/Productos/rk150.jpg")} alt="Logo 3" />
              <span className='product-title'>Infrarrojo Rokonet RK150 Grado 3.</span>
            </div>

            <div className='product-card' onClick={() => handleProductClick({ title: "Infrarrojo Lunar industrial Rokonet RK200 Grado 3.", image: "rk200.jpg", description: "Este infrarrojo logra captar intrusos y detectar movimiento inclusive en ambientes con alta temperatura. Diseñado para operar en cualquier ambiente industrial, éste sensor robusto ofrece alta seguridad para bodegas o fábricas donde existen condiciones extremas.<br/><br/><strong>Características:</strong><br/>- Cubrimiento personalizable con tres lentes independientes y ajustables.<br/>- Tecnología anti-enmascaramiento detecta intrusos camuflados.<br/>- Se puede instalar en sitios hasta de 8,6 mt de altura.<br/>- Tecnología dual direccionable con Anti-enmascaramiento.<br/>- Cubrimiento de 360 grados por 18 mt de diámetro.<br/>- Tres canales ajustables e independientes para cubrimiento personalizado.<br/>- Tecnología IR anti-burla en los tres lentes." })}>
              <img className='product-image' src={require("../../../assets/Productos/rk200.jpg")} alt="Logo 3" />
              <span className='product-title'>Infrarrojo Lunar industrial Rokonet RK200 Grado 3.</span>
            </div>

            <div className='product-card' onClick={() => handleProductClick({
              title: "Infrarrojo para exteriores Rokonet Watchout RK315DT.", image: "rk315.jpg", description: "Este equipo ha ganado varios premios por su desempeño en ambientes exteriores. Este equipo provee una mejor protección las 24 horas del día en contra de vandalismo, a través de la tecnología activa IR anti-enmascaramiento y alerta de proximidad.<br/><br/><strong>Características:</strong><br/>- 4 canales de detección: 2 Micro-ondas y 2 PIR.<br/>- Cubrimiento: Gran angular: 15 mt 90°, Largo alcance: 23 mt 5°, Barrera: 15 mt 5°.<br/>- Tecnología antimascotas hasta 70cm de altura. Cubierta de protección y rango IP65 para ambientes exteriores.<br/>- El WatchOUT DualTech tiene la habilidad de reconocer y distinguir entre una intrusión real y las numerosas falsas alarmas causadas en el inestable ambiente exterior. Este equipo utiliza tecnología de reconocimiento selectivo a través del sistema Sway Recognition Technology, usando dos canales de micro-ondas para reconocer y excluir objetos que afectan, como arbustos y ramas de árboles.<br/>- Otra característica del WatchOUT DualTech es el anti-enmascaramiento, el cual se alcanza a través de cuatro (4) canales activos IR que continuamente monitorean y advierten si hay algún intento de bloquear o sabotear el lente del equipo. Adicionalmente, el equipo envía una señal cuando se requiere limpiar el lente."
            })}>
              <img className='product-image' src={require("../../../assets/Productos/rk315.jpg")} alt="Logo 3" />
              <span className='product-title'>Infrarrojo para exteriores Rokonet Watchout RK315DT.</span>
            </div>

            <div className='product-card' onClick={() => handleProductClick({ title: "Honeywell 5800 PIR.", image: "5800pir.jpg", description: "Este Detector de Movimiento es inalámbrico y tiene tecnología anti-mascota.<br/>Tiene capacidad de detectar animales hasta de 80 Lbs. Gatos y Perros no serán detectados por éste equipo.<br/>El rango de éste detector es de 35 x 40 pies, lo cual cubre un gran espacio y la batería dura hasta 5 años." })}>
              <img className='product-image' src={require("../../../assets/Productos/5800pir.jpg")} alt="Logo 3" />
              <span className='product-title'>Honeywell 5800 PIR.</span>
            </div>

          </div>
        )}
        {selectedSection === "otros" && (
          <div className={`section`}>
            <div className='product-card' onClick={() => handleProductClick({ title: "VISTA-32FBPT otros", image: "producto1.png", description: "Este panel de alarma combina las funciones de detección de incendio e intrusión." })}>
              <img className='product-image' src={require("../../../assets/Productos/producto1.png")} alt="Logo 3" />
              <span className='product-title'>VISTA-32FBPT otros</span>
            </div>
          </div>
        )}
        {selectedSection === "acceso" && (
          <div>
            <div className='separator'>
              <h1 className='text'>Proximidad</h1>
            </div>
            <div className={`section`}>

              <div className='product-card' onClick={() => handleProductClick({ title: "ProID 10", image: "proid10.jpg", description: "La serie de lectores ProID está diseñada para ofrecer diferentes opciones de tecnologías en tarjetas a los clientes, tales como 125KHz EM, 13.56MHz IC, DESFire, FeliCa o Legic. Con una robusta protección a todo tipo de clima y un estético y moderno diseño, la serie de lectores ProID es la mejor opción para aplicaciones en interior o exterior." })}>
                <img className='product-image' src={require("../../../assets/Productos/proid10.jpg")} alt="Logo 3" />
                <span className='product-title'>ProID 10</span>
              </div>
              <div className='product-card' onClick={() => handleProductClick({ title: "ProID 20", image: "proid20.jpg", description: "La serie de lectores ProID está diseñada para ofrecer diferentes opciones de tecnologías en tarjetas a los clientes, tales como 125KHz EM, 13.56MHz IC, DESFire, FeliCa o Legic. Con una robusta protección a todo tipo de clima y un estético y moderno diseño, la serie de lectores ProID es la mejor opción para aplicaciones en interior o exterior." })}>
                <img className='product-image' src={require("../../../assets/Productos/proid20.jpg")} alt="Logo 3" />
                <span className='product-title'>ProID 20</span>
              </div>
              <div className='product-card' onClick={() => handleProductClick({ title: "ProID 30", image: "proid10.jpg", description: "La serie de lectores ProID está diseñada para ofrecer diferentes opciones de tecnologías en tarjetas a los clientes, tales como 125KHz EM, 13.56MHz IC, DESFire, FeliCa o Legic. Con una robusta protección a todo tipo de clima y un estético y moderno diseño, la serie de lectores ProID es la mejor opción para aplicaciones en interior o exterior." })}>
                <img className='product-image' src={require("../../../assets/Productos/proid30.jpg")} alt="Logo 3" />
                <span className='product-title'>ProID 30</span>
              </div>
            </div>
            <div className='separator-left'>
              <h1 className='text'>Biometricas</h1>
            </div>
            <div className={`section`}>
              <div className='product-card' onClick={() => handleProductClick({ title: "Fr 1200", image: "fr1200.jpg", description: "El FR1200 es un lector biométrico compacto de huella digital con lector de tarjetas ID integrado para su uso en interiores o exteriores." })}>
                <img className='product-image' src={require("../../../assets/Productos/fr1200.jpg")} alt="Logo 3" />
                <span className='product-title'>Fr 1200</span>
              </div>
              <div className='product-card' onClick={() => handleProductClick({ title: "SpeedFace-V3L", image: "speedfacev3l.png", description: "El dispositivo de la serie es un terminal independiente de control de acceso de cara de luz visible de metal que puede ser utilizado en un espacio semiabierto. SpeedFace-V3L es compatible con RFID de verificación facial y de huellas dactilares y RFID con gran capacidad y rápido reconocimiento." })}>
                <img className='product-image' src={require("../../../assets/Productos/speedfacev3l.png")} alt="Logo 3" />
                <span className='product-title'>SpeedFace-V3L</span>
              </div>
            </div>
            <div className='separator'>
              <h1 className='text'>Torniquetes</h1>
            </div>
            <div className={`section`}>
              <div className='product-card' onClick={() => handleProductClick({ title: "Serie TS2200", image: "ts2200.jpg", description: "La serie TS2200, fabricada en accero inoxidable, opera al reducir la señal desde el controlador de acceso a un botón permitiendo el acceso de una persona a la vez o puede permitir el acceso libre en alguan dirección ajustando el mecanismo." })}>
                <img className='product-image' src={require("../../../assets/Productos/ts2200.jpg")} alt="Logo 3" />
                <span className='product-title'>Serie TS2200</span>
              </div>
            </div>
          </div>)}
        {selectedSection === "cctv" && (
          <div className={`section`}>
            <div className='product-card' onClick={() => handleProductClick({ title: "VISTA-32FBPT otros", image: "producto1.png", description: "Este panel de alarma combina las funciones de detección de incendio e intrusión." })}>
              <img className='product-image' src={require("../../../assets/Productos/producto1.png")} alt="Logo 3" />
              <span className='product-title'>VISTA-32FBPT otros</span>
            </div>
          </div>
        )}
      </div>
      {isPopupOpen && selectedProduct && (
        <div className='popup-overlay' onClick={() => setIsPopupOpen(false)}>

          <div className="product-card-info" onClick={(e) => e.stopPropagation()}>
            <img className='product-card-image' src={require(`../../../assets/Productos/${selectedProduct.image}`)} alt="Logo 3" />

            <div className="product-info">
              <span className='product-card-title'>{selectedProduct.title}</span>
              <span className='product-description' dangerouslySetInnerHTML={{ __html: selectedProduct.description }}></span>
            </div>
            <button className='close-button' onClick={() => setIsPopupOpen(false)}>x</button>
          </div>
        </div>
      )}

    </div>
  );
}

export default Productos;