const mongoose = require("mongoose")

const objId = mongoose.Schema.Types.ObjectId

const menuItemSchema = new mongoose.Schema({

 
        "name": {type : String},
        "description":  {type : String},
        "ingridients": {type : Array},
        "restaurantId": {type : objId},
        "image": {type : String},
        "qty":{type : Number},
        "price": {type : Number} 


})


const menuItemModel = mongoose.model("menuItems" , menuItemSchema , "menuitems" )

module.exports = menuItemModel

// mistake in database of menuItem => price is in string that why we facing problem