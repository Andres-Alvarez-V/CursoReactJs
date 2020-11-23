import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import gravatar from '../utils/gravatar'
import { logoutRequest} from '../actions';
import classNames from 'classnames';//classnames me ayuda con las validaciones.

import '../assets/styles/Components/Header.scss'

import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = props => {

    const { user, isLogin, isRegister } = props;
    const hasUser = Object.keys(user).length > 0; //Object.keys(object_name).length nos devuelve la longitud de un objecto y luego lo validamos y esto me devuelve true o false.
    
    const handleLogout = () => {
        props.logoutRequest({}); 
    }

    const headerClass = classNames('header', {//recibe la clase que sera persistente y una validacion de la clase que se le asignara si se le pasa por props.
        isLogin, 
        isRegister,
    });


    return( 
    <header className={headerClass}>

       <Link to="/">
            <img className="header__img" src={logo} alt="Logo"/>
       </Link> 
        
        <div className="header__menu">
            <div className="header__menu--profile">
                {hasUser ? 
                    <img src={gravatar(user.email)} alt={user.email}/>
                    :
                    <img src={userIcon} alt="User Icon"/>
                }
                <p>Perfil</p>
            </div>
            <ul>
                {hasUser ?
                    <li><a href="/">{user.name}</a></li>
                    : null
                }
                {hasUser ? 
                    <li><a href="#logout" onClick={handleLogout}>Cerrar Sesión</a></li> 
                    :
                    <li><Link to="/login">Iniciar Sesión</Link></li>
                }
            </ul>
        </div>
    </header>
)};

const mapStateToProps = state => {
    return{
        user:state.user
    };
};

const mapDispatchToProps = {
    logoutRequest,
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);