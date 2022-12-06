const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  likedRecipes: {
    type: [Schema.Types.ObjectId],
    ref: "recipe",
  },
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
