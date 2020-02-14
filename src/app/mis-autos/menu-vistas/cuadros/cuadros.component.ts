import { Component, OnInit } from "@angular/core";
import { AUTOS } from "src/app/data/data";

@Component({
  selector: "app-cuadros",
  templateUrl: "./cuadros.component.html",
  styleUrls: ["./cuadros.component.css"]
})
export class CuadrosComponent implements OnInit {
  autos: any;
  constructor() {}

  ngOnInit() {
    this.autos = AUTOS;
  }

  setImageOnError(img) {
    img.src = "/assets/images/autos/not-found.png";
  }
}
