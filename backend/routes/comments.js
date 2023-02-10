const router = require('express').Router()
const { getPostComments, getPostCommentsCount } = require('../controllers/comments')

router.get("/post/:id", getPostComments)
router.get('/post/:id/count', getPostCommentsCount)

module.exports = router;