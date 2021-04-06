import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import screenDimension from '../helpers/screenDimension'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Header extends Component {
    render() {
        return (
            <View style={{
                flex: 0.0713,
                flexDirection: 'row'
            }}>
                <View style={styles.buttonBar}>
                    <TouchableOpacity >
                        <Icon name="bars" size={35} color="#a9a9a9" />
                    </TouchableOpacity>
                </View>
                <View style={styles.groupSearch}>
                    <TextInput placeholder="Tìm kiếm" style={styles.textSearch} />
                    <TouchableOpacity>
                        <Icon name="search" size={25} color="#a9a9a9" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    buttonBar: {
        flexDirection: 'row',
        flex: 0.097323,
        justifyContent: 'flex-end',
        alignItems: 'center'

    },
    groupSearch: {
        flexDirection: 'row',
        flex: 0.902677,
        alignItems: 'center'
        , borderWidth: 0.5,
        borderRadius: 30,
        marginVertical: screenDimension.getWidth() / 58.714,
        borderColor: '#000',
        marginHorizontal: screenDimension.getWidth() / 52.2,
        justifyContent: 'center',
        backgroundColor: 'white',
        elevation: 7
    },
    textSearch: {
        fontSize: 20,
        width: screenDimension.getWidth() / 1.4159,
        paddingVertical: 0
    },
})