const mongoose = require("mongoose")


const orderSchema = new mongoose.Schema(


    {


        pay_id : {type : String},
        order_id : {type : String},
        signature :{type : String},
        order : {type : Array},
        name : {type : String},
        email : {type : String},
        address : {type : String},
        mobile : {type : String},
        totalAmount : {type : Number},
        res_id : {type : mongoose.Schema.Types.ObjectId},
        res_name : {type : String}

    }
  
)


const orderModel = mongoose.model("orderDetails" , orderSchema , "adv-clone-user-orders")


module.exports = orderModel