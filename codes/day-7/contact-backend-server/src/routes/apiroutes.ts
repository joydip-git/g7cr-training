import { Router } from "express";
import { authenticateUserHandler, registerUserHandler } from "../controller/authcontroller";
import { addContactHandler, deleteContactHandler, fetchContactsByNameHandler, getAllContactsHandler, getContactByIdHandler, updateContactHandler } from "../controller/contactscontroller";
import { verifyTokenHandler } from "../middleware/authmiddleware";

const routerMiddleware = Router()

//configuraing endpoints

routerMiddleware.get('/contacts', verifyTokenHandler, getAllContactsHandler)
routerMiddleware.get('/contact/:id', verifyTokenHandler, getContactByIdHandler)
routerMiddleware.get('/searchcontacts', verifyTokenHandler, fetchContactsByNameHandler)

routerMiddleware.post('/contact/add', verifyTokenHandler, addContactHandler)
routerMiddleware.patch('/contact/update/:id', verifyTokenHandler, updateContactHandler)

routerMiddleware.delete('/contact/delete/:id', verifyTokenHandler, deleteContactHandler)

routerMiddleware.post('/user/authenticate', authenticateUserHandler)
routerMiddleware.post('/user/register', registerUserHandler)

export default routerMiddleware