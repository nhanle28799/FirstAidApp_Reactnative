import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Image, KeyboardAvoidingViewBase, ScrollView, BoxShadow } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import screenDimension from '../helpers/screenDimension';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Lock from 'react-native-vector-icons/Ionicons';
import Logout from 'react-native-vector-icons/Entypo';
import Logo2 from '../assets/image/Logo2.png';

export default class HomePage extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column'
            }}>
                <View style={{
                    flex: 0.0713,
                    flexDirection: 'row'
                }}>

                    <View style={{
                        flexDirection: 'row',
                        flex: 0.097323,
                        justifyContent: 'flex-end',
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity style={{
                        }}>
                            <Icon name="bars" size={35} color="#a9a9a9" />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 0.902677,
                        borderRadius: 30,
                        marginVertical: screenDimension.getWidth() / 58.714,
                        borderColor: '#000',
                        marginHorizontal: screenDimension.getWidth() / 52.2,
                        justifyContent: 'center',
                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 25,
                            marginLeft: screenDimension.getWidth() / 35.51
                        }}>Đóng Góp</Text>
                    </View>
                </View>
                <View style={{
                    flex: 0.8563,
                    flexDirection: 'column',

                }}>
                    <View style={{
                        flex: 0.35,

                    }}>
                        <Image source={Logo2} style={{
                            alignSelf: 'center',
                            height: screenDimension.getWidth() / 4.42,
                            width: screenDimension.getWidth() / 4.42,
                            marginTop: screenDimension.getHeight() / 40.92
                        }} />
                        <View style={{
                            flexDirection: 'column'
                        }}>
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 18,
                                fontWeight: 'bold',
                                marginTop: screenDimension.getHeight() / 100,
                                color: '#11cccc'
                            }}>Welcome To First Aid App</Text>
                            <TextInput placeholder="Nhập tên" style={{
                                marginHorizontal: screenDimension.getWidth() / 29.3571
                                , backgroundColor: '#F2F1F1',
                                paddingLeft: 10,
                                borderTopLeftRadius: 20,
                                borderTopRightRadius: 20
                                , marginTop: screenDimension.getHeight() / 100,
                            }} />
                            <TextInput placeholder="Nhập nội dung đóng góp" style={{
                                marginHorizontal: screenDimension.getWidth() / 29.3571
                                , backgroundColor: '#F2F1F1',
                                borderTopWidth: 2,
                                borderColor: '#B4B4B4',
                                paddingLeft: 10,
                                borderBottomLeftRadius: 20,
                                borderBottomRightRadius: 20,
                                height: screenDimension.getHeight() / 10.2875
                            }} />
                        </View>
                    </View>
                    <View style={{
                        flex: 0.65
                    }}>

                    </View>
                </View>

                <View style={{
                    flex: 0.0724,
                    flexDirection: 'row',
                    borderWidth: 0.5
                }}>
                    <View style={{
                        flex: 1,
                    }}>
                        <TouchableOpacity
                            style={{
                                flexDirection: "column",
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <Icon name="home" size={35} color="black" />
                            <Text>Trang chủ</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 1,
                    }}>
                        <TouchableOpacity
                            style={{
                                flexDirection: "column",
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <Icon name="comments" size={35} color="black" />
                            <Text>Đóng góp</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 1,
                    }}>
                        <TouchableOpacity
                            style={{
                                flexDirection: "column",
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <Icon2 name="newspaper-sharp" size={35} color="black" />
                            <Text>Bài viết</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 1,
                    }}>
                        <TouchableOpacity
                            style={{
                                flexDirection: "column",
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                            <Icon2 name="settings" size={35} color="black" />
                            <Text>Cài đặt</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >

        )
    }
}
