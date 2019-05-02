// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// ===============================================================================

var data = require("../data/friends.js");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API POST Requests
    app.get("/api/friends", function (req, res) {
        res.json(data)
    });
    
    app.post("/api/friends", function (req, res) {
        res.json(data)
    });
  
};