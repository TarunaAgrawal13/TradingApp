const {model} = require("mongoose");

const{positionschema} = require("../schemas/positionschema");

const positionModel = new model("position",positionschema);

module.exports={positionModel};
