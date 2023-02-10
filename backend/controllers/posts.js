const db = require('../config/db')
const jwt = require('jsonwebtoken')
require('dotenv').config({ path: './config.env' })

const getAll = async (req, res) => {

    const { id } = req.params
    const token = req.headers['x-access-token']

    if (!token) return res.status(401).json("You are not logged in");

    jwt.verify(token, process.env.SECRET_KEY, (err, userData) => {

        const query = `SELECT p.*, u.name as userName, u.profileImage FROM posts AS p INNER JOIN users AS u ON (p.userId = u.id) WHERE p.userId = ? ORDER BY p.createdAt DESC`

        db.query(query, id, (err, result) => {

            if (err)
                return res.status(500).json(err)

            if (result.length === 0)
                return res.status(204).json(`User with id ${id} has no own posts`)

            return res.status(200).json(result)
        })
    })
}

module.exports = { getAll }