import { contacts } from "src/repository/contacts-repository";
import { Contact } from "../models/contact.model";

export class ContactsService {
    getContacts(): Contact[] {
        return [...contacts]
    }
}