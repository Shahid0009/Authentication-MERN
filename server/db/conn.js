const mongoose = require("mongoose");
const DB =
  "mongodb+srv://shahid:root@bok-store.5hytkmo.mongodb.net/Authusers?retryWrites=true&w=majority";

mongoose
  .connect(DB, {})
  .then(() => console.log("DataBase Connected"))
  .catch((errr) => {
    console.log(errr);
  });
