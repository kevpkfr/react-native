import React from 'react'

interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion:Direccion;

}

interface Direccion{
    pais:string;
    casaNo: number;

}


export const ObjetosLiterales = () => {

    const persona: Persona={
        nombreCompleto: 'kevin',
        edad: 35,
        direccion: {
            pais: 'canada',
            casaNo: 655
        }
    }



    return (
        <>
            <>Objetos Literales</>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </>
    )
}
