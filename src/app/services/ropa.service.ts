import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RopaService {
  public nombre:string = 'Pantalón';
  public coleccionRopa = ['Pnatalones blancos','Camisa roja'];
  
  prueba(){
    return this.nombre;
  }

  getRopa() : Array<String>{
    return this.coleccionRopa;
  }

  addRopa(nombrePrenda:string): Array<String>{
    this.coleccionRopa.push(nombrePrenda);
    return this.getRopa();
  }

  deleteRoPa(index:number){
    this.coleccionRopa.splice(index,1);
  }

  constructor() { }
}
