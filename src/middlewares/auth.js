/*
import jsonwebToken from 'jsonwebtoken' 
import { secret } from '../config/auth.js'
 
 
 
 export const authMiddleware = (req, res, next) => {
    const authHeaders = req.headers.authorization

    if(!authHeaders)
        return res.status(401).send({ erro: 'token não fornecido' })

    const parts = authHeaders.split(' ')
    if(!parts.length === 2)
        return res.status(401).send({ erro: 'Token erro' })

    const [ scheme, token ] = parts
    if(!/^Bearer$/i.test(scheme))
        return res.status(401).send({ erro: 'Token mal formado' })


    jsonwebToken.verify(token, secret.secret, (err, decoded) => {
        if(err) return res.status(401).send({ erro: 'token inválido' })

        req.userId = decoded.id
        return next()
    })
}
*/