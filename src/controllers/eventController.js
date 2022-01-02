'user strict'

const eventData = require('../data/events')

const getEvents = async (req, res, next) => {
    try{
        const events = await eventData.getEvents();
        res.send(events);
    }
    catch(err){
        res.status(400).send(error.message)
    }
}

module.exports = {
    getEvents
}