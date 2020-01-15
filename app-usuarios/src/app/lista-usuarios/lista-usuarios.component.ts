import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { AlmacenUsuariosService } from '../almacen-usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  laListaDeUsuarios: Usuario[];
  
  // 3 x 1: 
  // 1 - recibimos por parámetro
  // 2 - Con el private, declaramos el campo (variable miembro)
  // 3 - Hace la asignación
  constructor(private srvUsu: AlmacenUsuariosService) {
  }

  // Cuando nace Angular invoca a este método
  ngOnInit() {
    // Le pedimos la información de los usuarios al servicio
    this.laListaDeUsuarios = this.srvUsu.getListaUsuarios();
  }

}
