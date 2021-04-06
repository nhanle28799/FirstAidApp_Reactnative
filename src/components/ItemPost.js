import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import screenDimension from '../helpers/screenDimension'
import Imagepost from '../assets/image/postFirstAid.png'

export default class ItemPost extends Component {
    renderPosts = (post) => {
        return (
            <View key={post.id}>
                <TouchableOpacity style={{ ...styles.btnItem, backgroundColor: post.color }} >
                    <View style={styles.imageIcon}>
                        <Image source={Imagepost} />
                    </View>
                    <View style={styles.groupText}>
                        <Text style={{ ...styles.textTitle, color: 'white' }}>{post.title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    render() {
        return (
            this.renderPosts(this.props.post)
        )
    }
}
const styles = StyleSheet.create({
    textTitle: {
        fontSize: 25,
        fontWeight: 'bold'
        , fontFamily: 'Roboto',
        marginLeft: screenDimension.getWidth() / 31.615
    },
    groupItem: {
        flex: 0.795,
        flexDirection: 'column',
    },
    btnItem: {
        flexDirection: 'row',
        marginHorizontal: screenDimension.getWidth() / 25.55
        , height: screenDimension.getHeight() / 6.75
        , borderWidth: 0.3,
        borderRadius: 30,
        borderColor: '#999',
        marginBottom: screenDimension.getHeight() / 68,
        marginTop: screenDimension.getHeight() / 68,
        backgroundColor: '#17c0eb',
        elevation: 7
    },
    imageIcon: {
        flex: 0.2307,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    groupText: {
        flex: 0.7693,
        justifyContent: 'center',
        marginLeft: screenDimension.getWidth() / 19.5714
    },
})