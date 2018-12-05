"use strict";
//FASE 1:
//Volem fer un software de carreres de coets.
//Un coet està identificat per un codi de 8 caràcters i un número de propulsors.
//Realitza els següents passos:
Object.defineProperty(exports, "__esModule", { value: true });
//1. Creem dos coets amb els codis “32WESSDS” I “LDSFJA32”. El primer coet tindrà
//        tres propulsors i el segon sis propulsors.
//2. Mostrar a pantalla el codi dels coets i el número de propulsors que té.
//Crear clase Rocket
var Rocket = /** @class */ (function () {
    function Rocket(rocketname, numPropellers) {
        this.numPropellers = 0;
        this.rocketname = rocketname;
        this.numPropellers = numPropellers;
    }
    return Rocket;
}());
exports.Rocket = Rocket;
