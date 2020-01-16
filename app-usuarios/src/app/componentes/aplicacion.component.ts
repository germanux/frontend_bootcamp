import { Component } from "@angular/core";

@Component({    // Obj metadatos (características)
    selector: "app-componente-raiz",    // Nombre de la etiqueta
    template: `
<div class="borde-verde">
    <h1>{{ titulo }}</h1>
    <app-crear-usuario></app-crear-usuario>
    <app-lista-usuarios></app-lista-usuarios>
</div>`,
    styles: ['.borde-verde { border: green 4px solid; }']
    // Características (metadatos)
})
export class AplicacionComponent {
    // Datos del UI y su funcionalidad
    // También llamado Modelo del componente

    titulo: string = "Gestión de usuarios";
}