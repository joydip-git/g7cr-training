import { readFile, writeFile } from "fs"
import { Contact } from "../models/contact"

// const FILE_PATH = process.env.FILE_PATH

export const readRecords = (): Promise<Contact[]> => {
    const p = new Promise<Contact[]>(
        (resolveFn, rejectFn) => {
            readFile(process.env.FILE_PATH, (err, data) => {
                if (err) {
                    rejectFn('could not get records...try later')
                }

                if (data) {
                    const all = <Contact[]>JSON.parse(data.toString())
                    //console.log(all)
                    resolveFn(all)
                }
            })
        }
    )
    return p
}

export const saveRecords = (contacts: Contact[]): Promise<string> => {
    const p = new Promise<string>(
        (resolveFn, rejectFn) => {
            
            writeFile(
                process.env.FILE_PATH,
                JSON.stringify(contacts),
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