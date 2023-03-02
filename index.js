const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const { shopifyApi, LATEST_API_VERSION } = require("@shopify/shopify-api");
const cookieParser = require("cookie-parser");

require("@shopify/shopify-api/adapters/node");
// const User = require('./models/user');
// const Task = require('./models/task')

// const { MONGO_URI, PORT } = require("./config/keys");



const express = require("express");
// const { update } = require('./models/user');

const app = express();

// mongoose.connect(MONGO_URI).then(
//   (succs) => {
//     console.log("database connection established");
//   },
//   (err) => {
//     console.log("error connecting to database", err);
//   }
// );

app.use(express.json());
app.use(cors());
app.use(cookieParser('e1978e66f4b25923049b61b752cf2135'));
// app.use('',require('./routes/user'))

app.use("", require("./routes/customer"));


const port = 5000;

app.listen(port, () => console.log("server listening at port", port));
