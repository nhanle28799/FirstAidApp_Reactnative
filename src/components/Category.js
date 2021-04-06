import React, { Component } from 'react'
import { FlatList, Text, View } from 'react-native'
import ItemCategory from './ItemCategory'

export default class Category extends Component {
    render() {

        return (
            <FlatList
                data={this.props.categorys}
                renderItem={({ item }) => <ItemCategory category={item} />}
                keyExtractor={(item) => item.id.toString()}
            />
        )
    }
}
