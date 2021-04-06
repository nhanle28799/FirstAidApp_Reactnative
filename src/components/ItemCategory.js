import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import screenDimension from '../helpers/screenDimension';
import listIcon from '../assets/image/listIcon.png'

export default class ItemCategory extends Component {
    renderItemCategory = (category) => {
        return (
            <View key={category.id}>
                <TouchableOpacity style={{ ...styles.buttonCategory, backgroundColor: category.color }}>
                    <View style={styles.imagecatygory}>
                        <Image source={listIcon} style={{
                            borderRadius: 4,
                        }} />
                    </View>
                    <View style={{ flex: 0.6359, }}>
                        <Text style={{ ...styles.textTitle, color: 'white' }}>{category.title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
    render() {


        return (
            this.renderItemCategory(this.props.category)
        )
    }
}
const styles = StyleSheet.create({
    buttonCategory: {
        flexDirection: 'row',
        marginHorizontal: screenDimension.getWidth() / 20.55,
        height: screenDimension.getHeight() / 7.897
        , borderRadius: 20,
        borderWidth: 0.3,
        borderColor: '#999',
        alignItems: 'center',
        backgroundColor: '#33d9b2',
        elevation: 7,
        marginBottom: screenDimension.getWidth() / 20.55,
    },
    imagecatygory: {
        flex: 0.3641,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textTitle: {
        fontSize: 25,
        fontWeight: 'bold'
        , fontFamily: 'Roboto',
        marginLeft: screenDimension.getWidth() / 31.615
    },

})