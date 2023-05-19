const tripModel = require('../models/trip.model')

async function tripAdditionController(req,res){
    console.log(req.body)
    try{
        let tripDetail = tripModel.Trip({
            tripName: req.body.tripName,
            startDateOfJourney: req.body.startDateOfJourney,
            endDateOfJourney: req.body.endDateOfJourney,
            nameOfHotels: req.body.nameOfHotels,
            placesVisited: req.body.placesVisited,
            totalCost: req.body.totalCost,
            experience: req.body.experience,
            image: req.body.image,
            tripType: req.body.tripType
        })
        await tripDetail.save()
        res.send('Trip added successfully')           

    }catch(error){
        console.error('ERROR')
        res.send('Something went Wrong')
    }   
}

async function getTripDetailsController(req,res){
    try{
        tripModel.Trip.find({})
        .then(doc => res.send(doc))
        .catch(err => res.send('SOMETHING WENT WRONG'))
    }catch(error){
        console.error('ERROR')
        res.send('Something went Wrong')
    }
}

async function getTripDetailsByIdController(req,res){
    try{
        tripModel.Trip.findById(req.params.id)
        .then(doc => res.send(doc))
        .catch(err => res.send('SOMETHING WENT WRONG'))

    }catch(error){
        console.error('ERROR')
        res.send('Something went Wrong')
    }
}

module.exports = { tripAdditionController, getTripDetailsController, getTripDetailsByIdController }