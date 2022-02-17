import { Component, OnInit } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
//MEidante el inyector de dependecias se crearán instancias de los objetos
  providers: [RopaService]
})
export class HomeComponent implements OnInit {
  public title = "TÍTULO HOME";
  public arrayRopa:Array<String>;
  public prenda:string;

  constructor(private _ropaService: RopaService) { 
    this.arrayRopa = [];
    this.prenda = "";
  }

  ngOnInit(): void {
    this.obtenerRopa();
  }

  obtenerRopa(): void{
    this.arrayRopa = this._ropaService.getRopa();
  }

  addPrenda(): void{
    this._ropaService.addRopa(this.prenda);
  }

}
