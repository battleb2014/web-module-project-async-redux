import React from 'react';
import { connect } from 'react-redux';
import { fetch } from '../actions';

const Card = props => {
    handleClick = () => {
        props.fetch();
    }

    return (
        <div>
            <button onClick = { handleClick }></button>
        </div>
    )
}

export default connect( null, { fetch } )( Card );