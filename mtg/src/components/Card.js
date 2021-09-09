import React from 'react';
import { connect } from 'react-redux';
import { build } from '../actions';

const Card = props => {

    return (
        <div className = 'card'>
            <img src = { props.img } />
        </div>
    )
}

const mapStateToProps = ( state, props ) => {
    console.log(state);
    return {
        img: state.img,
        id: props.id
    }
}

export default connect( mapStateToProps, { build } )( Card );