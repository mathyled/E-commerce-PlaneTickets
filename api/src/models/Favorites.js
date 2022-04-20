const mongoose = require("mongoose");

const FavoriteSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "flights",
      },
    ],
  },
  { timestamps: true }
);
//{_id:ObjectId('625fa2286aa21274edb42029')}
module.exports = mongoose.model("Favorite", FavoriteSchema);
