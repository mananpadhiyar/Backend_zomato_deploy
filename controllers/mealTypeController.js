const mealTypeModel = require("../model/mealTypeModel")

module.exports.getMealTypeList = async (request , response) => {
 
  try {

    const listOfMealType = await mealTypeModel.find()

    const sendData = {

        status : listOfMealType.length === 0 ? false : true,
        list : listOfMealType
    }

    response.send(sendData)
    
  } catch (error) {

     const errorObj = {

        status : false , error

     }

     response.send(errorObj)
    
  }

}