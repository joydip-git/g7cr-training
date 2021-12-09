import { Schema, model, SchemaTypes } from 'mongoose'
//import { Contact } from '../models/contact.model'
import { User } from '../models/user.model'

const UserSchema = new Schema<User>({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // contactInfo:{
    //     type:SchemaTypes.ObjectId, 
    //     ref:'Contact'
    // }
})

export const UserModel = model<User>('user', UserSchema,'users')