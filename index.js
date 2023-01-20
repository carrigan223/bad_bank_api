//bring in expres from express
const express = require("express");
//imort admin from firebase-admin
const admin = require("firebase-admin");
//bring in serviceAccount from serviceAccountKey.json
const serviceAccount = require("./config/firebaseCredentials.json");

//initialize firebase admin with serviceAccount and databaseURL
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://office-hour-firebase.firebaseio.com",
});

//create a database variable
const db = admin.firestore();
//create an instance of express
const app = express();

/////////////ROUTES/////////////

//route to get all users
app.get("/users", (req, res) => {
  //create a users array
  let users = [];
  //get all users from the database
  const usersRef = db.collection("users");
  usersRef.get().then((snapshot) => {
    //loop through the users
    snapshot.forEach((doc) => {
      //push the user to the users array
      users.push(doc.data().first_name);
    });
    //send the users array
    res.send(users);
  });
});

//base` route
app.get("/", (req, res) => {
  res.send("Hello Pat");
});

//create a port

//listen to the port
app.listen(3000, () => {
  console.log(`Server started on port 3000`);
});
