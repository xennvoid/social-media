const db = require("../config/db");

const getAllUsers = (req, res) => {

    const query = `SELECT * FROM users`;

    db.query(query, (err, data) => {

        if (data.length === 0) return res.status(204).json([]);

        return res.status(200).json(data);
    })
}

module.exports = { getAllUsers };