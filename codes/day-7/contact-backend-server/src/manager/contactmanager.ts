import { readRecords, saveRecords } from "../dao/contactsDao"
import { Contact } from "../models/contact"

export const fetchContacts = async (): Promise<Contact[] | string> => {
    console.log('fetch called')
    const all = await readRecords()
    return all.length > 0 ? all : 'no records'
}

export const addContact = async (contactData: Contact): Promise<string> => {
    const all = await readRecords()

    if (!contactData.id || contactData.id === 0) {
        const newId = all[all.length - 1].id + 1
        contactData['id'] = newId
    }
    if (all.find(c => c.id === contactData.id)) {
        return 'record exists'
    } else {
        all.push(contactData)
        return saveRecords(all)
    }
}

export const fetchContactById = async (id: number): Promise<Contact> => {
    const all = await readRecords()
    const found = all.find(c => c.id === id)
    if (!found) {
        return Promise.reject('record not found')
    }
    return found
}

export const fetchContactsByName = async (name: string): Promise<Contact[]> => {
    const all = await readRecords()
    const filtered = all.filter(c => c.name.toLowerCase().indexOf(name.toLowerCase()) !== -1)
    if (!filtered || filtered.length === 0) {
        return Promise.reject('no record foud')
    }
    return filtered
}

export const updateContact = async (data: Contact, id: number) => {
    const all = await readRecords()
    const found = all.find(c => c.id === id)

    if (!found) {
        return Promise.reject('record not found')
    } else {
        // for (const propName in data) {
        //     found[propName] = data[propName]
        // }
        const index = all.findIndex(c => c.id === found.id)
        const updatedRecord = { ...found, ...data }
        all.splice(index, 1, updatedRecord)
        return saveRecords(all)
    }
}

export const deleteContact = async (id: number) => {
    const all = await readRecords()
    const index = all.findIndex(c => c.id === id)
    if (index === -1) {
        throw new Error('record not found')
    } else {
        all.splice(index, 1)
        return saveRecords(all)
    }
}

