const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    mainURL: {
      type: String,
      require: true,
    },
    shortURL: {
      type: String,
      require: true,
      unique: true,
    },
    visitHistory: [
      {
        timestamp: { type: Number },
      },
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

const URL = mongoose.model("url", urlSchema);
module.exports = URL;
