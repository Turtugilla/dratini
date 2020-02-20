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

  onMouseOver(cardCuadroTag) {
    cardCuadroTag.children["2"].style.display = "none";
    cardCuadroTag.children["1"].style.display = "block";
  }

  onMouseOut(cardCuadroTag) {
    cardCuadroTag.children["2"].style.display = "block";
    cardCuadroTag.children["1"].style.display = "none";
  }

  setImageOnError(img) {
    img.src = "/assets/images/autos/not-found.png";
  }
}
