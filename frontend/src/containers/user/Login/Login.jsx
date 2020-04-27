import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Login.scss';
const Login = props => {
    return (
        <div className="loginContainer">
            <form>
                <h2>Login</h2>
                <TextField type="email" label="email" name="email" placeholder="Introduzca su correo electrónico" />
                <TextField type="password" label="contraseña" name="password" placeholder="Introduzca su contraseña" />
                <Button variant="contained" color="primary">
                    Login
                </Button>
            </form>
        </div>
    )
}

export default Login
