import React, { Component } from 'react'
import { Text, TouchableOpacity, View, Image, StyleSheet, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import screenDimension from '../helpers/screenDimension';
import BannerHompage from '../assets/image/BannerHomePage.png'
import Icon2 from 'react-native-vector-icons/Ionicons';
import Category from '../components/Category';
import Header from '../components/Header';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categorys: [
                { id: 1, title: 'Động vật cắn', color: '#33d9b2', save: false, image: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg' },
                { id: 2, title: 'Xương khớp', color: '#227093', save: false, image: 'listIcon' },
                { id: 3, title: 'Tim mạch', color: '#706fd3', save: false, image: 'listIcon' },
                { id: 4, title: 'Vết thương hở', color: '#34ace0', save: false, image: 'listIcon' },
                { id: 5, title: 'Tai nạn', color: '#33d9b2', save: false, image: 'listIcon' },
            ]
        };
    };
    render() {
        return (
            <SafeAreaView style={{
                flex: 1,
                flexDirection: 'column'
            }}>
                <Header />
                <View style={styles.groupTitle}>
                    <Text style={styles.textTitle}>Trang chủ</Text>
                </View>
                <View style={{
                    flex: 0.2567,
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Image style={{
                        width: screenDimension.getWidth() / 1.06,
                        height: screenDimension.getHeight() / 4.095
                    }} source={BannerHompage} />
                </View>
                <View style={styles.groupTitle2}>
                    <Text style={styles.textTitle}>Danh mục sơ cứu</Text>
                </View>
                <View style={{
                    flex: 0.493,
                    flexDirection: 'column',
                }}>
                    <Category categorys={this.state.categorys} />
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
    textTitle: {
        fontSize: 25,
        fontWeight: 'bold'
        , fontFamily: 'Roboto',
        marginLeft: screenDimension.getWidth() / 31.615
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