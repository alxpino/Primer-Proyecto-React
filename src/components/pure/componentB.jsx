import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto';

const ComponentB = () => {
    const [estado, setEstado] = useState(Contacto.conectado);

    const changeState = () =>{
        setEstado(!estado) 
    }

    return (
        <div>
            <h4>Estado: { estado ? <span Style="color: #aacc7a">Conectado</span> : <span Style="color: #ff294f">Desconectado</span>}</h4>
            <button onClick={ changeState }> Cambiar Estado</button>
        </div>
    );
};


ComponentB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ComponentB;
