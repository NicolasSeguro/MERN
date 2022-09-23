import React from 'react'

// export const PropsComponent = (props) => {
export const PropsComponent = ({comunicacion, estado, objeto}) => {
  return (
    <div>
        <h2>Comunicación entre componentes:</h2>
        {/* <ul>
            {/* Utilizando props como parametro si tengo agregado dentro de los () del componente a props
            <li>{props.comunicacion}</li>
            <li>{props.estado}</li>
            <li>{props.objeto.renderiza}</li>
            <li>{props.objeto.cantidad}</li>
        </ul> */}
        <ul>
            {/* Utilizando destructuring para poder obtener como variables independientes las props del componente  */}
            <li>{comunicacion}</li>
            <li>{estado}</li>
            <li>{objeto.renderiza}</li>
            <li>{objeto.cantidad}</li>
        </ul>

        
    </div>
  )
}
