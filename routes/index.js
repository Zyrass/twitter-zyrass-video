const router = require("express").Router()
const myController = require("../controllers")

router.get("/", myController.getIndex)
router.get("/tweets", myController.getTweets)
router.get("/tweets/new", myController.getTweetForm)

router.post("/tweets/new/traitement", myController.postTweetForm)

module.exports = router

/**
 * =============================================================================
 * ROUTES INDEX
 * =============================================================================
 */