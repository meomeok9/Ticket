const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resultSchema = new Schema(
  {
    firstPrize: [{ type: String, require: true }],
    secondPrize: [{ type: String, require: true }],
    thirdPrize: [{ type: String, require: true }],
    fourthPrize: [{ type: String, require: true }],
    fifthPrize: [{ type: String, require: true }],
    sixthPrize: [{ type: String, require: true }],
    seventhPrize: [{ type: String, require: true }],
    eighthPrize: [{ type: String, require: true }],
    specialPrize: [{ type: String, require: true }],
  },
  { timestamps: true }
);
module.exports = mongoose.model("Results", resultSchema);
