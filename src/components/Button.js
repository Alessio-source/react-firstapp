import React from "react";
import PropTypes from 'prop-types';

// TYPESCRIPT = avanzato
// Prop types
// props = dati o attributi custom

function Button(props) {
    const { handleClick, text } = props;
    return <button onClick={handleClick}>{ text }</button>
    //return <button>{props.text}</button>
}

//validazione
Button.propTypes = {
    text: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
}

//testo di default se non passo nulla
Button.defaultProps = {
    text: 'CLICK ME'
}

export default Button