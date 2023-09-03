const express = require('express')
const router = express.Router()
const appController = require('../controllers/appController')

router.get('/api/new-trend', appController.newTrend)
router.get('/api/trend-noun', appController.trendNoun)
router.get('/api/trend-adjective', appController.trendAdjective)

module.exports = router