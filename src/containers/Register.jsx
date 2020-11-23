import React, {useState} from 'react';
import { connect} from 'react-redux';
import { registerRequest } from '../actions';
import {Link} from 'react-router-dom';
import '../assets/styles/Components/Register.scss';
import Header from '../components/Header';

const Register = props => {
    
    const[form, setVlues] = useState({
        email: '',
        name:'',
        pwd:'',
    });

    const handleInput = event => {
        setVlues({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(form);
        props.registerRequest(form);
        props.history.push('/');
    }
    
    return(
        <>
            <Header isRegister/>
            <section className="register">
                <section className="register__container">
                    <h2>Regístrate</h2>
                    <form className="register__container--form" onSubmit={handleSubmit}>
                        <input
                            name="name"
                            className="input"
                            type="text"
                            placeholder="Nombre"
                            onChange={handleInput}
                        />
                        <input
                            name="email"
                            className="input"
                            type="text"
                            placeholder="Correo"
                            onChange={handleInput}
                        />
                        <input
                            name="pwd"
                            className="input"
                            type="password"
                            placeholder="Contraseña"
                            onChange={handleInput}
                        />
                        <button className="button">Registrarme</button>
                    </form>
                    <Link to="/login">
                        Iniciar sesión
                    </Link>
                </section>
            </section>
        </>
)};

const mapDispatchToProps = {
    registerRequest
};

export default connect(null,mapDispatchToProps)(Register);