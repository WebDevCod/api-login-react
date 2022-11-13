import React, { useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';
import Cookies from 'universal-cookie';

const URL = "http://localhost:3001/usuarios";
const cookies = new Cookies();

export default function Login() {
    const [state, setState] = React.useState({
        username: '',
        password: ''
    })

    function handleInputChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    async function iniciarSesion() {
        await axios.get(URL, { params: { username: state.username, password: md5(state.password) } })
            .then(response => {
                return response.data;
            })
            .then(response => {
                if (response.length > 0) {
                    var respuesta = response[0];
                    cookies.set('id', respuesta.id, { path: '/' })
                    cookies.set('apellido_paterno', respuesta.apellido_paterno, { path: '/' })
                    cookies.set('apellido_materno', respuesta.apellido_materno, { path: '/' })
                    cookies.set('nombre', respuesta.nombre, { path: '/' })
                    cookies.set('username', respuesta.username, { path: '/' })
                    window.location.href = './inicio';
                } else {
                    alert("El usuario o la contraseña no son correctos");
                }
            })
            .catch(error => {
                console.log();
            })
    }

    useEffect(() => {
        if (cookies.get('username')) {
            window.location.href = "./inicio";
        }
    });

    return (
        <main>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                            <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                            <div className="card-body">
                                <form>
                                    <div className="form-floating mb-3">
                                        <input
                                            className="form-control"
                                            id="inputUser"
                                            name='username'
                                            type="text"
                                            placeholder="User"
                                            required
                                            onChange={handleInputChange}
                                        />
                                        <label htmlFor="inputUser">User</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            className="form-control"
                                            id="inputPassword"
                                            name='password'
                                            type="password"
                                            placeholder="Password"
                                            maxLength={"8"}
                                            required
                                            onChange={handleInputChange}
                                        />
                                        <label htmlFor="inputPassword">Password</label>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                        <button type="submit" className="btn btn-primary" onClick={iniciarSesion}>Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}