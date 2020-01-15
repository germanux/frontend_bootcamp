import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// Importamos la clase de aplicacion.component.ts
import { AplicacionComponent } from './aplicacion.component';  
import { CrearUsuarioComponent } from './crear-usuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';

// @NgModule dice a Angular que esta clase es un módulo
@NgModule({
    declarations: [ // Los componentes se declaran
        AplicacionComponent,
        CrearUsuarioComponent,
        ListaUsuariosComponent
    ],
    imports: [BrowserModule, FormsModule],   // Sólo se importan otros módulos
    bootstrap: [AplicacionComponent]
})
export class AppModule {
    // puede ser una clase vacía
}