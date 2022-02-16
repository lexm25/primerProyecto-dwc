import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {
  public title = "TÍTULO COCHE";

  Coches = [
            {id: 'H456DFH465',
             name: 'Clio',
             description: 'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.'
            },
            {id: 'A6DSF45SA34',
             name: 'Focus',
             description: 'It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
            },
            {id: 'Y645J456SRJK',
             name: '406',
             description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.'
            }
          ];

  id:string;
  constructor(private actRoute: ActivatedRoute, private _router: Router) { 
    this.id = this.actRoute.snapshot.params['id'];
  }

  onBack(): void{
    this._router.navigate(['/coche']);
  }

  ngOnInit(): void {
  }


}
