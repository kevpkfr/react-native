import React from 'react'

export const Funciones = () => {

    const sumar =(a:number,b:number) => {
        return a + b;

    }


    return (
        <>
            <h3>Funciones</h3>
            <span>el resultado es: { sumar(1,3)}</span>
        </>
    )
}
