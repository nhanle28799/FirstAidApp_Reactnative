import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Image, KeyboardAvoidingViewBase, ScrollView, BoxShadow } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import screenDimension from '../helpers/screenDimension';
import BannerHompage from '../assets/image/BannerHomePage.png'
import listIcon from '../assets/image/listIcon.png'
import listIcon2 from '../assets/image/listIcon2.png'
import Icon2 from 'react-native-vector-icons/Ionicons';
import Imagepost from '../assets/image/postFirstAid.png'
import fa1 from '../assets/image/fa1.png'
import fa2 from '../assets/image/fa2.png'
import fa3 from '../assets/image/fa3.png'
import Lock from 'react-native-vector-icons/Ionicons';
import Logout from 'react-native-vector-icons/Entypo';
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
                            <Icon2 name="arrow-back-outline" size={35} color="#a9a9a9" />
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
                        }}>Đổi mật khẩu</Text>
                    </View>

                </View>
                <View style={{
                    flex: 0.8563,
                    flexDirection: 'column',


                }}>
                    <View style={{
                        marginTop: screenDimension.getHeight() / 14.0461,
                        marginHorizontal: screenDimension.getWidth() / 27.4
                    }}>
                        <Text style={{
                            fontFamily: 'Roboto',
                            fontSize: 20,
                            fontWeight: 'bold',
                            justifyContent: 'center'

                        }}>Mật khẩu hiện tại:</Text>
                        <View style={{
                            flexDirection: 'row',
                            fontSize: 20,
                            borderBottomWidth: 2,
                            borderBottomColor: "#11cccc",
                            alignItems: 'center'
                        }}>
                            <TextInput placeholder="Nhập mật khẩu hiện tại.."
                                style={{
                                    width: screenDimension.getWidth() * 0.859,
                                    paddingLeft: 0,
                                    fontSize: 15
                                }} />
                            <TouchableOpacity>
                                <Lock name="eye-outline" size={25} color="#DCC2C2" />
                            </TouchableOpacity>
                        </View>
                        <Text style={{
                            fontFamily: 'Roboto',
                            fontSize: 20,
                            fontWeight: 'bold',
                            justifyContent: 'center',
                            marginTop: screenDimension.getHeight() / 48.9375

                        }}>Mật khẩu mới:</Text>
                        <View style={{
                            flexDirection: 'row',
                            fontSize: 20,
                            borderBottomWidth: 2,
                            borderBottomColor: "#11cccc",
                            alignItems: 'center'
                        }}>
                            <TextInput placeholder="Nhập mật khẩu mới"
                                style={{
                                    width: screenDimension.getWidth() * 0.859,
                                    paddingLeft: 0,
                                    fontSize: 15
                                }} />
                            <TouchableOpacity>
                                <Lock name="eye-outline" size={25} color="#DCC2C2" />
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            fontSize: 20,
                            borderBottomWidth: 2,
                            borderBottomColor: "#11cccc",
                            alignItems: 'center'
                        }}>
                            <TextInput placeholder="Nhập  lại mật khẩu mới"
                                style={{
                                    width: screenDimension.getWidth() * 0.859,
                                    paddingLeft: 0,
                                    fontSize: 15
                                }} />
                            <TouchableOpacity>
                                <Lock name="eye-outline" size={25} color="#DCC2C2" />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <TouchableOpacity style={{
                        backgroundColor: '#11cccc',
                        width: screenDimension.getWidth() / 3.0220,
                        height: screenDimension.getHeight() / 20.6052,
                        marginTop: screenDimension.getHeight() / 31.32,
                        borderRadius: 15,
                        alignSelf: 'center',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'

                    }}>
                        <Text style={{

                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 20
                        }}>Cập nhật</Text>
                    </TouchableOpacity>


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
