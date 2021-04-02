import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Image, KeyboardAvoidingViewBase, SafeAreaView, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import screenDimension from '../helpers/screenDimension';
import BannerHompage from '../assets/image/BannerHomePage.png'
import listIcon from '../assets/image/listIcon.png'
import Icon2 from 'react-native-vector-icons/Ionicons';
export default class HomePage extends Component {
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
                        <KeyboardAvoidingView behavior=''>
                            <TextInput placeholder="Tìm kiếm" style={{
                                fontSize: 20,
                                width: screenDimension.getWidth() / 1.4159,
                                paddingVertical: 0
                            }} />
                        </KeyboardAvoidingView>
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
                        fontSize: 25,
                        fontWeight: 'bold'
                        , fontFamily: 'Roboto',
                        marginLeft: screenDimension.getWidth() / 31.615
                    }}>Trang chủ</Text>
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
                <View style={{
                    flex: 0.09195,
                    flexDirection: 'column',
                    justifyContent: 'center'
                    , marginLeft: screenDimension.getWidth() / 31.615,

                }}>
                    <Text style={{
                        fontFamily: "Roboto",
                        fontSize: 25,
                        fontWeight: 'bold'
                    }}>Danh mục sơ cứu</Text>
                </View>
                <View style={{
                    flex: 0.493,
                    flexDirection: 'column',

                }}>
                    <ScrollView>
                        <TouchableOpacity style={{
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


                        }}>
                            <View style={{
                                flex: 0.3641,
                                flexDirection: 'row',
                                justifyContent: 'center',
                            }}>
                                <Image source={listIcon} style={{
                                    borderRadius: 4,
                                }} />
                            </View>
                            <View style={{
                                flex: 0.6359,
                                flexDirection: 'row',


                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 25,
                                    color: 'white'
                                }}>Rắn cắn</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            marginHorizontal: screenDimension.getWidth() / 20.55,
                            height: screenDimension.getHeight() / 7.897
                            , borderRadius: 20,
                            borderWidth: 0.3,
                            borderColor: '#999',
                            alignItems: 'center',
                            backgroundColor: '#34ace0',
                            elevation: 7,
                            marginBottom: screenDimension.getWidth() / 20.55,


                        }}>
                            <View style={{
                                flex: 0.3641,
                                flexDirection: 'row',
                                justifyContent: 'center',
                            }}>
                                <Image source={listIcon} style={{
                                    borderRadius: 4,
                                }} />
                            </View>
                            <View style={{
                                flex: 0.6359,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',

                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 25,
                                    color: 'white'
                                }}>Rắn cắn</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            marginHorizontal: screenDimension.getWidth() / 20.55,
                            height: screenDimension.getHeight() / 7.897
                            , borderRadius: 20,
                            borderWidth: 0.3,
                            borderColor: '#999',
                            alignItems: 'center',
                            backgroundColor: '#706fd3',
                            elevation: 7,
                            marginBottom: screenDimension.getWidth() / 20.55,


                        }}>
                            <View style={{
                                flex: 0.3641,
                                flexDirection: 'row',
                                justifyContent: 'center',
                            }}>
                                <Image source={listIcon} style={{
                                    borderRadius: 4,
                                }} />
                            </View>
                            <View style={{
                                flex: 0.6359,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',

                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 25,
                                    color: 'white'
                                }}>Rắn cắn</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            marginHorizontal: screenDimension.getWidth() / 20.55,
                            height: screenDimension.getHeight() / 7.897
                            , borderRadius: 20,
                            borderWidth: 0.3,
                            borderColor: '#999',
                            alignItems: 'center',
                            backgroundColor: '#227093',
                            elevation: 7,
                            marginBottom: screenDimension.getWidth() / 20.55,


                        }}>
                            <View style={{
                                flex: 0.3641,
                                flexDirection: 'row',
                                justifyContent: 'center',
                            }}>
                                <Image source={listIcon} style={{
                                    borderRadius: 4,
                                }} />
                            </View>
                            <View style={{
                                flex: 0.6359,
                                flexDirection: 'row',
                                justifyContent: 'flex-start',

                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 25,
                                    color: 'white'
                                }}>Rắn cắn</Text>
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

            </SafeAreaView >

        )
    }
}
