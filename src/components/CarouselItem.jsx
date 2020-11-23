import React from 'react';
import { connect } from 'react-redux';
import { setFavorite, deleteFavorite } from '../actions/index.js';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import '../assets/styles/Components/CarouselItem.scss';

import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import deleteIcon from '../assets/static/delete-icon.png';


const CarouselItem = (props) => {
   
    const {id, cover, title, year, contentRating, duration, isList} = props;
    const handleSetFavorite = () => {
        props.setFavorite({
            id,
            cover, 
            title, 
            year, 
            contentRating, 
            duration,
        });
    };

    const handleDeleteFavorite = (itemId) => {
        props.deleteFavorite(itemId);
    }
    
    return(
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt={title}/>
            <div className="carousel-item__details">
                <div>
                    <Link to={`/player/${id}`}>
                        <img 
                        className="carousel-item__details--img" 
                        src={playIcon} alt="PlayIcon"/>
                    </Link>

                    {isList ?  //Operacion ternaria de validacion
                        <img
                        className="carousel-item__details--img" 
                        src={deleteIcon} alt="DeleteIcon"
                        onClick={() => handleDeleteFavorite(id)}
                        />
                    :
                        <img 
                        className="carousel-item__details--img" 
                        src={plusIcon} alt="PlusIcon"
                        onClick={handleSetFavorite}
                        />
                    }
                   
                </div>
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--title">{
                    `${year} ${contentRating} ${duration}`
                }</p>
            </div>
        </div>
    )};

CarouselItem.propTypes = {
    cover: PropTypes.string,
    tittle : PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
}

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite,
};

export default connect( null, mapDispatchToProps)(CarouselItem);