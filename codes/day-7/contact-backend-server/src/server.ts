import * as express from 'express'
import * as dotenv from 'dotenv'
import routerMiddleware from './routes/apiroutes'
import { serve, setup } from 'swagger-ui-express'
import swaggerJSDoc = require('swagger-jsdoc')
import * as cors from 'cors'

const defs = {
    swaggerDefinition: {
        openApi: '3.0.1',
        info: {
            title: 'contact',
            version: '1.0.0',
            description: 'contact server apis'
        },
        basePath: '/',
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'jwt'
                }
            }
        },
        security: [{
            bearerAuth: [],
        }]
    },
    apis: ['./routes/apiroutes.ts']
}

const obj = swaggerJSDoc(defs)

dotenv.config()
const PORT = process.env.PORT

//creating express server
const app = express()

//creating json parser middleware
const jsonParserMiddleware = express.json()
const corsMiddleware = cors({ origin: '*', methods: '*' })

//registering middleware with the express middleware pipeline
app.use('/apidocs', serve, setup(obj))
app.use(corsMiddleware)
app.use(jsonParserMiddleware)
app.use(routerMiddleware)

//starting the server, so that it can start listening to port 3002
app.listen(PORT, () => {
    console.log(`server is listenning on port ${PORT}`)
})
