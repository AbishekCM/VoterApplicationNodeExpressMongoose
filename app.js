//core modules
const path = require("path");

//external  modules
const express = require("express");

const app = express();

//local modules

const { rootDir } = require("./util/pathUtil");
const voterRouter = require("./routes/voterRouter");
const hostRouter = require("./routes/hostRouter");

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(rootDir, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("dotenv").config();
const db = require("./util/mongoDbUtils");

//Routings:
app.use(voterRouter);
app.use(hostRouter);

app.use((req, res, next) => {
  res.send("not founded");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`app is listening at: http://localhost:${PORT}`);
});
