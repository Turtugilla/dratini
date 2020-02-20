import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MisAutosModule } from "./mis-autos/mis-autos.module";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NotFoundComponent, FooterComponent],
  imports: [BrowserModule, MisAutosModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
