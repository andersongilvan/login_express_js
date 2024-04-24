import express from 'express'

import User from '../models/user.js'
import bcrypt from 'bcrypt'
import jsonwebToken from 'jsonwebtoken'
import { secret } from '../config/auth.js'

const router = express.Router()




router.post('/register', async (req, res) => {
    console.log('AQUI', req.body)

    const { email } = req.body
    try {

        if(await User.findOne({ email }))
            return res.status(400).send({ erro: 'E-mail já cadastrado' })

        const user = await User.create(req.body)

        return res.send({ user })
    } catch (error) {
        console.error('ERRO', error)
        res.status(400).send({ erro: 'falha ao cadastrar' })
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body


    const user = await User.findOne({ email })
    if(!user) 
        return res.status(400).send({ erro: 'Usuario na cadastrado' })

    if(!await bcrypt.compare(password, user.password)) 
        return res.status(400).send({ erro: 'Senha inválida' })

    const token = jsonwebToken.sign({ id: user.id },secret.secret, {
        expiresIn: 259200,
    })    

    res.send({ user, token })
})


export default router