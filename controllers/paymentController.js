const Razorpay = require('razorpay');
let crypto = require("crypto");
const orderModel = require('../model/orderModel');
 
const KEY_ID = "rzp_test_RB0WElnRLezVJ5";
const KEY_SECRET = "VLMCIrqKxRMNR9EcRcbL2UG8";

const instance = new Razorpay({
    key_id: KEY_ID,
    key_secret: KEY_SECRET,
  });


  module.exports.genOrderDetails = (request , response) => {

 let { amount } = request.body

    let options = {
        amount: amount * 100,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
      };
      instance.orders.create(options, (error , order) =>  {
         
        if(error){
       
            let errorObj = {

                status : false , error
            }

            response.status(500).send(errorObj)

        }

        else {

         let sendData = {

            status : true,
            order
         }

         response.status(200).send(sendData)

        }

      });

  }



  module.exports.verifyPayment = async (request , response) => {


     let {pay_id , order_id , signature} = request.body
  
     let data = request.body

    let payment_data =  order_id + "|" + pay_id ;
    
    
    let serverSignature = crypto.createHmac('sha256', KEY_SECRET)
                                    .update(payment_data.toString())
                                    .digest('hex');
                                    console.log("sig received " , signature);
                                    console.log("sig generated ", serverSignature);
        
        if(serverSignature === signature){

             await saveOrders(data)
             
            response.send({

                status : true
            })
        }
        else {

            response.send({

                status : false
            })


        }

  }


const saveOrders = async(data) => {


  let saveData = {


    pay_id : data.pay_id,
    order_id : data.order_id ,
    signature : data.signature,
    order : data.order ,
    name : data.name,
    email :data.email,
    mobile : data.mobile,
    address : data.address,
    totalAmount : data.amount,
    res_id : data.res_id,
    res_name : data.res_name
  }


//   save data in db

let newOrder = new orderModel(saveData)

let result = await newOrder.save()

if(result) {

    return true
}else {

    return false
}


}