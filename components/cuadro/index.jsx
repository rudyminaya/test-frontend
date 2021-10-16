import React, { useState } from 'react'
import Boton from '../boton'
import styles from './cuadro.module.css'

const Cuadro = () => {
    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [resultado, setResultado] = useState('')

    const consulta = (e) => {
        e.preventDefault()

        let enlace = ''

        if (nombre.length > 0 && apellido.length > 0) {
            enlace = `/api/random?nombre=${nombre}&apellido=${apellido}`
        } else {
            enlace = '/api/random'
        }

        fetch(enlace)
            .then((res) => res.json())
            .then((data) => {
                setResultado(`${data.nombres} ${data.correo} ${data.telefono}`)
                console.log(resultado)
            })
    }

    return (
        <form onSubmit={consulta} className={styles.contenedor}>
            <div className={styles.etiqueta}>
                <label htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    onChange={(e) => {
                        setNombre(e.target.value)
                    }}
                />
            </div>
            <div className={styles.etiqueta}>
                <label htmlFor="apellido">Apellido</label>
                <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    onChange={(e) => {
                        setApellido(e.target.value)
                    }}
                />
            </div>
            <Boton />
            <p>{resultado}</p>
        </form>
    )
}

export default Cuadro
