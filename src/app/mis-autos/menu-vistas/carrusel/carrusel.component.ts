import { Component, OnInit } from "@angular/core";
import { AUTOS } from "src/app/data/data";

@Component({
  selector: "app-carrusel",
  templateUrl: "./carrusel.component.html",
  styleUrls: ["./carrusel.component.css"]
})
export class CarruselComponent implements OnInit {
  autos: any;
  constructor() {}

  ngOnInit() {
    this.autos = AUTOS;
  }

  setImageOnError(img) {
    img.src = "/assets/images/autos/not-found.png";
  }
}
