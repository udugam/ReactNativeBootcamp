import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    Dimensions
} from 'react-native'
import Container from '../../components/Container'
import {Button} from 'react-native-elements'
import logoImage from '../../assets/citieslogo.png'
import CitiesStore from '../../CitiesStore'
import {connect} from 'react-redux'
import {addCity} from '../../actions/citiesActions'

const deviceInfo = Dimensions.get('window')

class AddCityTab extends Component {
    state = {
        name: '',
        country: ''
    }

    onChangeText = (key, value) => {
        this.setState({
            [key]:value
        })
    }

    submitForm = () => {
        if( this.state.city === '' || this.state.country == '') return
        //CitiesStore.addCity(this.state)
        this.props.dispatch(addCity(this.state))
        this.setState({
            name: '',
            country: ''
        })
        this.props.navigation.navigate('Cities')
    }

    render() {
        return(
            <Container>
                <Image
                    resizeMode='contain'
                    source={logoImage}
                    style={{maxHeight:44, width:deviceInfo.width}}
                />
                <TextInput
                    value = {this.state.name}
                    placeholder = 'City Name'
                    onChangeText = { (value) => this.onChangeText('name', value) }
                    style={styles.input}
                />
                <TextInput
                    value = {this.state.country}
                    placeholder = 'Country Name'
                    onChangeText = { (value) => this.onChangeText('country', value) }
                    style={styles.input}
                />
                <Button
                    title='Submit'
                    onPress={this.submitForm}
                    contentContainerStyle={{marginTop:10}}
                />
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height:45,
        backgroundColor: 'white',
        padding:8,
        marginTop:8,
        marginHorizontal:20
    }
})

export default connect()(AddCityTab)