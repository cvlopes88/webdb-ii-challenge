const express = require("express");
const router = express.Router();

const knex = require("../data/dbConfig");
router.get("/", (req, res) => {
    knex
      .select("*")
      .from("cars")
      .then(cars => {
        res.status(200).json(cars);
      })
      .catch(error => {
        res.status(500).json({ error: "Failed to get cars from database" });
      });
   });

   router.post("/", (req, res) => {
    // remember to validate the data sent by the client
    knex
      .insert(req.body) // ignore the console warning on SQLite
      .into("cars")
      .then(cars => {
        res.status(201).json(cars);
      })
      .catch(error => {
        res.status(500).json({ error: "Failed to insert car" });
      });
   });
   
   


module.exports = router;