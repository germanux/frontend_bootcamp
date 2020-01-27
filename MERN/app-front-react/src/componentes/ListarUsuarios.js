import React, { Component } from 'react';

class ListarUsuarios extends /*React.*/ Component{

    constructor (props) {
        super(props);
        this.onClickEliminar = this.onClickEliminar.bind(this);
    }
    // Equivalente al ngOnInit(): El componente ha sido montado
    componentDidMount() {
        this.setState(null);  // Aunque es redundante

        let promesaHTTP = window.fetch('http://127.0.0.1:4000/api/usuarios/');
        promesaHTTP.then(   (resHTTP) => {
            let promesaJSON = resHTTP.json();
            
            promesaJSON.then( (objColeccionUsu) => {
                console.log( JSON.stringify(objColeccionUsu) );
                // Cuando por fin recibimos la coleccion y ha sido convertida en JSON
                this.setState( {
                    listaUsuarios: objColeccionUsu
                });
            } );
        });
    }
    componentWillUnmount () { 
        // Esto se ejecuta cuando se desmonte el componente
    }
    onClickEliminar(evt) {
        let idUsu = evt.target.dataset.idUsuario;
        let promesaHTTP = window.fetch(`http://127.0.0.1:4000/api/usuarios/${idUsu}`, {
            method: "DELETE",
            mode: 'cors'
        } );
        promesaHTTP.then((resHttp) => {
            resHttp.json().then(( objMsj ) => {
                alert(objMsj.mensaje);
                this.componentDidMount();
            })
        })
    }
    render() {
        let objViDomJSX;
        //TODO: Condicional, si this.state no existe, mostramos "Cargando..."
        if (this.state === null ) {
            objViDomJSX = (<p>Cargando...</p> );
        } else {
            objViDomJSX = (
                <div>
                    <h2>Lista de usuarios</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                        {   this.state
                                .listaUsuarios
                                .map( usu =>  ( 
                                          <tr  key={ usu._id }>
                                            <td>{ usu.nombre }</td>
                                            <td>{ usu.email }</td>
                                            <td><input value="Eliminar" type="button" 
                                                data-id-usuario={ usu._id }
                                                onClick = { this.onClickEliminar } /></td>
                                          </tr> 
                                ) ) }
                        </tbody>
                    </table>
                </div>
            );
        }

        return objViDomJSX;
    }
}
export default ListarUsuarios;