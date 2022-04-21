const mongoose = require("mongoose");

const FavoriteSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    /*products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "flights",
      },
    ],
    //esto de arriba es si la info estuviera estatica en la base de datos, pero como no esta pues xd
    */
    products: [],
  },
  { timestamps: true }
);
//{_id:ObjectId('625fa2286aa21274edb42029')}
module.exports = mongoose.model("Favorite", FavoriteSchema);
