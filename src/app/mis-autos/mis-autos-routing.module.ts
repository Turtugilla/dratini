import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListaComponent } from "./menu-vistas/lista/lista.component";
import { CuadrosComponent } from "./menu-vistas/cuadros/cuadros.component";
import { CarruselComponent } from "./menu-vistas/carrusel/carrusel.component";

const routes: Routes = [
  { path: "mis-autos/lista", component: ListaComponent },
  { path: "mis-autos/cuadros", component: CuadrosComponent },
  { path: "mis-autos/carrusel", component: CarruselComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MisAutosRoutingModule {}
