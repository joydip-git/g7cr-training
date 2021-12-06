import { addContact, deleteContact, fetchContactById, fetchContacts, fetchContactsByName, updateContact } from "../manager/contactmanager"
import { Contact } from "../models/contact"
import { createResponse } from "../utility/createresnponse"

export const getAllContactsHandler = (req, res) => {
    console.log('request received')
    fetchContacts()
        .then(
            (successData) => {
                res.status(200).json(createResponse(200, successData))
            },
            (failureReason) => {
                res.status(500).json(createResponse(500, null, failureReason))
            }
        )
}
export const addContactHandler = (req, res) => {
    const contactData = <Contact>req.body
    console.log(contactData)
    addContact(contactData)
        .then(
            (successMessage) => {
                res.status(201).json(createResponse(201, successMessage))
            },
            (reason) => {
                res.status(500).json(createResponse(500, null, reason))
            }
        )
}
export const getContactByIdHandler = (req, res) => {
    const id = parseInt(req.params.id)
    fetchContactById(id)
        .then(
            (data) => {
                res.status(200).json(createResponse(200, data))
            },
            (err) => {
                res.status(500).json(createResponse(500, null, err))
            }
        )
}

export const fetchContactsByNameHandler = (req, res) => {
    const name = req.query.name;
    console.log(name)
    fetchContactsByName(name)
        .then(
            (data) => {
                console.log(data)
                res.status(200).json(createResponse(200, data))
            },
            (err) => {
                res.status(500).json(createResponse(500, null, err))
            }
        )
}

export const updateContactHandler = (req, res) => {
    const id = parseInt(req.params.id)
    const data = req.body
    updateContact(data, id)
        .then(
            (data) => {
                console.log(data)
                res.status(200).json(createResponse(200, data))
            },
            (err) => {
                res.status(500).json(createResponse(500, null, err))
            }
        )
}

export const deleteContactHandler = (req, res) => {
    const id = parseInt(req.params.id)
    deleteContact(id)
        .then(
            (data) => {
                console.log('success')
                res.status(200).json(createResponse(200, data))
            },
            (err) => {
                res.status(500).json(createResponse(500, null, err))
            }
        )
    // .catch(err => {
    //     res.status(500).json(createResponse(500, null, err))
    // })

}