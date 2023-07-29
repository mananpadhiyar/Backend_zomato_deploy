const menuItemModel = require("../model/menuitemModel")


module.exports.getMenuItemsByRestaurantId = async (request , response) => {
 
    let {r_id} = request.params

  try {
     
    let menuItemList = await menuItemModel.find({restaurantId : r_id})

    let sendData = {

       status : menuItemList.length === 0 ? false : true,
       list : menuItemList
    }
          
    response.send(sendData)


  } catch (error) {
    
     let errorObj = {

        status : false , error
     }

     response.send(errorObj)

  }


}