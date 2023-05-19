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

    }   
}

module.exports = { tripAdditionController }