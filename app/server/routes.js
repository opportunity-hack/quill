var path = require("path");
var User = require("./models/User");

module.exports = function (app) {
  // Application ------------------------------------------
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/index.html"));
  });

  // Wildcard all other GET requests to the angular app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/index.html"));
  });
};
