import { Contact } from "./contact.model";

export interface User {
    email: string;
    password: string;
    contactInfo?: Contact;
}