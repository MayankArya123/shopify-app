const express = require("express");
const axios = require("axios");
require("@shopify/shopify-api/adapters/node");
const { shopifyApi, LATEST_API_VERSION } = require("@shopify/shopify-api");
const { authenticatedFetch } = require("@shopify/app-bridge/utilities");
const createApp = require("@shopify/app-bridge");

const { getSessionToken } = require("@shopify/app-bridge/utilities");

const Shopify = require("shopify-api-node");

const router = express.Router();

router.get("/getCustomers", async (req, res) => {
  const shopify = new Shopify({
    shopName: "sopify-store123",
    // apiKey: "e1978e66f4b25923049b61b752cf2135",
    // password: 'welcome',
    accessToken: "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",
  });

  console.log("admin hitting");

  shopify.customer
    .list()
    .then((customers) => res.json(customers))
    .catch((err) => console.error(err));
});

router.post("/update", async (req, res) => {
  const shopify = new Shopify({
    shopName: "sopify-store123",
    // apiKey: "e1978e66f4b25923049b61b752cf2135",
    // password: 'welcome',
    accessToken: "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",
  });

  console.log("mmmmm", req.body);

  const { first_name, last_name, phone, email, orders_count, total_spent } =
    req.body;

    console.log(phone,email)

  const newCustomer = {
    first_name: first_name,
    last_name: last_name,
    email:email,
    phone:phone,
    total_spent: total_spent,
    orders_count: orders_count,
  };

  shopify.customer
    .update(req.body.id, newCustomer)
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

router.get("/customer/:id", async (req, res) => {
  const { id } = req.params;
  console.log("oooooooooooooooooooM", id);

  const shopify = new Shopify({
    shopName: "sopify-store123",
    // apiKey: "e1978e66f4b25923049b61b752cf2135",
    // password: 'welcome',
    accessToken: "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",
  });

  console.log("admin hitting");

  shopify.customer
    .get(id)
    .then((customer) => res.json(customer))
    .catch((err) => console.error(err));
});

module.exports = router;
