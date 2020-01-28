import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../entidades/usuario';
//import { AlmacenUsuariosService } from '../../servicios/almacen-usuarios.service';
import { ClienteHttpService } from '../../servicios/cliente-http-usuarios.service';

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
  constructor(private srvUsu: ClienteHttpService) {
  }

  // Cuando nace Angular invoca a este método
  ngOnInit() {
    // Le pedimos la información de los usuarios al servicio
    this.laListaDeUsuarios = this.srvUsu.getListaUsuarios();
  }
  getUsuarios() {
    return this.srvUsu.getListaUsuarios();
  }
  lanzarEdicion() {
    alert("Edit");
  }
  lanzarEliminar(posUsuElim: number, usu: Usuario) {
    if (this.srvUsu.eliminarUsuario(posUsuElim)) {
      alert(usu.nombre + " ha sido eliminado");
    } else {
      alert(usu.nombre + " NO ha sido eliminado");
    }
  }
}
