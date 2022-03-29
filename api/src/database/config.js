const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("***** CONNECTED SUCCESSFULLY TO MONGODB *****");
  } catch (error) {
    console.log(error);
    throw new Error("***** ERROR CONNECTING TO MONGODB *****");
  }
};

module.exports = {
  dbConnect,
};
