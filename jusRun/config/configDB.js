import dotenv from 'dotenv'

dotenv.config()

export default {
    google: {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
    },
    mongodb: {
        url: process.env.DB_MONGO_CONFIG
    },
    session: {
        cookieKey: process.env.DB_MONGO_CONFIG
    }
}