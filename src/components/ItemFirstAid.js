import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import screenDimension from '../helpers/screenDimension'
import Help from '../assets/image/Help.png'

export default class ItemFirstAid extends Component {
    renderItemfirstaid = (firstaid) => {
        return (
            <View style={styles.groupfirstaid} >
                <View style={styles.gruopimagefirstaid}>
                    <Image source={Help} />
                </View>
                <View style={styles.grouptextfirstaid}>
                    <Text style={styles.textfirstaid}> {firstaid.title}</Text>
                </View>
            </View>
        )
    }
    render() {
        return (
            this.renderItemfirstaid(this.props.firstaid)
        )
    }
}
const styles = StyleSheet.create({
    groupfirstaid: {
        flex: 1,
        backgroundColor: '#546de5',
        borderRadius: 25,
    },
    gruopimagefirstaid: {
        flex: 0.7,
        backgroundColor: '#F2EFEF',
        borderRadius: 20,
        marginHorizontal: screenDimension.getWidth() / 70,
        marginVertical: screenDimension.getWidth() / 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    grouptextfirstaid: {
        flex: 0.3,
        width: screenDimension.getWidth() / 1.19825,
        justifyContent: 'center'
    },
    textfirstaid: {
        textAlign: 'center',
        fontSize: 14,
        marginHorizontal: screenDimension.getWidth() / 20.8571,
        fontWeight: 'bold'
        , color: 'white',
    },
})