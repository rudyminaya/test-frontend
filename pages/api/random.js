// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

export default async function handler(req, res) {
    let enlace = ''
    const { nombre, apellido } = req.query

    if (nombre && apellido && nombre.length > 0 && apellido.length > 0) {
        enlace = `http://localhost:5000/random/${nombre}/${apellido}`
    } else {
        enlace = 'http://localhost:5000/random'
    }

    const randomData = await axios.get(enlace).then((response) => response.data)
    res.json(randomData)

    console.log(randomData)
}
