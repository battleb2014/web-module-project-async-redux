import React from 'react';
import Card from './Card';


const Cards = props => {

    const randomId = () => {
        return Math.floor( Math.random() * 4980 ) + 1;
    }

    return (
        <div className = 'cards'>
            <Card id = { randomId() } />
            <Card id = { randomId() } />
            <Card id = { randomId() } />
            <Card id = { randomId() } />
            <Card id = { randomId() } />
            <Card id = { randomId() } />
            <Card id = { randomId() } />
        </div>
    )
}

export default Cards;