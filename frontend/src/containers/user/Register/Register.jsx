import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Register.scss';
import axios from 'axios';
import {API_URL} from '../../../api-config'
const Register = props => {
    const handleSubmit = event =>{
        event.preventDefault();
        const user ={
            name:event.target.name.value,
            email:event.target.email.value,
            password:event.target.password.value
        }
        axios.post(API_URL+'users/register',user)
        .then(res=>{
            setTimeout(() => {
                //this.router.navigate([])
                props.history.push('/login')
            }, 1500);
        })
    }
    return (
        <div className="registerContainer">
            <form onSubmit={handleSubmit}>
                <h2>Register</h2>
                <TextField type="text" label="Nombre" name="name" placeholder="Introduzca su nombre" />
                <TextField type="email" label="email" name="email" placeholder="Introduzca su correo electrónico" />
                <TextField type="password" label="contraseña" name="password" placeholder="Introduzca su contraseña" />
                <Button type="submit" variant="contained" color="primary">
                    Register
                </Button>
            </form>
        </div>
    )
}

export default Register
