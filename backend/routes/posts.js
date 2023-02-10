const router = require('express').Router()
const { getAll } = require('../controllers/posts')

router.get("/user/:id", getAll)

module.exports = router;