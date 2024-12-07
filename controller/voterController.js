
const { Voter } = require("../model/schema");

const getHomePage = (req, res, next) => {
  res.render("index");
};

const getRegistration = (req, res, next) => {
  res.render("voterRegistration");
};

const getApprovedVoters = async (req, res, next) => {
  const votingStatus = "Approved";
  const approvedVoters = await Voter.find({votingStatus:votingStatus});
  

  res.render("approvedVoters", { approvedVoters: approvedVoters });
};

const getDeclinedVoters = async (req, res, next) => {
  const votingStatus = "Not Approved";
  const declinedVoters = await Voter.find({votingStatus:votingStatus});
  

  res.render("notApprovedVoters", { declinedVoters: declinedVoters });
};

/* const postUpdateVoter=(req,res,next)=>{
  const voter=req.body;
  
  

} */

module.exports = {
  getHomePage,
  getRegistration,
  getApprovedVoters,
  getDeclinedVoters,
};
