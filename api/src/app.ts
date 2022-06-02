import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import config from './config'

import videoRoutes from './routes/videos.routes'

const app = express()

app.set('port', config.PORT)

app.use(morgan('dev'))
app.use(cors())
//permite conectarse/hacer peticiones a cualquier servidor
app.use(express.json()) 
//entender/leer los objetos json
app.use(express.urlencoded({extended: false}))
// entender/leer los campos que vienen en las peticiones post

app.use(videoRoutes)

export default app