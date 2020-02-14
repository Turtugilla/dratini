import { Component, OnInit, Input } from "@angular/core";
import { AUTOS } from "src/app/data/data";

@Component({
  selector: "app-lista",
  templateUrl: "./lista.component.html",
  styleUrls: ["./lista.component.css"]
})
export class ListaComponent implements OnInit {
  autos: any;

  constructor() {}

  ngOnInit() {
    this.autos = AUTOS;
  }

  setImageOnError(img) {
    img.src = "/assets/images/autos/not-found.png";
  }
}
