const express = require("express");

const controllers = require("../controllers");

const router = express.Router();

router.get("/", controllers.getApiHome);

router.post("/users/login", controllers.userLogin);

router.post("/users/register", controllers.userRegistration);

router.get("/rental/listing/:id", controllers.getListing);

module.exports = router;
