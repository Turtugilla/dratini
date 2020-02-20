import { Component, OnInit, OnChanges } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "menu-vistas",
  templateUrl: "./menu-vistas.component.html",
  styleUrls: ["./menu-vistas.component.css"]
})
export class MenuVistasComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
}
