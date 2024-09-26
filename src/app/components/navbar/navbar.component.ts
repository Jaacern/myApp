import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',  // Asegúrate de que el selector esté bien definido
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {  // Exporta correctamente la clase

  constructor() { }

  ngOnInit() {}

}
