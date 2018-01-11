import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native'

const Container = ({children}) => (
    <View style={styles.container}>
        {children}
    </View>
)

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    }
})

export default Container