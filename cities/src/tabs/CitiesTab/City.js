import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

class City extends Component {
    static navigationOptions = (props) => {
        const city = props.navigation.state.params.city
        return {
            title: city.name
        }
    }
    render() {
        return (
            <View>
                <Text>CityFile</Text>
            </View>
        )
    }
}

export default City