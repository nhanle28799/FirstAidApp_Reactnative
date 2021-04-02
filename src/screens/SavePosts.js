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
                            <Icon2 name="arrow-back" size={35} color="#a9a9a9" />
                        </TouchableOpacity>
                    </View>
                    <View style={{
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


                    }}>
                        <TextInput placeholder="Tìm kiếm" style={{
                            fontSize: 20,
                            width: screenDimension.getWidth() / 1.4159,
                            paddingVertical: 0
                        }} />
                        <TouchableOpacity>
                            <Icon name="search" size={25} color="#a9a9a9" style={{
                                paddingVertical: 0
                            }} />
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{
                    flex: 0.0613,
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold'
                        , fontFamily: 'Roboto',
                        marginLeft: screenDimension.getWidth() / 31.615
                    }}>Bài viết đã lưu</Text>
                </View>
                <View style={{
                    flex: 0.795,
                    flexDirection: 'column',
                    alignItems: 'center',


                }}>

                    <ScrollView>

                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            width: screenDimension.getWidth() / 1.0901
                            , height: screenDimension.getHeight() / 6.75
                            , borderWidth: 1,
                            borderRadius: 30,
                            borderColor: '#999',
                            marginBottom: screenDimension.getHeight() / 68,
                            marginTop: screenDimension.getHeight() / 68,
                            backgroundColor: 'white',
                            elevation: 7


                        }} >
                            <View style={{
                                flex: 0.2307,
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}>
                                <Image source={Imagepost} />
                            </View>
                            <View style={{
                                flex: 0.7693,
                                justifyContent: 'center',
                                marginLeft: screenDimension.getWidth() / 19.5714
                            }}>
                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: 'bold'
                                }}>Sơ cứu khi đập đầu</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            width: screenDimension.getWidth() / 1.0901
                            , height: screenDimension.getHeight() / 6.75
                            , borderWidth: 1,
                            borderRadius: 30,
                            borderColor: '#999',
                            marginBottom: screenDimension.getHeight() / 68,
                            marginTop: screenDimension.getHeight() / 68,
                            backgroundColor: 'white',
                            elevation: 7
                        }} >
                            <View style={{
                                flex: 0.2307,
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}>
                                <Image source={fa1} />
                            </View>
                            <View style={{
                                flex: 0.7693,
                                justifyContent: 'center',
                                marginLeft: screenDimension.getWidth() / 19.5714
                            }}>
                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: 'bold'
                                }}>Sơ cứu khi bị trầy da</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            width: screenDimension.getWidth() / 1.0901
                            , height: screenDimension.getHeight() / 6.75
                            , borderWidth: 1,
                            borderRadius: 30,
                            borderColor: '#999',
                            marginBottom: screenDimension.getHeight() / 68,
                            marginTop: screenDimension.getHeight() / 68,
                            backgroundColor: 'white',
                            elevation: 7

                        }} >
                            <View style={{
                                flex: 0.2307,
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}>
                                <Image source={fa2} />
                            </View>
                            <View style={{
                                flex: 0.7693,
                                justifyContent: 'center',
                                marginLeft: screenDimension.getWidth() / 19.5714
                            }}>
                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: 'bold'
                                }}>Sơ cứu khi bị phỏng</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            width: screenDimension.getWidth() / 1.0901
                            , height: screenDimension.getHeight() / 6.75
                            , borderWidth: 1,
                            borderRadius: 30,
                            borderColor: '#999',
                            marginBottom: screenDimension.getHeight() / 68,
                            marginTop: screenDimension.getHeight() / 68,
                            backgroundColor: 'white',
                            elevation: 7

                        }} >
                            <View style={{
                                flex: 0.2307,
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}>
                                <Image source={fa3} />
                            </View>
                            <View style={{
                                flex: 0.7693,
                                justifyContent: 'center',
                                marginLeft: screenDimension.getWidth() / 19.5714
                            }}>
                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: 'bold'
                                }}>Sơ cứu khi bị vỡ mạch máu</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            width: screenDimension.getWidth() / 1.0901
                            , height: screenDimension.getHeight() / 6.75
                            , borderWidth: 1,
                            borderRadius: 30,
                            borderColor: '#999',
                            marginBottom: screenDimension.getHeight() / 68,
                            marginTop: screenDimension.getHeight() / 68,
                            backgroundColor: 'white',
                            elevation: 7

                        }} >
                            <View style={{
                                flex: 0.2307,
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}>
                                <Image source={fa1} />
                            </View>
                            <View style={{
                                flex: 0.7693,
                                justifyContent: 'center',
                                marginLeft: screenDimension.getWidth() / 19.5714
                            }}>
                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: 'bold'
                                }}>Sơ cứu khi bị chảy máu mũi</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            width: screenDimension.getWidth() / 1.0901
                            , height: screenDimension.getHeight() / 6.75
                            , borderWidth: 1,
                            borderRadius: 30,
                            borderColor: '#999',
                            marginBottom: screenDimension.getHeight() / 68,
                            marginTop: screenDimension.getHeight() / 68,
                            backgroundColor: 'white',
                            elevation: 7

                        }} >
                            <View style={{
                                flex: 0.2307,
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}>
                                <Image source={fa2} />
                            </View>
                            <View style={{
                                flex: 0.7693,
                                justifyContent: 'center',
                                marginLeft: screenDimension.getWidth() / 19.5714
                            }}>
                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: 'bold'
                                }}>Sơ cứu lên huyết áp</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            width: screenDimension.getWidth() / 1.0901
                            , height: screenDimension.getHeight() / 6.75
                            , borderWidth: 1,
                            borderRadius: 30,
                            borderColor: '#999',
                            marginBottom: screenDimension.getHeight() / 68,
                            marginTop: screenDimension.getHeight() / 68,
                            backgroundColor: 'white',
                            elevation: 7
                        }} >
                            <View style={{
                                flex: 0.2307,
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}>
                                <Image source={fa3} />
                            </View>
                            <View style={{
                                flex: 0.7693,
                                justifyContent: 'center',
                                marginLeft: screenDimension.getWidth() / 19.5714
                            }}>
                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: 'bold'
                                }}>Sơ cứu khi bị gãy xương</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>


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
