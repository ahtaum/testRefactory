import express from "express";
import passport from "passport"
import { getData, addData, home, login } from "../controllers/Dataku.js"

const router = express.Router()

router.get('/mahasiswa', getData)
router.post('/', addData)

router.get('/', home)
router.get('/login', login)
router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/auth')
})

// OAUtH2 GOOGLE
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/profile/')
});

export default router