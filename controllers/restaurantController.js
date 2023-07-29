const restuarantModel = require("../model/restaurantModel");

module.exports.getRestuarantList = async (request, response) => {
  try {
    const listOfRestuarant = await restuarantModel.find();

    let sendData = {
      status: listOfRestuarant.length === 0 ? false : true,
      list: listOfRestuarant,
    };

    response.status(200).send(sendData);
  } catch (error) {
    let errorObj = {
      status: false,
      error,
    };

    response.status(500).send(errorObj);
  }
};

module.exports.getRestaurantByRestId = async (request, response) => {
  let { id } = request.params;

  try {
    let restaurantByResID = await restuarantModel.findById(id);

    let sendData = {
      status: restaurantByResID.length === 0 ? false : true,
      list: restaurantByResID,
    };

    response.status(200).send(sendData);
  } catch (error) {
    let errorObj = {
      status: false,
      error,
    };

    response.send(errorObj);
  }
};

module.exports.filter = async (request, response) => {
  try {
    let { sort, loc_id, cuisine, lCost, hCost, page, mealType } = request.body;

    let filter = {};

    if (loc_id !== undefined) {
      filter["location_id"] = loc_id;
    }
    if (cuisine !== undefined) {
      filter["cuisine_id"] = { $in: cuisine };
    }
    if (lCost !== undefined && hCost !== undefined) {
      filter["min_price"] = { $gt: lCost, $lt: hCost };
    }
    if (mealType !== undefined) {
      filter["mealtype_id"] = mealType;
    }
    const listOfRestuarant = await restuarantModel
      .find(filter)
      .sort({ min_price: sort });
    // .limit(2).skip((page - 1) * 2)

    let sendData = {
      status: listOfRestuarant.length === 0 ? false : true,
      list: listOfRestuarant,
    };

    response.status(200).send(sendData);
  } catch (error) {
    let errorObj = {
      status: false,
      error,
    };

    response.status(500).send(errorObj);
  }
};
