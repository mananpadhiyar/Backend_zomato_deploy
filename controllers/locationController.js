const locationModel = require("../model/locationModel")

module.exports.locationList = async (request , response) => {

try {

    const listOfLocation = await locationModel.find()

    let sendData = {

        status : listOfLocation.length === 0 ? false : true ,
        list : listOfLocation
    }

    response.status(200).send(sendData)
    
} catch (error) {

    let errorObj = {
         
        status : false , error

    }
    
    response.status(500).send(errorObj)
}


}