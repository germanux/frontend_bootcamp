import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AlmacenUsuariosService {

  private listaUsuarios: Usuario[];

  constructor() {
    this.cargarListaLocalStrg();
    if (this.listaUsuarios == null || typeof this.listaUsuarios === "undefined") {
      this.listaUsuarios = [];
    }
  }
  insertar(usuario: Usuario) {
    let siYaExiste = false; // Presuponemos que no existe

    for (let usu of this.listaUsuarios) { // Buscamos en todo el array
      if (usu.email === usuario.email) {  // Y si existe el email
        siYaExiste = true;                // Marcamos que YA existe
        break;                            // y no hace falta seguir buscando
      }
    }
    if (siYaExiste) {
      alert("El email ya existe: " + usuario.email);
    } else {
      this.listaUsuarios.push(usuario);
      this.guardarListaLocalStrg();
    }
  }
  
  guardarListaLocalStrg() {
    // Convertimos en string con formato JSON el objeto:
    let textoJsonUsuarios = JSON.stringify(this.listaUsuarios);
    // Guardamos en la caché del navegador ese string,
    // dándole un nombre (clave/key) : listaUsuarios
    window.localStorage.setItem("listaUsuarios", textoJsonUsuarios);
    // Es decir, SERIALIZAR y guardar
  }
  cargarListaLocalStrg() {
    // Leer el JSON del almacen localStorage (se persiste en el navegador aunque cierre)
    let textoJsonUsuarios = window.localStorage.getItem("listaUsuarios");
    // Convertimos el JSON en un objeto de JS, es decir: DESSERIALIZAR
    this.listaUsuarios = JSON.parse(textoJsonUsuarios);
  }
  getListaUsuarios() {
    return this.listaUsuarios;
  }
}
