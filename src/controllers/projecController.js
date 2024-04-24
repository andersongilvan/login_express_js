import express from 'express'
import { authMiddleware } from '../middlewares/auth.js'



const routerPriv = express.Router()

routerPriv.use(authMiddleware)

routerPriv.get('/', (req, res) => {
    res.send({ ok: true })
})

export default routerPriv