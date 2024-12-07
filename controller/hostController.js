//const { Voter } = require("../model/voter");
const { ObjectId } = require("mongodb");
const { Voter } = require("../model/schema");

const getVoters = async (req, res, next) => {
  try {
    const voters = await Voter.find();
    res.render("voters", { voters: voters });
  } catch (error) {
    res.status(500).send({ error: "server error" });
  }
};

const postVoter = async (req, res, next) => {
  try {
    const voterData = req.body;
    voterData.votingStatus = "Not Approved";

    const newVoter = new Voter(voterData);
    await newVoter.save();
    const voters = await Voter.find();

    res.status(200).render("voters", { voters: voters });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "internal server error" });
  }
};

const getVotersList = async (req, res, next) => {
  const voters = await Voter.getAllVoters();

  res.send(voters);
};

const getVoterById = async (req, res, next) => {
  const voterId = req.params.voterId;

  const voter = await Voter.findById(voterId);

  if (!voter) {
    res.send("<h1>Voter not found...");
  } else {
    res.render("voterDetails", { voter: voter });
  }
};

const updateVoterList = async (req, res, next) => {
  const voter = req.body;

  const filter = { _id: voter._id };
  const update = {
    $set: {
      votingStatus: voter.votingStatus,
      name: voter.name,
      municipality: voter.municipality,
      age: voter.age,
    },
  };

  await Voter.updateOne(filter, update);

  res.render("voterDetails", { voter: voter });
};

const deleteVoterById = async (req, res, next) => {
  const voterId = req.params.voterId;

  const filter = { _id: voterId };
  await Voter.deleteOne(filter);

  res.redirect("/voters");
};

const approveVoter = async (req, res, next) => {
  const voter = await Voter.findById(req.params.voterId);

  const votingStatus = "Approved";

  const filter = { _id: voter._id };
  const update = {
    $set: {
      votingStatus: votingStatus
      
    },
  };

  await Voter.updateOne(filter, update);
  res.redirect("/voters");
};

const declineVoter = async (req, res, next) => {
  const voter = await Voter.findById(req.params.voterId);

  const votingStatus = "Not Approved";

  const filter = { _id: voter._id };
  const update = {
    $set: {
      votingStatus: votingStatus
      
    },
  };

  await Voter.updateOne(filter, update);
  res.redirect("/voters");
};

const getEditVoter = async (req, res, next) => {
  const voterId = req.params.voterId;

  const voter = await Voter.findById(voterId);

  res.render("voterEdit", { voter: voter });
};

module.exports = {
  getVoters,
  postVoter,
  getVotersList,
  getVoterById,
  updateVoterList,
  deleteVoterById,
  approveVoter,
  declineVoter,
  getEditVoter,
};
