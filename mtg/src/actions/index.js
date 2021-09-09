export const BUILD_STATE = 'BUILD_STATE';

const mtg = require('mtgsdk');

export const build = () => {
    return ( dispatch ) => {
        mtg.card.find(id)
        .then(res => {
            console.log(res.card)
            dispatch(buildState(res.card))
        })
    }
}

export const buildState = card => {
    return({ type: BUILD_STATE, payload: card })
}