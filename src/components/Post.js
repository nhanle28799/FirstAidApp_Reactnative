import React, { Component } from 'react'
import { FlatList, Text, View } from 'react-native'
import ItemPost from './ItemPost'

export default class Post extends Component {
    render() {

        return (
            <FlatList
                data={this.props.posts}
                renderItem={({ item }) => <ItemPost post={item} />}
                key={item => item.id.toString()} />
        )
    }
}
