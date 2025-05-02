// Configuracion de variables de entorno

// Modular | + efectivo

"use strict"

// ECModules | ESModules
import express from 'express' //Servidor HTTP
import cors from 'cors'
import temperatureRoutes from '../src/exercise/exercise.routes.js'

const config = (app) => {
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded(
        {
            extended: false
        }
    ))
}

const routes = (app)=>{
    app.use('/exercise', temperatureRoutes)
}

// ESModules no acepta exports.
export const initServer = async() => {
    const app = express() //Instancia de express
    try {
        config(app)
        routes(app)
        app.listen(process.env.PORT)
        console.log(`Server running in port ${process.env.PORT}`)
    } catch (err) {
        console.log('Server init failed', err)
    }
}