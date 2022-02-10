import { Component, OnInit } from '@angular/core';
import { Alumnado } from './alumnado';

@Component({
  selector: 'app-alumnado-daw',
  templateUrl: './alumnado-daw.component.html',
  styleUrls: ['./alumnado-daw.component.css']
})
export class AlumnadoDAWComponent implements OnInit {
  public title = "LISTADO ALUMNOS";
  public arrayAlumnados:Array<Alumnado>;
  public modulos:Array<String>;
  
  constructor() { 
    this.modulos = ["DAW","DIW","DWS","DWC","EIE","PRO","BD","SI","ED","LMSGI","FOL"];
    this.arrayAlumnados = [
                          new Alumnado("Antonio","Pérez Díaz","24533557G",new Date(2001,7,31),"Los Palacios y Villafranca",645792134,2,this.modulos),
                          new Alumnado("Ruben","Castellano Fernández","26543723X",new Date(1996,5,15),"Dos Hermanas",634233497,2,this.modulos),
                          new Alumnado("David","Roldán Jiménez","26543723X",new Date(2001,12,29),"Chapatales",652725734,1,this.modulos),
                          new Alumnado("Alejandro","Martín Álvarez","48190892G",new Date(2000,8,25),"Dos Hermanas",645326572,2,this.modulos)
                        ]; 
  }

  ngOnInit(): void {
  }

}
