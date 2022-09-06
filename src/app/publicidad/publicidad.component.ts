import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicidad',
  templateUrl: './publicidad.component.html',
  styleUrls: ['./publicidad.component.css']
})
export class PublicidadComponent implements OnInit {

  constructor() { }
  size = "14px";

  ngOnInit(): void {
    setInterval(()=>{ this.size=Math.round(Math.random() * 25) + "px"}, 200)
  }

  ganarDinero() {
    alert("Instalando troyanos y abriendo 10 popups de publicidad")
  }
}
