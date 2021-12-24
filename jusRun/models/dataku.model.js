import mongoose from 'mongoose'
const Schema = mongoose.Schema

const dataSchema = new Schema({
    judul: String,
    penulis: String,
    blog: String
})

const Dataku = mongoose.model('dataku', dataSchema)

export default Dataku