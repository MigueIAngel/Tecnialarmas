import React from 'react';
import '../../Presentation/css/MedioAmbiente.css'
function MedioAmbiente() {
    return (
        <div className='medio-ambiente-container'>
            <div className='banner'>
                <img src={require("../../../assets/MedioAmbiente/medio-ambiente.png")} alt="Banner" />
            </div>
            <div className='green-title-container'>
                <div className='green-title'>
                    Baterías Performance y el medio ambiente
                </div>
                <div className='texto-central-medio-ambiente'>
                    <p>
                        BATERIAS PERFORMANCE cuenta con un sistema de Gestión de los Residuos Peligrosos lo cual representa
                        para nuestra empresa, un tema de interés que va mas allá de velar por el cumplimiento de la normatividad
                        ambiental vigente por parte de los generadores, si bien tenemos obligaciones en el ejercicio de control y seguimiento,
                        entendemos que la disminución de la generación de estos residuos no es posible sino se trabaja de
                        manera conjunta entre todos los actores: industria, autoridades, sector académico, etc.
                    </p>
                    <p>
                        En este sentido nuestra empresa elaboró su Plan de Residuos o Desechos Peligrosos con el objetivo de prevenir
                        y minimizar la generación de los mismos y promover el manejo ambientalmente adecuado de los que se
                        generen, con el fin de minimizar los riesgos sobre la salud humana y el ambiente contribuyendo al desarrollo
                        sostenible.
                    </p>
                    <p>
                        BATERIAS PERFORMANCE realiza un manejo responsable con respecto a los residuos de acumuladores desechados
                        por el consumidor para lo cual cuenta con un lugar acondicionado para tal fin de manera segura y
                        ambientalmente adecuado, con el objeto de facilitar su recolección, clasificación y cualquier actividad ,este
                        lugar se denomina Centro de Acopio.
                    </p>
                </div>
            </div>

            <div className='green-title-container' style={{ textAlign: 'right' }}>
                <div className='green-title'>
                    Conciencia Ambiental
                </div>
                <div className='texto-central-medio-ambiente'>
                    Garantizamos en el territorio Colombiano el servicio de recolección y la adecuada disposición de las baterías
                    usadas de plomo-ácido.
                </div>
            </div>

        </div>
    );
}

export default MedioAmbiente;
