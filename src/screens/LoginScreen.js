import React, { Component } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import screenDimension from '../helpers/screenDimension'
import Logo2 from '../assets/image/Logo2.png'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Lock from 'react-native-vector-icons/Ionicons';
export default class LoginScreen extends Component {
    render() {
        return (

            <View
                style={{
                    flex: 10,
                    flexDirection: 'column', backgroundColor: 'white'
                    , justifyContent: 'center'
                }}>

                <View style={{
                    flex: 4.2,
                    alignItems: 'center',
                    justifyContent: 'flex-end'

                }}>
                    <Image style={{
                        width: screenDimension.getHeight() / 5.39,
                        height: screenDimension.getHeight() / 5.39,
                    }} source={Logo2}
                    />
                    <Text style={{
                        fontSize: 30,
                        marginTop: screenDimension.getHeight() / 59.63,
                        fontFamily: 'Roboto',
                        fontWeight: 'bold',

                    }}>Login</Text>
                </View>

                <View style={{
                    flex: 5.7
                    , marginTop: screenDimension.getHeight() * 0.01,
                    justifyContent: 'space-between'


                }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            borderBottomWidth: 2,
                            borderBottomColor: '#11cccc',
                            marginHorizontal: screenDimension.getWidth() / 7.98,
                            alignItems: 'center'


                        }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',


                        }}>

                            <Icon name="email" size={25} color="#11CCCC" />
                            <TextInput placeholder="Your Email"

                                style={{
                                    width: screenDimension.getHeight() * 0.30,
                                    fontSize: 15,

                                }} />
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            borderBottomWidth: 2,
                            borderBottomColor: '#11cccc',
                            marginHorizontal: screenDimension.getWidth() / 7.98,
                            alignItems: 'center'
                            , justifyContent: 'space-between'

                        }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',


                        }}>

                            <Lock name="md-lock-closed-sharp" size={25} color="#11CCCC" />
                            <TextInput placeholder="Your Password" style={{
                                width: screenDimension.getHeight() * 0.30,
                                fontSize: 15
                            }} />
                            <TouchableOpacity>
                                <Lock name="eye-outline" size={25} color="#DCC2C2" />
                            </TouchableOpacity>
                        </View>

                    </View>


                    <View style={{
                        flex: 4.3,
                        marginTop: screenDimension.getHeight() / 33.28
                    }}>
                        <TouchableOpacity
                            style={{
                                flexDirection: 'column',
                                backgroundColor: '#11cccc',
                                marginHorizontal: screenDimension.getWidth() / 2.978,
                                height: screenDimension.getHeight() / 21.657,
                                borderRadius: 15,
                                justifyContent: 'center'
                            }}
                        >
                            <Text style={{
                                alignSelf: 'center',
                                fontFamily: 'Roboto',
                                fontSize: 20,
                                fontWeight: 'bold',
                                color: 'white',

                            }}>Login</Text>

                        </TouchableOpacity>
                        <View style={{
                            marginTop: screenDimension.getHeight() / 66.28
                        }}>
                            <TouchableOpacity
                                style={{
                                    flexDirection: 'column',
                                    marginHorizontal: screenDimension.getWidth() / 2.985,
                                    height: screenDimension.getHeight() / 45.78,
                                    borderRadius: 12,
                                    justifyContent: 'center'
                                }}>
                                <Text style={{
                                    alignSelf: 'center',
                                    fontFamily: 'Roboto',
                                    fontSize: 12,
                                    color: '#11cccc',
                                    textDecorationLine: 'underline'
                                }}>Forgot Password</Text>

                            </TouchableOpacity>
                        </View>
                        <View style={{
                            marginTop: screenDimension.getHeight() / 100.28
                        }}>
                            <TouchableOpacity
                                style={{
                                    marginHorizontal: screenDimension.getWidth() / 2.985,
                                    height: screenDimension.getHeight() / 45.78,

                                }}
                            >
                                <Text style={{
                                    alignSelf: 'center',
                                    fontFamily: 'Roboto',
                                    fontSize: 12,
                                    color: '#11cccc',
                                    textDecorationLine: 'underline'


                                }}>Register</Text>

                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </View>

        )
    }
}
