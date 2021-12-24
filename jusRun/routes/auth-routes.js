import express from "express";
const router = express.Router()
import { profile } from "../controllers/Dataku.js"

const authCheck = (req, res, next) => {
    if (!req.user) {
        res.redirect('/auth/login')
    } else {
        next()
    }
}

router.get('/', authCheck, profile)

export default router