import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Importamos la clase de aplicacion.component.ts
import { AplicacionComponent } from './componentes/aplicacion.component';  
import { CrearUsuarioComponent } from './componentes/crear-usuario/crear-usuario.component';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';
import { EditarUsuarioComponent } from './componentes/editar-usuario/editar-usuario.component';
import { MenuComponent } from './componentes/menu/menu.component';

// @NgModule dice a Angular que esta clase es un módulo
@NgModule({
    declarations: [ // Los componentes se declaran
        AplicacionComponent,
        CrearUsuarioComponent,
        ListaUsuariosComponent,
        EditarUsuarioComponent,
        MenuComponent
    ],
    imports: [BrowserModule, FormsModule, HttpClientModule],   // Sólo se importan otros módulos
    bootstrap: [AplicacionComponent]
})
export class AppModule {
    // puede ser una clase vacía
}