const { v4: uuid } = require("uuid");
const fs = require("fs").promises;
const path = require("path");
const { rootDir } = require("../util/pathUtil");
const { getDB } = require("../util/mongoDbUtils");
const { ObjectId } = require("mongodb");



class Voter {
  constructor(name, municipality, age) {
    //this.id = uuid();
    this.votingStatus = "Not Approved";
    this.name = name;
    this.municipality = municipality;
    this.age = Number(age);
  }

  async save() {
    const db = getDB();
    await db.collection("voters").insertOne(this);
  }

  static async getAllVoters() {
    const db = getDB();

    const voters = await db.collection("voters").find({}).toArray();
    
    
    return voters;
  }

  static async getApprovedVoters(votingStatus) {
    let voters = await this.getAllVoters();
    
      voters = voters.filter((v) => v.votingStatus === votingStatus);
    
    
    
    return voters;
  }

  static async getVoterById(voterId) {
    const voters = await this.getAllVoters();
    
    const voter = voters.find((voter) => voter._id ==voterId);
    
    return voter;
  }

  static async updateVoter(voter) {
    const db = getDB();
    
    
    
    const filter = { _id: voter._id };
    const update = {
      $set: {
        votingStatus:voter.votingStatus,
        name:voter.name,
        municipality:voter.municipality,
        age:voter.age
      }
    };

    await db.collection("voters").updateOne(filter, update);
  }

  static async deleteVoter(voterId) {
    const db=getDB();
    
    const objectId=ObjectId.createFromHexString(voterId);
    const filter={_id:ObjectId};
    
    await db.collection('voters').deleteOne(filter);
    
  }
}

//module.exports = { Voter };
