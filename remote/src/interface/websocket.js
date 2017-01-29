let clientCurrentlyConnected = false;

const log = require("../log");
log.info("WebSocket", "Waiting for client...");


module.exports = {
	init: (wss) => {
		wss.on("connection", (connection) => {
			log.info("WebSocket", "Client connected.");
			clientCurrentlyConnected = connection;

			connection.on("message", (message) => {

			});

			connection.on("close", () => {
				log.info("WebSocket", "Client disconnected.");
				clientCurrentlyConnected = false;
			});
		});
	},
	goPlace: (whereTo) => {
		if(!clientCurrentlyConnected)
			return {
				success: false,
				reason: "The robot is not currently connected."
			};

		const send = locationId => {
			clientCurrentlyConnected.send(JSON.stringify({
				event: "go",
				location: locationId
			}));
		};

		switch(whereTo.toLowerCase()) {
			case "post office":
				send(0);
			break;
			case "police station":
				send(1);
			break;
			case "fire house":
				send(2);
			break;
			case "bakery":
				send(3);
			break;
			case "gas station":
				send(4);
			break;
			case "school":
				send(5);
			break;
			case "library":
				send(6);
			break;
			case "airport":
				send(7);
			break;
			case "construction area":
				send(8);
			break;
			case "hospital":
				send(9);
			break;
			default:
				return {
					success: false,
					reason: "I couldn't find the place you want to go. Try asking again."
				};
		}

		return {
			success: true
		};
	}
};
