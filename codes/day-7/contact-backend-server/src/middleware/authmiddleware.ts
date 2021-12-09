import { User } from "../models/user.model"
import * as jwt from 'jsonwebtoken'
import { createResponse } from "../utility/createresnponse"

export const createToken = (user: User) => {
    const payload = { subject: user.email }
    const token = jwt.sign(payload, 'secret key', { algorithm: 'HS512', expiresIn: 6000 })
    return token;
}

export const verifyTokenHandler = (req, res, next) => {
    if (!req.headers.authorization) {
        res.status(401).json(createResponse(401, null, 'no authorization header'))
    }
    const value = req.headers.authorization;
    if (value === null) {
        res.status(401).json(createResponse(401, null, 'not authorized,'))
    }
    const token = req.headers.authorization.split(' ')[1]
    try {
        const payload: any = jwt.verify(token, 'secret key')
        if (!payload) {
            res.status(401).json(createResponse(401, null, 'not authorized,'))
        }
        // const user = <User>req.body
        // if (user.email !== payload.subject.email) {
        //     res.status(401).json(createResponse(401, null, 'not the same user,'))
        // }
    } catch (err) {
        res.status(401).json(createResponse(401, null, err.message))
    }
    next()
}