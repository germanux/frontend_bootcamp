import { Component } from '@angular/core';
import { Usuario } from './usuario';
import { AlmacenUsuariosService } from './almacen-usuarios.service';

@Component({
    selector: 'app-crear-usuario',
    templateUrl: './crear-usuario.component.html',
    styleUrls: []
})
export class CrearUsuarioComponent {
    titulo: string = "Registro de usuario";
    usuarioNuevo: Usuario;
    srvUsuarios: AlmacenUsuariosService;    // Declaramos

    // Angular se encarga de instanciar el servicio (hacer new Al..)
    // Y aquí reconoce que lo necesitamos, por el tipo del parámetro
    constructor(srvUsu: AlmacenUsuariosService) 
    {
        this.usuarioNuevo = new Usuario();
        this.usuarioNuevo.nombre = "Probando";
        this.usuarioNuevo.email = "probando@email.com";
        this.srvUsuarios = srvUsu;
    }
    registrarAlPulsarClick(): void {
        console.log("Click Ok: " + this.usuarioNuevo.nombre);
        console.log(" password: " + this.usuarioNuevo.password);
        this.srvUsuarios.insertar(this.usuarioNuevo);
        this.usuarioNuevo = new Usuario();
    }
}
