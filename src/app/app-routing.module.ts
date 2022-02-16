import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmpleadoComponent } from './empleado/empleado.component'; 
import { AlumnadoDAWComponent } from './alumnado-daw/alumnado-daw.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CocheComponent } from './coche/coche.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [ { path : 'empleado', component: EmpleadoComponent},
{ path: 'alumnado', component: AlumnadoDAWComponent},
{ path: 'coche', component: CocheComponent},
{ path: 'home', component: HomeComponent},
{ path: 'contacto', component: ContactoComponent},
{ path: 'coche/:id', component: CocheComponent},

{ path: '', component: EmpleadoComponent},
{ path: '**', component: EmpleadoComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
