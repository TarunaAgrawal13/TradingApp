const {model} = require("mongoose");

const {HoldingSchema} = require("../schemas/HoldingSchema");

const HoldingModel = new model("holding",HoldingSchema);//collection named holdings will be created

module.exports={HoldingModel};