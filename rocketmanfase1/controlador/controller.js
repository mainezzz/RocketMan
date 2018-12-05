"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rocket_1 = require("../modelo/rocket");
var rocket1 = new rocket_1.Rocket("32WESSDS", 3);
var rocket2 = new rocket_1.Rocket("LDSFJA32", 6);
function showRocketData(rocket) {
    console.log("Codi del coet: " + rocket.rocketname + " *** N\u00FAmero de propulsors: " + rocket.numPropellers);
}
;
debugger;
showRocketData(rocket1);
showRocketData(rocket2);
