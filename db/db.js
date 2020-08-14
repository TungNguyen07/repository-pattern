import mongoose from "mongoose";

const url = "mongodb://localhost:27017/test";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

module.exports = mongoose
  .connect(url, options)
  .then(() => {
    console.log("Connect database successfully!");
    return mongoose;
  })
  .catch((error) => {
    console.log(error);
  });
