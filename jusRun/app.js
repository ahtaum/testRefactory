import express from "express";
import cors from "cors"
import cookieSession from 'cookie-session'
import passport from 'passport'
import dotenv from "dotenv"
import mongoose from "mongoose"
import keys from "./config/configDB.js"
import router from "./routes/routes.js"
import profileRouter from "./routes/auth-routes.js"
import passportSetup from "./config/passport.setup.js"

dotenv.config()

const app = express()

app.set('view engine', 'ejs')

const corsOption = {
    origin: '*',
    Credential: true,
    optionSuccessStatus: 200
}

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(cors(corsOption))
app.use(express.json())

mongoose.connect(keys.mongodb.url, () => {
    console.log(`Database Terkoneksi!!!`)
})

app.use('/auth', router)
app.use('/profile', profileRouter)

app.listen(5000, () => {
    try {
        console.log(`Berjalan Di http://localhost:5000/auth`)
    } catch (error) {
        console.log(error.message)
    }
})