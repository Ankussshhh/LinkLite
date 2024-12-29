const mongoose = require("mongoose");

async function connectDB(URL) {
  return mongoose
    .connect(URL)
    .then(() => {
      console.log("Conneted to DataBase");
    })
    .catch((err) => {
      console.log("Error in db: ", err);
    });
}

module.exports = {connectDB};