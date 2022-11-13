import React, { useEffect } from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default function Logout() {

    function cerrarSesion() {
        cookies.remove("id", { path: "/" });
        cookies.remove("apellido_paterno", { path: "/" });
        cookies.remove("apellido_materno", { path: "/" });
        cookies.remove("nombre", { path: "/" });
        cookies.remove("username", { path: "/" });
        window.location.href = "./";
    }

    useEffect(() => {
        if (!cookies.get('username')) {
            window.location.href = "./";
        }
    });

    return (
        <div>
            <button className="btn btn-primary" onClick={cerrarSesion}>Logout</button>
        </div>
    );
}