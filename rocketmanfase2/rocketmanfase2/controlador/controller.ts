"use strict";

import {Rocket} from '../modelo/rocket';
import {Propeller} from '../modelo/propeller';


//código de FASE 1:
//let rocket1: Rocket = new Rocket("32WESSDS", 3);
//let rocket2: Rocket = new Rocket("LDSFJA32", 6);

//function showRocketData(rocket:Rocket){
//    console.log(`Codi del coet: ${rocket.rocketname} *** Número de propulsors: ${rocket.numPropellers}`);
//};
//debugger;
//showRocketData(rocket1);
//showRocketData(rocket2);

//FASE 2:

//Volem millorar el software perquè el propulsor tingui una potència màxima.
//Modifiquem en el main anterior:
//1. Creem dos coets amb els codis “32WESSDS” I “LDSFJA32”.El primer coet tindrà
//tres propulsors(potència màxima: 10, 30, 80) i el segon sis propulsors(potència
//màxima: 30, 40, 50, 50, 30, 10).
//2. Mostrar a pantalla el codi dels coets, el número de propulsors que té i la potència
//màxima de cada propulsor.
//  Output:
 //     32WESSDS: 10, 30, 80
 //     LDSFJA32: 30, 40, 50, 50, 30, 10



//Crear rocket1 y rocket2 a partir de clase Rocket

const rocket1:Rocket = new Rocket("32WESSDS");
const rocket2:Rocket = new Rocket("LDSFJA32");

//Añadir propulsores a rocket1 y rocket2

rocket1.addPropeller(10);
rocket1.addPropeller(30);
rocket1.addPropeller(80);

rocket2.addPropeller(30);
rocket2.addPropeller(40);
rocket2.addPropeller(50);
rocket2.addPropeller(50);
rocket2.addPropeller(30);
rocket2.addPropeller(10);

//Mostrar en pantalla nombre del cohete y potencia máxima de cada propulsor

function showRocketInfo(recipiente,rocket: Rocket) {
   
  let text= "Su nombre es "+ rocket.rocketname + " y sus propulsores tienen una potencia máxima de ";
 
   rocket.propellers.forEach((prop:Propeller)=> {
   text+= prop.maxPow + " ";
   }); 
   recipiente.innerHTML = text;
};

const recipiente1 = document.querySelector("#cohete1p");
const recipiente2 = document.querySelector("#cohete2p");

showRocketInfo(recipiente1,rocket1);
showRocketInfo(recipiente2,rocket2);    






  


