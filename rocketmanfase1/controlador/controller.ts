
import {Rocket} from '../modelo/rocket';


let rocket1:Rocket = new Rocket("32WESSDS", 3);
let rocket2:Rocket = new Rocket("LDSFJA32", 6);

function showRocketData(rocket:Rocket){
    console.log(`Codi del coet: ${rocket.rocketname} *** Número de propulsors: ${rocket.numPropellers}`);
};
debugger;
showRocketData(rocket1);
showRocketData(rocket2);
