const wss = require("../interface/websocket");

module.exports = function(app) {
	app.get("/", (req, res) => {
		res.render("home");
	});

	app.get("/go/:place", (req, res) => {
		res.send(JSON.stringify(wss.goPlace(req.params.place)));
	});
};
