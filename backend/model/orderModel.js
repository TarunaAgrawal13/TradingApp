const {model} = require("mongoose");

const {orderschema} = require("../schemas/orderschema");

const orderModel = new model("order",orderschema);

module.exports={orderModel};