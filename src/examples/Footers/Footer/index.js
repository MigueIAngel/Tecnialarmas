import React from 'react';
import './Footer.css';
import { useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <footer>
      <div className={`footer ${currentPath.includes('medio-ambiente') ? 'green' : ''}`}>
        <div className="footer-column">
          <div className="footer-title">Barranquilla</div>
          <p>Carrera 52 #74-151</p>
          <p>(605)3610101</p>
          <p>(605)3010180</p>
        </div>
        <div className="footer-column">
          <div className="footer-title">Servicios</div>
          <p>Sistemas de alarma Contra intrución.</p>
          <p>CCTV.</p>
          <p>Sistemas de control de acceso.</p>
          <p>Otros equipos periféricos.</p>
          <p>Recomendaciones de seguridad.</p>
        </div>
        <div className="footer-column">
          <div className="footer-title">Nosotros</div>
         
          <p><a href='nosotros' className='footerRef'>Empresa.</a></p>
          <p><a href='home' className='footerRef'>Nuestras marcas.</a></p>
          <p><a href='home' className='footerRef'>Nuestros clientes.</a></p>
          <p><a href='nosotros' className='footerRef'>Nuestras ventajas.</a></p>
        </div>
        <div className="footer-column">
          <div className="footer-title">Redes sociales</div>
          <div className="footer-social"> 
          <a href='https://www.instagram.com/tecnialarmasltda/'><img src={require("../../../assets/Footer/instagram.png")} alt="Instagram" /></a>
           <a href='https://www.facebook.com/tecnialarmasltda/'><img src={require("../../../assets/Footer/facebook.png")} alt="Facebook" /></a> 
            <a href='https://www.linkedin.com/company/tecnialarmas-ltda/about/'><img src={require("../../../assets/Footer/linkedin.png")} alt="linkedin" /></a>
          </div>
        </div>
        <h1 className='footer-disclaimer'><strong>Vigilado por la superintendencia de vigilancia y seguridad privada. Licencia R.#20201310019037 de 01/05/2020</strong></h1>
      </div>



    </footer>
  );
}

export default Footer;
