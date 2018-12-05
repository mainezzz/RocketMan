"use strict";
//FASE 1:
//Volem fer un software de carreres de coets.
//Un coet està identificat per un codi de 8 caràcters i un número de propulsors.
//Realitza els següents passos:
Object.defineProperty(exports, "__esModule", { value: true });
var Rocket = /** @class */ (function () {
    function Rocket(rocketname, numPropellers) {
        this.numPropellers = 0;
        this.rocketname = rocketname;
        this.numPropellers = numPropellers;
    }
    return Rocket;
}());
exports.Rocket = Rocket;
