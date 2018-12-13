"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Importar clase Propeller a Rocket
var propeller_1 = require("./propeller");
//Crear clase Rocket
var Rocket = /** @class */ (function () {
    function Rocket(rocketname) {
        this.propellers = new Array();
        this.rocketname = rocketname;
    }
    //Crear método para añadir propulsores a la clase Rocket 
    Rocket.prototype.addPropeller = function (maxPow) {
        var propeller = new propeller_1.Propeller(maxPow);
        this.propellers.push(propeller);
    };
    return Rocket;
}());
exports.Rocket = Rocket;
