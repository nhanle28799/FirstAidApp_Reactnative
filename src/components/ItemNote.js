import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import screenDimension from '../helpers/screenDimension'
import Co3la from '../assets/image/Co3la.png'

export default class ItemNote extends Component {
    renderItemNote = (note) => {
        return (
            <View key={note.id}>
                <View style={{ ...styles.groupNote, backgroundColor: note.color }}>
                    <View style={styles.imageNote}>
                        <Image source={Co3la} />
                    </View>
                    <View style={styles.groupTitle}>
                        <Text style={styles.titleNote}>
                            Lưu ý
                </Text>
                        <Text style={styles.detail}>
                            {note.text}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
    render() {
        console.log(this.props)
        return (
            this.renderItemNote(this.props.note)
        )
    }
}
const styles = StyleSheet.create({
    groupNote: {
        height: screenDimension.getHeight() / 6.7641,
        flexDirection: 'row',
        backgroundColor: '#f3a683',
        marginTop: screenDimension.getWidth() / 30.55,

        marginHorizontal: screenDimension.getWidth() / 15,
        borderRadius: 20
    },
    imageNote: {
        flex: 0.2328
        , justifyContent: 'center',
        alignItems: 'flex-end',
    },
    groupTitle: {
        flex: 0.7672,
        flexDirection: 'column',
        marginLeft: screenDimension.getWidth() / 20.55,
        marginTop: screenDimension.getWidth() / 89.55,
        marginRight: screenDimension.getWidth() / 28.55,
    },
    titleNote: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#0430A3'
        , marginTop: screenDimension.getHeight() / 37.409
    },
    detail: {
        fontSize: 15,
        color: '#fff',
        marginTop: screenDimension.getWidth() / 100.55
    },
})