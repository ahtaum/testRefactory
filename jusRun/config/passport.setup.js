import passport from "passport";
import GoogleStrategy from "passport-google-oauth20"
import dotenv from "dotenv"
import User from "../models/admin.model.js"

dotenv.config()
GoogleStrategy.Strategy

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user)
    }).catch((err) => {
        console.log(err)
    })
})

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: '/auth/google/redirect'
}, (accessToken, refreshToken, profile, done) => {
    User.findOne({googleId: profile.id}).then((currentUser) => {
        if (currentUser) {
            done(null, currentUser)
        } else {
            new User({
                googleId: profile.id,
                username: profile.displayName
            }).save().then((hasil) => {
                done(null, hasil)
            })
        }
    }).catch((err) => {
        console.log(err)
    })
}))

export default passport