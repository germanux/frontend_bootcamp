import { Injectable } from '@angular/core';
import { Usuario } from '../entidades/usuario';
import { HttpClient } from '@angular/common/http'; // Es un servicio

@Injectable({
  providedIn: 'root'
})
export class ClienteHttpService {

  private listaUsuarios: Usuario[];

  constructor(private clienteHttp : HttpClient) {
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
    let objObservable = this.clienteHttp.get<Usuario[]>(
        "http://127.0.0.1:4000/api/usuarios/");
    // Observable es la evolución de las promesas
    objObservable.subscribe((datos) => {
      this.listaUsuarios = datos;
      alert("Cantidad " + this.listaUsuarios.length)
    });
  }
  getListaUsuarios() {
    return this.listaUsuarios;
  }
  // Este método se puede usar en cualquier parte
  eliminarUsuario(posicionUsu: number) {    
    this.listaUsuarios.splice(posicionUsu, 1);
    this.guardarListaLocalStrg();
    return true;
  }
}
