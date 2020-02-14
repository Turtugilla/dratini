import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MisAutosModule } from "./mis-autos/mis-autos.module";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, MisAutosModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
