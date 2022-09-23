import React from "react";


const ManualComponent = () => {

    {/* Muestro datos del componente en la vista o template */}
    let nombre = 'Niko';
    let web = 'nikoseguro.com'

    let usuario = {
        contenido: 'Portfolio personal',
        contacto: 'hello@nikoseguro.com'

    }

    {/* Agrego fragment para sumar etiquetas */}
    return (
        <>
            <h1>Componente manual</h1>
            <p>Datos desde variables:</p>
            <ul>
                {/* Con varibles */}
                <li>Nombre: {nombre}</li>
                <li>Sitio web: {web}</li>
            </ul>
            <p>Dato desde objeto: </p>
            <ul>
                <li>Contenido del sitio: {usuario.contenido} </li>
                <li>Contacto: {usuario.contacto}</li>
            </ul>

        </>
    );
}

export default ManualComponent