import React from 'react';
import '../assets/styles/Components/Search.scss'

const Search = () => (
    <section className="main">
        <h2 className="main__title">¿Que quieres ver hoy?</h2>
        <input type="text" className="input" placeholder="Buscar..."/>
    </section>
);

export default Search;