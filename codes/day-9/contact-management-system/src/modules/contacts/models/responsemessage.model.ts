import { Contact } from "./contact.model";

export interface ResponseMessage {
    code: number;
    data?: Contact | Contact[] | string | null;
    errormessage?: string;
}