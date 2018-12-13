"use strict";


//Importar clase Propeller a Rocket

import {Propeller} from './propeller';

//Crear clase Rocket

export class Rocket {
    public rocketname:string;
    public propellers: Propeller[] = new Array();

    constructor(rocketname:string){
      this.rocketname = rocketname;
    }
//Crear método para añadir propulsores a la clase Rocket 

    addPropeller(maxPow:number){
      const propeller = new Propeller(maxPow);
      this.propellers.push(propeller);
    }

}


