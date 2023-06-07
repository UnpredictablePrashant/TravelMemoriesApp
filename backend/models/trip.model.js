const db = require('../conn').db
const mongoose = require('../conn').mongoose

const tripSchema = mongoose.Schema({
    tripName:{
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    startDateOfJourney: {
        type: String,
        required: true
    },
    endDateOfJourney:{
        type: String,
        required: true
    },
    nameOfHotels: {
        type: String
    },
    placesVisited: {
        type: String
    },
    totalCost:{
        type: Number
    },
    experience:{
        type: String
    },
    image: {
        type: String
    },
    tripType: {
        type: String,
        enum: ['backpacking', 'leisure', 'business']
    },
    featured:{
        type:Boolean
    },
    shortDesc:{
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Trip = mongoose.model('tripdetails', tripSchema)
module.exports = { Trip }