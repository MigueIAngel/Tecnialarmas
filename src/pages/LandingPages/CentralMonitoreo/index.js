import React from 'react';
import '../../Presentation/css/CentralMonitoreo.css';
function CentralMonitoreo() {

    return (

        <div className='central-monitoreo'>
            <div className='banner'>
                <img src={require("../../../assets/CentralMonitoreo/central-monitoreo.jpg")} alt="Banner" />
            </div>
            <div className='titulo-central-monitoreo'>
                Central de Monitoreo
            </div>
            <div className='texto-central-monitoreo'>
                <p>La Central de Monitoreo es el espacio físico de la compañía en donde se reciben TODAS las señales provenientes
                    de los sistemas de seguridad instalados en nuestros usuarios. Debido a la información confidencial
                    que allí reposa, el recinto se encuentra blindado y el acceso está restringido.
                </p>
                <p>Las señales o eventos procesados en nuestra Central de Monitoreo se reciben a través de diversos medios de
                    comunicación como son: Vía Telefónica, LPL DEVELOPMENT, Radial AES INTELLINET, LAN /WAN, TCP/IP y
                    GPRS. Estas señales se pueden catalogar en Digitales, Análogas, Audio, Video y Datos.
                </p>
                <p>La estructura básica de nuestra Central de Monitoreo está compuesta de varias Receptoras, Procesadores,
                    Servidores y un Software especializado para el procesamiento de las señales.
                    También cuenta con equipos de soporte como UPS (generadores de energía), Inversores, Plantas Eléctricas,
                    Radios, Celulares, Avantel, Líneas Telefónicas, Sistema de video interno, Control de Acceso y un Sistema de
                    Alarma.
                </p>
                <p>Nuestra Central de Monitoreo se encuentra en contacto permanente con nuestro Aliado FULL PROTECTION
                    Ltda para servicio de Supervisión Motorizada y con los Organismos de Seguridad del Estado para el apoyo
                    oportuno y eficaz a nuestros servicios.
                    Nuestra Central de Monitoreo tiene la posibilidad de prestar servicios de monitoreo a nivel Nacional e Internacional,
                    ya que los medios de comunicación actuales lo permiten.
                </p>
            </div>
        </div>
    );
}

export default CentralMonitoreo;
