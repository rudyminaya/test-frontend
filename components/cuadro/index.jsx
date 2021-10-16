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
            enlace = `http://localhost:5000/random/${nombre}/${apellido}`
        } else {
            enlace = 'http://localhost:5000/random'
        }

        fetch(enlace)
            .then((res) => res.json())
            .then((data) => {
                setResultado(`${data.nombre} ${data.correo} ${data.telefono}`)
            })
    }

    return (
        <form onSubmit={consulta} className={styles.contenedor}>
            <div className={styles.etiqueta}>
                <label htmlFor="">Nombre</label>
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
                <label htmlFor="">Apellido</label>
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
