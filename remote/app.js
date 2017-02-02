const Config = require("./src/config"),
	  log = require("./src/log");

global.userConfig = false; // config/config.json

function onConfigLoad() {
	require("./src/interface/http");
}

log.setSourceColor("System", "blue");
log.setSourceColor("Config", "cyan");
log.setSourceColor("HTTP", "green");
log.setSourceColor("Websocket", "yellow");

log.info("System", "uBear Remote");
log.info("System", "by Ethan, Luke, Will, and Will");
log.info("Config", "Reading configuration...");

global.userConfig = new Config("config/config.json", onConfigLoad);
