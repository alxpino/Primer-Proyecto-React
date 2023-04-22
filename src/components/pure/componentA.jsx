import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto';
import ComponentB from './componentB';



class ContactoComponent extends Component {
    persona = new Contacto("Nombre", "Apeliido","ejemplo@gmail.com", false);

    render() {
        return (
            <div>
                <h1>Contacto:</h1>
                <h3>Nombre: { this.persona.name } { this.persona.surname}</h3>
                <h4>Correo: { this.persona.email }</h4>
                <ComponentB contacto={ this.persona }></ComponentB>
            </div>
        );
    }
}


ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ContactoComponent;
