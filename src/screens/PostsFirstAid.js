import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, Image, KeyboardAvoidingViewBase, ScrollView, BoxShadow } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import screenDimension from '../helpers/screenDimension';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/Entypo';

import Bookmark from 'react-native-vector-icons/Feather';
import Imagepost from '../assets/image/postFirstAid.png'
import Co3la from '../assets/image/Co3la.png'
import Help from '../assets/image/Help.png'
export default class HomePage extends Component {

    render() {
        return (

            <View style={{
                flex: 1,
                flexDirection: 'column'
            }}>
                <View style={{
                    flex: 0.0713,
                    flexDirection: 'row',
                    borderBottomWidth: 0.2
                }}>
                    <View style={{
                        flexDirection: 'row',
                        flex: 0.097323,
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                    }}>
                        <TouchableOpacity style={{
                        }}>
                            <Icon2 name="arrow-back" size={35} color="#a9a9a9" />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 0.85354,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold'
                            , fontFamily: 'Roboto',
                            marginLeft: screenDimension.getWidth() / 31.615
                        }}>Sơ cứu huyết áp</Text>
                    </View>
                    <TouchableOpacity style={{
                        flex: 0.097323,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Bookmark name="bookmark" size={30} color="#a9a9a9" />
                    </TouchableOpacity>
                </View>

                <View style={{
                    flex: 0.5077,
                    flexDirection: 'column',

                }}>

                    <ScrollView>
                        <View style={{
                            height: screenDimension.getHeight() / 6.7641,
                            flexDirection: 'row',
                            backgroundColor: '#f3a683',
                            marginTop: screenDimension.getWidth() / 30.55,

                            marginHorizontal: screenDimension.getWidth() / 15,
                            borderRadius: 20

                        }}>
                            <View style={{
                                flex: 0.2328
                                , justifyContent: 'center',
                                alignItems: 'flex-end',


                            }}>
                                <Image source={Co3la} />
                            </View>
                            <View style={{
                                flex: 0.7672,
                                flexDirection: 'column',
                                marginLeft: screenDimension.getWidth() / 20.55,
                                marginTop: screenDimension.getWidth() / 89.55,
                                marginRight: screenDimension.getWidth() / 28.55,


                            }}>
                                <Text style={{
                                    fontSize: 23,
                                    fontWeight: 'bold',
                                    color: '#0430A3'
                                    , marginTop: screenDimension.getHeight() / 37.409
                                }}>
                                    Lưu ý
                                </Text>
                                <Text style={{
                                    fontSize: 15,
                                    color: '#fff',
                                    marginTop: screenDimension.getWidth() / 100.55
                                }}>
                                    Đặt bệnh nhân ở tư thế nằm nghỉ, mở cửa thông thoáng không khí.
                                </Text>
                            </View>


                        </View>
                        <View style={{
                            height: screenDimension.getHeight() / 6.7641,
                            flexDirection: 'row',
                            backgroundColor: '#778beb',
                            marginTop: screenDimension.getWidth() / 30.55,
                            marginHorizontal: screenDimension.getWidth() / 15,

                            borderRadius: 20
                        }}>
                            <View style={{
                                flex: 0.2328
                                , justifyContent: 'center',
                                alignItems: 'flex-end',


                            }}>
                                <Image source={Co3la} />
                            </View>
                            <View style={{
                                flex: 0.7672,
                                flexDirection: 'column',
                                marginLeft: screenDimension.getWidth() / 20.55,
                                marginTop: screenDimension.getWidth() / 89.55,
                                marginRight: screenDimension.getWidth() / 28.55,



                            }}>
                                <Text style={{
                                    fontSize: 23,
                                    fontWeight: 'bold',
                                    color: '#0430A3'
                                    , marginTop: screenDimension.getHeight() / 37.409

                                }}>
                                    Lưu ý
                                </Text>
                                <Text style={{
                                    fontSize: 15,
                                    color: '#fff',
                                    marginTop: screenDimension.getWidth() / 100.55
                                }}>
                                    Đặt bệnh nhân ở tư thế nằm nghỉ, mở cửa thông thoáng không khí.
                                </Text>
                            </View>


                        </View>
                        <View style={{
                            height: screenDimension.getHeight() / 6.7641,
                            flexDirection: 'row',
                            backgroundColor: '#f5cd79',
                            marginTop: screenDimension.getWidth() / 30.55,
                            marginHorizontal: screenDimension.getWidth() / 15,

                            borderRadius: 20
                        }}>
                            <View style={{
                                flex: 0.2328
                                , justifyContent: 'center',
                                alignItems: 'flex-end',


                            }}>
                                <Image source={Co3la} />
                            </View>
                            <View style={{
                                flex: 0.7672,
                                flexDirection: 'column',
                                marginLeft: screenDimension.getWidth() / 20.55,
                                marginTop: screenDimension.getWidth() / 89.55,
                                marginRight: screenDimension.getWidth() / 28.55,


                            }}>
                                <Text style={{
                                    fontSize: 23,
                                    fontWeight: 'bold',
                                    color: '#0430A3'
                                    , marginTop: screenDimension.getHeight() / 37.409
                                }}>
                                    Lưu ý
                                </Text>
                                <Text style={{
                                    fontSize: 15,
                                    color: '#fff',
                                    marginTop: screenDimension.getWidth() / 100.55
                                }}>
                                    Đặt bệnh nhân ở tư thế nằm nghỉ, mở cửa thông thoáng không khí.
                                </Text>
                            </View>


                        </View>

                    </ScrollView>


                </View>
                <View style={{
                    flex: 0.35053,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',

                    //borderTopLeftRadius: 40,
                    // borderTopRightRadius: 40
                }}>



                    <View style={{
                        marginHorizontal: screenDimension.getWidth() / 13.9,
                        marginVertical: screenDimension.getWidth() / 13.5,
                    }}>
                        <ScrollView horizontal={true}>
                            <View style={{
                                flexDirection: 'column',
                                borderRadius: 25,
                                marginRight: 10,
                                borderColor: '#546de5',
                                backgroundColor: '#546de5',



                            }}>
                                <View style={{
                                    flex: 0.7,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#F2EFEF',
                                    marginHorizontal: screenDimension.getWidth() / 70,
                                    borderRadius: 20,
                                    marginVertical: screenDimension.getWidth() / 70

                                }}>
                                    <Image source={Help} />
                                </View>
                                <View style={{
                                    flex: 0.3,
                                    textAlign: 'center',
                                    width: screenDimension.getWidth() / 1.19825,
                                    marginTop: screenDimension.getWidth() / 70

                                }}>
                                    <Text style={{
                                        textAlign: 'center',
                                        fontSize: 14,
                                        marginHorizontal: screenDimension.getWidth() / 20.8571,
                                        fontWeight: 'bold'
                                        , color: 'white',

                                    }}>Nên cho bệnh nhân nằm tại chỗ, kê đầu cao 30 độ và nằm nghiêng để tránh hiện tượng nôn trào ngược.</Text>
                                    <Icon3 name="arrow-with-circle-right" size={20} color='#fff' style={{
                                        alignSelf: 'center',
                                        marginTop: screenDimension.getWidth() / 50
                                    }} />
                                </View>

                            </View>
                            <View style={{
                                flexDirection: 'column',
                                borderRadius: 25,
                                marginRight: 10,
                                borderColor: '#546de5',
                                backgroundColor: '#546de5',



                            }}>
                                <View style={{
                                    flex: 0.7,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#F2EFEF',
                                    marginHorizontal: screenDimension.getWidth() / 70,
                                    borderRadius: 20,
                                    marginVertical: screenDimension.getWidth() / 70

                                }}>
                                    <Image source={Help} />
                                </View>
                                <View style={{
                                    flex: 0.3,
                                    textAlign: 'center',
                                    width: screenDimension.getWidth() / 1.19825,
                                    marginTop: screenDimension.getWidth() / 70

                                }}>
                                    <Text style={{
                                        textAlign: 'center',
                                        fontSize: 14,
                                        marginHorizontal: screenDimension.getWidth() / 20.8571,
                                        fontWeight: 'bold'
                                        , color: 'white',

                                    }}>Nên cho bệnh nhân nằm tại chỗ, kê đầu cao 30 độ và nằm nghiêng để tránh hiện tượng nôn trào ngược.</Text>
                                    <Icon3 name="arrow-with-circle-right" size={20} color='#fff' style={{
                                        alignSelf: 'center',
                                        marginTop: screenDimension.getWidth() / 50
                                    }} />
                                </View>

                            </View>
                            <View style={{
                                flexDirection: 'column',
                                borderRadius: 25,
                                marginRight: 10,
                                borderColor: '#546de5',
                                backgroundColor: '#546de5',



                            }}>
                                <View style={{
                                    flex: 0.7,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: '#F2EFEF',
                                    marginHorizontal: screenDimension.getWidth() / 70,
                                    borderRadius: 20,
                                    marginVertical: screenDimension.getWidth() / 70

                                }}>
                                    <Image source={Help} />
                                </View>
                                <View style={{
                                    flex: 0.3,
                                    textAlign: 'center',
                                    width: screenDimension.getWidth() / 1.19825,
                                    marginTop: screenDimension.getWidth() / 70

                                }}>
                                    <Text style={{
                                        textAlign: 'center',
                                        fontSize: 14,
                                        marginHorizontal: screenDimension.getWidth() / 20.8571,
                                        fontWeight: 'bold'
                                        , color: 'white',

                                    }}>Nên cho bệnh nhân nằm tại chỗ, kê đầu cao 30 độ và nằm nghiêng để tránh hiện tượng nôn trào ngược.</Text>
                                    <Icon3 name="arrow-with-circle-right" size={20} color='#fff' style={{
                                        alignSelf: 'center',
                                        marginTop: screenDimension.getWidth() / 50
                                    }} />
                                </View>

                            </View>
                        </ScrollView>

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
