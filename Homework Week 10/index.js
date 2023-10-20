const express = require('express')
const app = express()
const multer = require('multer')
const path = require('path')
const pool = require('./models/connection')

pool.connect((err, res) => {
    console.log(err)
    console.log('connected')
})

app.use('/upload', express.static(path.join(__dirname, 'upload')));

const diskStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, 'upload'))
    },
    filename: function(req, file, cb) {
        cb(
            null,
            file.filename + '-' + Date.now() + path.extname(file.originalname)
        )
    },
});

app.put(
    '/upload',
    multer({ storage: diskStorage }).single('photo'),
    (req, res) => {
        const file = req.file.path;
        console.log(file)
        if (!file) {
            res.status(400).send({
                status: false,
                data: 'No File is Selected.',
            })
        }
        res.send(file);
    }
)

app.listen(3000)