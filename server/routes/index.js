const express = require("express");

const controllers = require("../controllers");

const router = express.Router();

router.get("/", controllers.getApiHome);

router.post("/users/login", controllers.userLogin);

router.post("/users/register", controllers.userRegistration);

router.get("/listings", controllers.listAllListings);

router.get("/listings/:id", controllers.getListing);

router.get("/search/:location", controllers.clientSearchLocation);

module.exports = router;
