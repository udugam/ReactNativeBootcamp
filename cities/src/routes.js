import React from 'react'
import {TabNavigator} from 'react-navigation'

import AddCityTab from './tabs/AddCityTab/AddCityTab'
import CitiesTab from './tabs/CitiesTab/CitiesTab'

const routes = {
    Cities: {screen: CitiesTab},
    AddCity: {screen: AddCityTab}
}

export default TabNavigator(routes)