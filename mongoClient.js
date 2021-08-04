const mongoose = require("mongoose");
const colors = require('colors')
const dbName = "marketplace"

const URI =
  `mongodb+srv://alexsms:CFood2021@cluster-clickcollect.5rlhq.mongodb.net/${dbName}?retryWrites=true&w=majority`

const mongoDBClient = {
  initialize: () => {
    try {
      const client = mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      client.then(() => console.log(`🎉 Successfully connected to ${dbName} 🎉`.white.bold))
    } catch (error) {
      throw Error(error.message);
    }
  },
};

module.exports = mongoDBClient
