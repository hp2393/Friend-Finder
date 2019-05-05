// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// ===============================================================================

var data = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API POST Requests
    app.get("/api/friends", function (req, res) {
        res.json(data)
    });
    
    app.post("/api/friends", function (req, res) {
        var match = 50;
        var friend = 0;
        console.log(data);

        for( let i = 0; i < data.length; i++) {
            var currentMatch = 0;
            for( let j = 0; j < data[i].scores.length; j++) {
                currentMatch += Math.abs(parseInt(data[i].scores[j]) - parseInt(req.body.scores[j]));
            };

            console.log(data[i].name + " : " + currentMatch);
            if (currentMatch < match){
                match = currentMatch;
                friend = i;
            };
        };

        data.push(req.body);
        res.send(data[friend]);
    });
};