import uuidV4 from 'uuid/v4'

const initialState = {
    cities: [
        {name: 'Toronto', country: 'Canada', id: uuidV4(), locations:[]},
        {name: 'New York', country: 'USA', id: uuidV4(), locations:[]},
        {name: 'Chicago', country: 'USA', id: uuidV4(), locations:[]},
        {name: 'Miami', country: 'USA', id: uuidV4(), locations:[]}
    ]
}

export default function citiesReducer(state = initialState, action) {
    switch(action.type) {
        case 'ADD_CITY':
            const cityWithInfo = {
                ...action.city,
                id: uuidV4(),
                locations:[]
            }
            return {
                cities: [
                    ...state.cities,
                    cityWithInfo
                ]
            }
        default:
        return state
    }
}