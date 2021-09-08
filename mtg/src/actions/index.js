export const FETCH_DATA = 'FETCH_DATA';

const mtg = require('mtgsdk');

export const fetch = () => {
    return ( dispatch ) => {
        mtg.card.find(4600)
        .then(res => {
            console.log(res.card)
            dispatch(fetchData(res))
        })
    }
}

export const fetchData = card => {
    return({ type: FETCH_DATA, payload: card })
}