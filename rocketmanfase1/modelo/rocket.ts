//FASE 1:
//Volem fer un software de carreres de coets.
//Un coet està identificat per un codi de 8 caràcters i un número de propulsors.
//Realitza els següents passos:

//1. Creem dos coets amb els codis “32WESSDS” I “LDSFJA32”. El primer coet tindrà
//        tres propulsors i el segon sis propulsors.
//2. Mostrar a pantalla el codi dels coets i el número de propulsors que té.


//Crear clase Rocket

//Importar clase Propeller a Rocket

import {Propeller} from './propeller';

export class Rocket {
    rocketname:string;
    numPropellers:number=0;

    constructor(rocketname:string, numPropellers:number){
      this.rocketname = rocketname;
      this.numPropellers = numPropellers;
    }
}
