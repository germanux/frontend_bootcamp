// Clase para gestionar la entidad

export class Usuario {
    public nombre: string;
    public email: string;
    public password: string;

    public clonar(): Usuario {
        let clon = new Usuario();
        clon.nombre = this.nombre;
        clon.email = this.email;
        clon.password = this.password;
        return clon;
    }
}
