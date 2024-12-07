const express = require("express");
const hostRouter = express.Router();
const hostController = require("../controller/hostController");

hostRouter.get("/voters", hostController.getVoters);
hostRouter.post("/voters", hostController.postVoter);

hostRouter.get("/voters/voterDetails/:voterId", hostController.getVoterById);
hostRouter.post("/voters/voterDetails/:id", hostController.updateVoterList);
hostRouter.get("/voters/voterDetails/edit/:voterId",hostController.getEditVoter);




hostRouter.get("/voterDelete/:voterId", hostController.deleteVoterById);

hostRouter.get("/approveVoter/:voterId", hostController.approveVoter);
hostRouter.get("/declineVoter/:voterId", hostController.declineVoter);

hostRouter.get("/listvoters", hostController.getVotersList);

module.exports = hostRouter;
