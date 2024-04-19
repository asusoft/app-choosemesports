import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { getUserByQuery } from '../database/get-user-by-query.js';

dotenv.config()

const { JWT_SECRET } = process.env;

export const  getToken = (user) => jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '30 days' })

export const getUserFromToken= async (token, db) => {
    if(!token) { return null}
    const tokenData = jwt.verify(token, JWT_SECRET)

    if(!tokenData.id) {
        return null
    }

    return await getUserByQuery("id", tokenData.id, db)
}