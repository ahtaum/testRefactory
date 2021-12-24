import mongoose from 'mongoose'
const Schema = mongoose.Schema

const adminSchema = new Schema({
    username: String,
    googleId: String
})

const Admin = mongoose.model('admin', adminSchema)

export default Admin