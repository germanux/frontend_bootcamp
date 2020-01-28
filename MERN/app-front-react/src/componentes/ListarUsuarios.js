import React, { Component } from 'react';

class ListarUsuarios extends /*React.*/ Component{
    

    constructor (props) {
        super(props);
        this.onClickEliminar = this.onClickEliminar.bind(this);
        this.onClickModificar = this.onClickModificar.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeNombre = this.onChangeNombre.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onClickActualizar = this.onClickActualizar.bind(this);
        /*this.state = {  // Sustituye todo el estado
            editando: false
        };*/
        this.setState( {    // Añade al estado sólo lo que se indique
            editando: false,            
            usuario: {
                "nombre": "",
                "email": "",
                "password": ""
            },
            listaUsuarios: []
        });
    }
    // Equivalente al ngOnInit(): El componente ha sido montado
    componentDidMount() {
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
    onClickModificar(evt) {
        let idUsu = evt.target.dataset.idUsuario;
        this.setState( {
            editando: true
        });
        for (let usu of this.state.listaUsuarios) {
            if (usu._id === idUsu) {
                this.setState({
                    "usuario": usu
                });
               // alert(usu.nombre);
            }
        }
        // fetch("")
       // alert(this.state.usuario.email);

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
    onChangeEmail(evt) {
        this.setState( {
            usuario: {
                _id: this.state.usuario._id,
                nombre: this.state.usuario.nombre,
                email: evt.target.value,
                password: this.state.usuario.password
            }
        } );
    }
    onChangePassword(evt) {
        this.setState( {
            usuario: {
                _id: this.state.usuario._id,
                nombre: this.state.usuario.nombre,
                email:  this.state.usuario.email,
                password: evt.target.value
            }
        } );
    }
    onChangeNombre(evt) {
        this.setState( {
            usuario: {
                _id: this.state.usuario._id,
                nombre: evt.target.value,
                email:  this.state.usuario.email,
                password: this.state.usuario.password
            }
        } );
    }
    onClickActualizar(evt) {
        // Ya tenemos los campos rellenos
        alert(JSON.stringify(this.state.usuario));
        window.fetch("http://127.0.0.1:4000/api/usuarios/", {
            method: "PUT",
            body: JSON.stringify(this.state.usuario), 
            headers:{
              'Content-Type': 'application/json'
            }
        }).then((valor) => {
            //alert("Se habrá modificado: " + JSON.stringify(valor) );
            this.componentDidMount();
        })
    }
    renderFormEdit() {
        return (
            <form>
                <h3>Modificar usuario</h3>
                <input type="text" placeholder="Nombre..."
                        onChange= { this.onChangeNombre } 
                        value={ this.state.usuario.nombre } />
                <input type="email" placeholder="Email..."
                        onChange= { this.onChangeEmail }
                        value={ this.state.usuario.email }/>
                <input type="password" placeholder="Password..."
                        onChange= { this.onChangePassword }
                        value={ this.state.usuario.password }/>
                <input type="button" value="Actualizar"
                        onClick = { this.onClickActualizar }/>
            </form>
        );
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
                    {
                        this.state.editando ? this.renderFormEdit() : "No editando"
                    }
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
                            
                            <td><input value="Modificar" type="button" 
                                data-id-usuario={ usu._id }
                                onClick = { this.onClickModificar } /></td>
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