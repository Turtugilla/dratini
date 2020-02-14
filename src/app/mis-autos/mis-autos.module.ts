import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MisAutosRoutingModule } from "./mis-autos-routing.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { MenuVistasComponent } from "./menu-vistas/menu-vistas.component";
import { ListaComponent } from "./menu-vistas/lista/lista.component";
import { CuadrosComponent } from "./menu-vistas/cuadros/cuadros.component";
import { CarruselComponent } from "./menu-vistas/carrusel/carrusel.component";

@NgModule({
  declarations: [
    MenuVistasComponent,
    ListaComponent,
    CuadrosComponent,
    CarruselComponent
  ],
  imports: [CommonModule, MisAutosRoutingModule, NgbModule],
  exports: [MenuVistasComponent]
})
export class MisAutosModule {}
