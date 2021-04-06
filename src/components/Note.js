import React, { Component } from 'react'
import { FlatList, Text, View } from 'react-native'
import ItemNote from './ItemNote'

export default class Note extends Component {
    render() {

        return (

            <FlatList
                data={this.props.notes}
                renderItem={({ item }) => <ItemNote note={item} />}
                keyExtractor={item => item.id.toString()}
            />
        )
    }
}
