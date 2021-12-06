import { Allow } from "class-validator"
import { readUsers, saveUser } from "../dao/authDao"
import { User } from "../models/user"

export const addUser = async (userData: User): Promise<string> => {
    const all = await readUsers()

    if (all.length > 0) {
        const user = all.find(u => u.email === userData.email)
        if (user) {
            //throw new Error('already registered')
            return Promise.reject('already registered')
        } else {
            all.push(userData)
            return saveUser(all)
        }
    }
    else {
        all.push(userData)
        return saveUser(all)
    }
}
export const checkUser = async (userData: User): Promise<User> => {
    const all = await readUsers()
    if (all.length > 0) {
        const user = all.find(u => u.email === userData.email)
        if (!user) {
            //throw new Error('email does not match')
            return Promise.reject('email does not match')
        } else if (user.password !== userData.password) {
            //throw new Error('password does not match')
            return Promise.reject('password does not match')
        } else {
            return user;
        }
    } else {
        // throw new Error('not registered')
        Promise.reject('not registered')
    }

}