import Data from "../models/dataku.model.js"

export let getData = async (req, res) => {
    try {
        const data = await Data.find()
        res.send(data)
    } catch(err) {
        res.status(500).send({ message: err.message || `Error saat Menampilkan Data` })
    }
}

export let addData = async (req, res) => {
    const dataku = {
        judul: req.body.judul,
        penulis: req.body.penulis,
        blog: req.body.body
    }

    Data.create(dataku).then((hasil) => {
        res.send(hasil)
    }).catch((err) => {
        res.status(409).send({
            message: err.message || `Error saat menambahkan data`
        })
    })
}

// VIEW
export let home = (req, res) => {
    res.render('home', { user: req.user })
}

export let profile = (req, res) => {
    res.render('profile', { user: req.user })
}

export let login = (req, res) => {
    res.render('login', { user: req.user })
}