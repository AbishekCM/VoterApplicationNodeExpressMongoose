const express = require("express");
const voterRouter = express.Router();
const voterController = require("../controller/voterController");

voterRouter.get("/", voterController.getHomePage);

voterRouter.get("/voterRegistration", voterController.getRegistration);


voterRouter.get("/approvedVoters", voterController.getApprovedVoters);

voterRouter.get("/declinedVoters", voterController.getDeclinedVoters);



module.exports = voterRouter;
