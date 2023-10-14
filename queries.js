const { request, response } = require('express')

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'auliaagustin',
  host: 'localhost',
  database: 'movies',
  password: '',
  port: 5432,
})
const getData = (request, response) => {
  pool.query('SELECT * FROM movies ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getDataById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM movies WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createData = (request, response) => {
  const { id, title, genres, year } = request.body

  pool.query('INSERT INTO movies (id, title, genres, year) VALUES ($1, $2, $3)', [id, title, genres, year], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Data added with ID: ${results.insertId}`)
  })
}

const updateData = (request, response) => {
  const id = parseInt(request.params.id)
  const { title, genres, year } = request.body

  pool.query(
    'UPDATE movies SET title = $1, genres = $2, year = $3 WHERE id = $4',
    [title, genres, year, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Data modified with ID: ${id}`)
    }
  )
}

const deleteData = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM movies WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Data deleted with ID: ${id}`)
  })
}

const paginateData = (request, response) => {
  pool.query(
    `SELECT * FROM movies ${req.query.limit ? 'LIMIT ' + req.query.limit : ''}`,
    (error, results) => {
      if (error) {
        throw error;
      }
      results.json(results.rows);
    }
  );
}

module.exports = {
  getData,
  getDataById,
  createData,
  updateData,
  deleteData,
  paginateData
}
