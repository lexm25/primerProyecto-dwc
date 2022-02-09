import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  public title = "Bienvenido empleado";
  public empleado:Empleado;
  public empleadoExt:Empleado;
  public trabajadores:Array<Empleado>;
  public trabajadorExterno:boolean;

  constructor() { 
    this.empleado = new Empleado("Pedro",47,"Informática",true);
    this.trabajadores = [new Empleado("Antonio",45,"Gestoría",true),new Empleado("Pepe",32,"Abogacía",true)];
    this.trabajadorExterno = true;
    this.empleadoExt = new Empleado("Jose",47,"Administrativo",true);
  }

  cambiarExterno(valor:boolean){
    this.trabajadorExterno = valor;
  }

  ngOnInit(){
    console.log(this.empleado);
  }

}
