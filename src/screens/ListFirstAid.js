import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, View, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import screenDimension from '../helpers/screenDimension';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Imagepost from '../assets/image/postFirstAid.png'

import Post from '../components/Post';
import Header from '../components/Header';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                { id: 1, title: 'Sơ cứu rắn cắn', color: '#17c0eb', save: false, image: 'listIcon' },
                { id: 2, title: 'Sơ cứu sứa cắn', color: '#3ae374', save: false, image: 'listIcon' },
                { id: 3, title: 'Sơ cứu ong đốt', color: '#3ae374', save: false, image: 'listIcon' },
                { id: 4, title: 'Sơ cứu chó cắn', color: '#ffb8b8', save: false, image: 'listIcon' },
                { id: 5, title: 'Sơ cứu rắn cắn', color: '#17c0eb', save: false, image: 'listIcon' },
                { id: 6, title: 'Sơ cứu sứa cắn', color: '#3ae374', save: false, image: 'listIcon' },
                { id: 7, title: 'Sơ cứu ong đốt', color: '#3ae374', save: false, image: 'listIcon' },
                { id: 8, title: 'Sơ cứu chó cắn', color: '#ffb8b8', save: false, image: 'listIcon' },

            ],
        };
    };
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column'
            }}>
                <Header />
                <View style={styles.groupTitle}>
                    <Text style={styles.textTitle}>Danh mục bài viết</Text>
                </View>
                <View style={styles.groupItem}>
                    <Post posts={this.state.posts} />
                </View>
                <View style={styles.groupTool}>
                    <View style={{
                        flex: 1,
                    }}>
                        <TouchableOpacity
                            style={styles.buttonTool}>
                            <Icon name="home" size={35} color="black" />
                            <Text>Trang chủ</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 1,
                    }}>
                        <TouchableOpacity style={styles.buttonTool}>
                            <Icon name="comments" size={35} color="black" />
                            <Text>Đóng góp</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 1,
                    }}>
                        <TouchableOpacity style={styles.buttonTool}>
                            <Icon2 name="newspaper-sharp" size={35} color="black" />
                            <Text>Bài viết</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 1,
                    }}>
                        <TouchableOpacity style={styles.buttonTool}>
                            <Icon2 name="settings" size={35} color="black" />
                            <Text>Cài đặt</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
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
    imagecatygory: {
        flex: 0.3641,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    groupTitle: {
        flex: 0.0613,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    groupTitle2: {
        flex: 0.09195,
        flexDirection: 'column',
        justifyContent: 'center'

    },
    groupTool: {
        flex: 0.0724,
        flexDirection: 'row',
        borderWidth: 0.5,
        justifyContent: 'space-around'
    },
    buttonTool: {
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center'
    },
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


});