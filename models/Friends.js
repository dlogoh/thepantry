const mongoose = require("mongoose");
const { Schema } = mongoose;

const FriendsSchema = new Schema({
  requester: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  recipient: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  status: {
    type: Number,
  },
});

module.exports = Friends = mongoose.model("friends", FriendsSchema);
