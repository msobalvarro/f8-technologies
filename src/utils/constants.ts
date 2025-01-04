import dotenv from 'dotenv'

dotenv.config()

export const { JWT_SECRET, PUBLIC_FOLDER, PORT, DB } = process.env
