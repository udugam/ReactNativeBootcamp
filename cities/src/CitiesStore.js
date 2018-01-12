import {observable} from 'mobx'
import uuidV4 from 'uuid/v4'
import {AsyncStorage} from 'react-native'

const CITIES_KEY = 'CITIES_KEY'

class CitiesStore {
    @observable 
    cities =[
        {name: 'Toronto', country: 'Canada', id: uuidV4(), locations:[]},
        {name: 'New York', country: 'USA', id: uuidV4(), locations:[]},
        {name: 'Chicago', country: 'USA', id: uuidV4(), locations:[]},
        {name: 'Miami', country: 'USA', id: uuidV4(), locations:[]}
    ]

    init() {
        AsyncStorage.getItem(CITIES_KEY)
        .then( data => {
            data = JSON.parse(data)
            this.cities = data
        })
    }

    addCity(city) {
        const cityWithInfo = {
            ...city,
            id:uuidV4(),
            locations: []
        }
        this.cities.push(city)
        AsyncStorage.setItem(CITIES_KEY, JSON.stringify(this.cities))
            .then(() => {
                console.log('successfully added item')
            })
    }
}

export default new CitiesStore()