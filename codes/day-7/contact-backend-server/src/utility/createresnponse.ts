import { ResponseModel } from "../models/response.model"

export const createResponse = (code: number, data?: any, err?: string): ResponseModel => {
    return {
        code: code,
        data: data,
        errormessage: err
    }
}