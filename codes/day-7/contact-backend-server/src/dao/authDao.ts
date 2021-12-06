import { readFile, writeFile } from "fs"
import { User } from "../models/user"

// const FILE_PATH = process.env.FILE_PATH

export const readUsers = (): Promise<User[]> => {
    const p = new Promise<User[]>(
        (resolveFn, rejectFn) => {
            readFile(process.env.FILE_PATH_USERS, (err, data) => {
                if (err) {
                    rejectFn('could not get records...try later')
                }

                if (data) {
                    const all = <User[]>JSON.parse(data.toString())
                    //console.log(all)
                    resolveFn(all)
                }
            })
        }
    )
    return p
}

export const saveUser = (users: User[]): Promise<string> => {
    const p = new Promise<string>(
        (resolveFn, rejectFn) => {

            writeFile(
                process.env.FILE_PATH_USERS,
                JSON.stringify(users),
                (err) => {
                    if (err) {
                        rejectFn('could not write..')

                    } else {
                        resolveFn('success')
                    }
                })
        }
    )
    return p
}