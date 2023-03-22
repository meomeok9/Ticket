const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const historySchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", require: true },
    number: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("History", historySchema);
