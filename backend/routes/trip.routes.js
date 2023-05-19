const express = require('express')
const routes = express.Router()

const tripDetails = require('../controllers/trip.controller')

routes.post('/', tripDetails.tripAdditionController)

module.exports = routes