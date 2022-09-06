import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  @Input()
  titulo : string = "<Titulo de la APP>";
  @Input()
  subtitulo : string;
  colorTitulo : string = "green";
  colorSubtitulo : string = "red";
  claseTitulo: string = "display-1";

  subChars: number = 0;

  constructor() {
    this.subtitulo = "<Subtitulo de la APP>"
   }

  ngOnInit(): void {
    setInterval(()=>{
      this.subChars++;
      if (this.subChars>this.subtitulo.length) {this.subChars = 1} 
      this.colorSubtitulo = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    }, 200)

  }
}
