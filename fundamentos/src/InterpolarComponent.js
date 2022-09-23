import React from 'react'

export const InterpolarComponent = () => {

    const libros = ['Harry Potter', 'GOT', 'Clean Code'];

    return (
        <div>
            <h2>Interpolando variables, condicionales y bucles</h2>
            {/* Recorremos el array con map que accede a los indices de los elementos de manera mas sencilla que un forEach y agregamos una condicion para chequear que haya libros dentro del array */}

            {/* Si se cumple la condición */}
            {libros.length >= 1 ? 
            (
            <ul>
                { libros.map((libro, indice) => {
                    return <li key={indice}>{libro}</li>
                })}
            </ul>
            )
            : (<p> No hay libros</p>)
            }
        </div>
    )
}
