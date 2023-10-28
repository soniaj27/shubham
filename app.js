const express = require("express");
const app = express();
const mongoose = require("mongoose");
const  sona = require('./sona.js');
const uri =
  "mongodb+srv://soniajaiswal2222:s7030307005@cluster0.ewbzcz3.mongodb.net/pratice?retryWrites=true&w=majority";
  

const port = 5000;
 app.use(express.json())
app.get("/", (req, res) => {
  res.send("hii sonia");
});

app.post("/user", (req, res) => {
const userObj =  new sona({
    username:req.body.username,
    password:req.body.password
})
userObj.save()
res.status(200).send({
    status:200,
    message:'Send Successfully'
    })
    console.log(userObj);

});
app.listen(port, () => {
  mongoose
    .connect(uri)
    .then((res) => {
      console.log(`hii sonia jaiswal`);
    })
    .catch((err) => {
      console.log(`catch this error and print it`);
    });
  console.log(`server is running on http://localhost:${port} `);
});
