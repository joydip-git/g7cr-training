import { addUser, checkUser } from "../manager/authmanager"
import { createToken } from "../middleware/authmiddleware"
import { User } from "../models/user.model"
import { createResponse } from "../utility/createresnponse"

export const registerUserHandler = (req, res) => {
    const user = <User>req.body
    console.log(user)
    if (user.email && user.email !== '' && user.password && user.password !== '') {
        addUser(user).then(
            (resp) => {
                res.status(201).json(createResponse(201, resp))
            },
            (err) => {
                res.status(500).json(createResponse(500, null, err))
            }
        )
    }
}

export const authenticateUserHandler = (req, res) => {
    const user = <User>req.body
    if (user.email && user.email !== '' && user.password && user.password !== '') {
        checkUser(user).then(
            (resp) => {
                const token = createToken(resp)
                res.status(200).json(createResponse(200, token))
            },
            (err) => {
                res.status(500).json(createResponse(500, null, err))
            }
        )
    }
}