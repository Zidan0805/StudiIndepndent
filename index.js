var express = require('express');
var app = express();
var pool = require('./queries.js');

app.get('/actor', (req, res) => {
    pool.query('SELECT * FROM actor',(err, result) => {
        if(err) {
            throw err;
        }
        res.send(result.rows);
    })
})

app.get('/film', (req, res) => {
    pool.query('SELECT * FROM film',(err, result) => {
        if(err) {
            throw err;
        }
        res.send(result.rows);
    })
})

app.get('/film/:id', (req, res) => {
    const id = parseInt(req.params.id)
    pool.query('SELECT * FROM film WHERE id = $1', [id], (err, result) => {
        if(err) {
            throw err;
        }
        res.send(result.rows);
    })
})

app.get('/category', (req, res) => {
    pool.query('SELECT * FROM category',(err, result) => {
        if(err) {
            throw err;
        }
        res.send(result.rows);
    })
})

pool.connect((err, res) => {
    console.log(err);
    console.log('connected');
});

app.listen(3000);