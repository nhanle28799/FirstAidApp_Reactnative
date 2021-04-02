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
                        }}>Cài đặt</Text>
                    </View>
                </View>
                <View style={{
                    flex: 0.8563,
                    flexDirection: 'column',
                    alignItems: 'center',


                }}>
                    <TouchableOpacity style={{
                        width: screenDimension.getWidth(),
                        height: screenDimension.getHeight() / 12.695
                        , borderTopWidth: 0.4,
                        alignItems: 'center',
                        flexDirection: 'row'
                    }}>
                        <Lock name="md-lock-closed-sharp" size={30} color="#11CCCC" style={{
                            flex: 0.07785,
                            marginLeft: screenDimension.getWidth() / 29.3571
                        }} />
                        <Text style={{
                            flex: 0.92215,
                            fontSize: 18,
                            marginLeft: screenDimension.getWidth() / 29.3571

                        }}>Đổi mật khẩu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        width: screenDimension.getWidth(),
                        height: screenDimension.getHeight() / 12.695
                        , borderTopWidth: 0.4,
                        alignItems: 'center',
                        flexDirection: 'row'
                    }}>
                        <Icon name="bookmark" size={30} color="#11CCCC" style={{
                            flex: 0.07785,
                            marginLeft: screenDimension.getWidth() / 29.3571

                        }} />
                        <Text style={{
                            flex: 0.92215,
                            fontSize: 18,
                            marginLeft: screenDimension.getWidth() / 29.3571
                        }}>Đã lưu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        width: screenDimension.getWidth(),
                        height: screenDimension.getHeight() / 12.695
                        , borderTopWidth: 0.4,
                        alignItems: 'center',
                        flexDirection: 'row'
                    }}>
                        <Logout name="log-out" size={30} color="#11CCCC" style={{
                            flex: 0.07785,
                            marginLeft: screenDimension.getWidth() / 29.3571
                        }} />
                        <Text style={{
                            flex: 0.92215,
                            fontSize: 18,
                            marginLeft: screenDimension.getWidth() / 29.3571
                        }}>Đăng xuất</Text>
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
