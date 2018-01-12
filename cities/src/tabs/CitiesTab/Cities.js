import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    FlatList
} from 'react-native'
import {
    ListItem
} from 'react-native-elements'
import uuidV4 from 'uuid/v4'
import Container from '../../components/Container'
import City from './City'
import CitiesStore from '../../CitiesStore'
import {observer} from 'mobx-react'
import {connect} from 'react-redux'

@observer
class CitiesTab extends Component {
    static navigationOptions = {
        headerTitle: (
            <Image
                style={{height:32, width:120}}
                source={require('../../assets/citieslogo.png')}
                resizeMode='contain'
            />
        )
    }

    componentDidMount() {
        CitiesStore.init()
    }

    navigate = (city) => {
        this.props.navigation.navigate('City', {city:city})
    }

    renderItem = ({item}) => {
        return (
            <ListItem 
                title={item.name}
                subtitle={item.country}
                onPress={()=>this.navigate(item)}
            />
        )
    }

    render() {
        const {cities} = this.props;
        // above is same as    const cities = this.state.cities
        return(
            <View style={styles.container}>
                <FlatList
                    data = {cities}
                    renderItem={this.renderItem}
                    keyExtractor={item=>item.id}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }
})

mapStateToProps = (state) => {
    return {
        cities:state.citiesReducer.cities
    }
}

export default connect(mapStateToProps)(CitiesTab)