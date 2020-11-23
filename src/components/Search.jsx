import React from 'react';
import classNames from 'classnames';
import '../assets/styles/Components/Search.scss'

const Search = ({isHome}) => {
    
    const inputStyle = classNames('input', {
        isHome,
    });

    return(
        <section className="main">
            <h2 className="main__title">¿Que quieres ver hoy?</h2>
            <input type="text" className={inputStyle} placeholder="Buscar..."/>
        </section>
)};

export default Search;