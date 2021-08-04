const express = require("express");
const colors = require("colors");
const cors = require("cors");
const app = express();
const mongoDBClient = require("./mongoClient");
const PORT = 5000;
const { graphqlHTTP } = require("express-graphql");

app.use(cors());

app.get("/", (req, res) => res.send("Hello ExpressJS 🎉🎉🎉!"));

// API REST
const Product = require("./models/product");

app.get("/products", async (req, res) => {
  const products = await Product.find({});
  try {
    res.status(200).json(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get("/products/:category", async (req, res) => {
  const category = req.params.category;
  const products = await Product.find({ category });
  try {
    res.status(200).json(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// GraphQL UI
app.use(
  "/graphql",
  graphqlHTTP({
    //   schema: MyGraphQLSchema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT} 🎉🎉🎉`.blue.bold);
  mongoDBClient.initialize();
});
