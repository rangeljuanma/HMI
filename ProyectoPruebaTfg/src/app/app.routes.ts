import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LandinPageComponent } from './componentes/landin-page/landin-page.component';


export const routes: Routes = [

    { path: "", component: LandinPageComponent },
    { path: "inicio", component: LandinPageComponent },
    // { path: "inicioSesion", component: LoginComponent },
    
    

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
