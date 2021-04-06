import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper'
import screenDimension from '../helpers/screenDimension'
import ItemFirstAid from './ItemFirstAid'

export default class Firstaid extends Component {

    render() {
        return (
            <Swiper paginationStyle={{ bottom: -20 }}>
                {
                    this.props.firstaid.map(firstaid => <ItemFirstAid firstaid={firstaid} key={firstaid.id} />)
                }
            </Swiper>
        )
    }
}

