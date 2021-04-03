import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Image, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import screenDimension from '../helpers/screenDimension';
import BannerHompage from '../assets/image/BannerHomePage.png'
import listIcon from '../assets/image/listIcon.png'
import Icon2 from 'react-native-vector-icons/Ionicons';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import Feedback from './Feedback'
import ListFirstAid from './ListFirstAid'

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categorys: [
                { id: 1, title: 'Động vật cắn', color: '#33d9b2', save: false, image: 'listIcon' },
                { id: 2, title: 'Xương khớp', color: '#227093', save: false, image: 'listIcon' },
                { id: 3, title: 'Tim mạch', color: '#706fd3', save: false, image: 'listIcon' },
                { id: 4, title: 'Vết thương hở', color: '#34ace0', save: false, image: 'listIcon' },
                { id: 5, title: 'Tai nạn', color: '#33d9b2', save: false, image: 'listIcon' },
            ],
        };
    }
    render() {

        return (
            <SafeAreaView style={{
                flex: 1,
                flexDirection: 'column'
            }}>
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
                <View style={styles.groupTitle}>
                    <Text style={styles.textTitle}>Trang chủ</Text>
                </View>
                <View style={{
                    flex: 0.2567,
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Image style={{
                        height: '100%'
                    }} source={BannerHompage} />
                </View>
                <View style={styles.groupTitle2}>
                    <Text style={styles.textTitle}>Danh mục sơ cứu</Text>
                </View>
                <View style={{
                    flex: 0.493,
                    flexDirection: 'column',
                }}>
                    <ScrollView>
                        {
                            this.state.categorys.map(category => {
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
                                )
                            })



                        }
                    </ScrollView>
                </View>
                <View style={styles.groupTool}>
                    <View >
                        <TouchableOpacity
                            style={styles.buttonTool}>
                            <Icon name="home" size={35} color="black" />
                            <Text>Trang chủ</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={styles.buttonTool}>
                            <Icon name="comments" size={35} color="black" />
                            <Text>Đóng góp</Text>
                        </TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity
                            style={styles.buttonTool}>
                            <Icon2 name="newspaper-sharp" size={35} color="black" />
                            <Text>Bài viết</Text>
                        </TouchableOpacity>
                    </View>
                    <View >
                        <TouchableOpacity
                            style={styles.buttonTool}>
                            <Icon2 name="settings" size={35} color="black" />
                            <Text>Cài đặt</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView >

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
    textTitle: {
        fontSize: 25,
        fontWeight: 'bold'
        , fontFamily: 'Roboto',
        marginLeft: screenDimension.getWidth() / 31.615
    },
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
    }

})