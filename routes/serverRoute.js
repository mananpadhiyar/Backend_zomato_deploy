const express = require('express')

const serverRoute = express.Router()

const restaurantController = require("../controllers/restaurantController")
const locationController = require("../controllers/locationController")
const mealTypeController = require("../controllers/mealTypeController")
const menuitemController = require("../controllers/menuitemController")
const paymentController = require("../controllers/paymentController")

serverRoute.get('/api/get-restaurant-list' , restaurantController.getRestuarantList )

serverRoute.get("/api/get-location-list" , locationController.locationList)

serverRoute.get("/api/get-mealtype-list" , mealTypeController.getMealTypeList)
serverRoute.get("/api/get-restaurant-list-res-id/:id" , restaurantController.getRestaurantByRestId)

serverRoute.get("/api/get-menuitem-list-by-res-id/:r_id" , menuitemController.getMenuItemsByRestaurantId)

serverRoute.post('/api/filter' , restaurantController.filter )

// payment

serverRoute.post('/api/gen-order-details' , paymentController.genOrderDetails)

serverRoute.post('/api/verify-payment' , paymentController.verifyPayment)

module.exports = serverRoute