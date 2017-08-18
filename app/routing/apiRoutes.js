const friendsArray = require("../data/friends.js");

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friendsArray);
  });

  app.post("/api/friends", function (req, res) {
    var newFriend = req.body;

    console.log(JSON.stringify(newFriend));

    friendsArray.push(newFriend);
    console.log(JSON.stringify(friendsArray) + "from api routes page");

    res.json(newFriend);
  });

}