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
        <img className={`section-button ${selectedSection === "control" ? "selected" : ""}`} onClick={() => handleSectionClick("control")} src={require("../../../assets/control_acceso_blanco_btn.png")} alt="Logo 3" />
        <img className={`section-button ${selectedSection === "otros" ? "selected" : ""}`} onClick={() => handleSectionClick("otros")} src={require("../../../assets/otros_blanco_btn.png")} alt="Logo 3" />

      </div>
      <div className="main-content">
        <div className='toggle-container'>
          {isMobile && (
            <button className='toggle-sidebar' onClick={() => toggleMenu()}>&#9776;</button>
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
        {selectedSection === "control" && (
          <div className={`section`}>
            <div className='product-card' onClick={() => handleProductClick({ title: "VISTA-32FBPT otros", image: "producto1.png", description: "Este panel de alarma combina las funciones de detección de incendio e intrusión." })}>
              <img className='product-image' src={require("../../../assets/Productos/producto1.png")} alt="Logo 3" />
              <span className='product-title'>VISTA-32FBPT otros</span>
            </div>
          </div>
        )}
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