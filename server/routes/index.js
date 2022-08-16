const express = require("express");

const controllers = require("../controllers");

const router = express.Router();

router.get("/", controllers.getApiHome);

router.post("/users/login", controllers.userLogin);

router.post("/users/register", controllers.userRegistration);

router.get("/listings/:lat&:lon", controllers.searchListings);

router.get("/listings/:id", controllers.getListing);

router.get("/search/:location", controllers.clientSearchLocation);

router.get("/images/:id", controllers.getImages);

router.post("/booking", controllers.createBooking);

module.exports = router;
