export const logger = (store) => (next) => (action) => {
    console.log(action)
    next(action)
}

export const featuring = (store) => (next) => (actionInfo) => {
    const featured = [{ name: 'eddie' }, ...actionInfo.action.payload]
    const updatedActionInfo = {
        ...actionInfo, payload: featured
    }
    next(updatedActionInfo);
}

export const nameUpperCase = (store) => (next) => (actionInfo) => {

    const featured = [
             ...actionInfo.payload.map(
                pokemon => ({
                    ...pokemon,
                     name: pokemon.name.charAt(0).toUpperCase() +
                            pokemon.name.slice(1)
                })
            )
        ]
    
    const updateActionInfo = {
            ...actionInfo, payload: featured
        }
        next(updateActionInfo)
    }