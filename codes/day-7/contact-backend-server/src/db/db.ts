import * as mongoose from 'mongoose'
import { UserModel } from './user';

export const connectDb = (mongoUrl: string) => {
    mongoose.connect(mongoUrl)
        .then(() => { console.log('mongodb connected'); console.log(UserModel.db) })
        .catch((e) => console.log(e))
}