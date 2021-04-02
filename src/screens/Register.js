import React, { Component } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingViewBase } from 'react-native'
import screenDimension from '../helpers/screenDimension'
import Logo2 from '../assets/image/Logo2.png'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Lock from 'react-native-vector-icons/Ionicons';

export default class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            risizeLogo: true
        }
    }
    sizeLogo = (risizeLogo) => {
        if (risizeLogo == true) {
            return (
                <Image style={{
                    width: screenDimension.getHeight() / 5.39,
                    height: screenDimension.getHeight() / 5.39,
                }} source={Logo2}
                />
            )
        } else {
            return (
                <Image style={{
                    width: screenDimension.getHeight() / 8.39,
                    height: screenDimension.getHeight() / 8.39,
                }} source={Logo2}
                />
            )
        }
    }
    render() {
        return (
            <View
                style={{
                    flex: 10,
                    flexDirection: 'column', backgroundColor: 'white'
                    , justifyContent: 'center'
                }}>

                <TouchableOpacity style={{
                    flex: 1,
                    flexDirection: 'column',
                    marginLeft: screenDimension.getWidth() / 82.3,
                    marginTop: screenDimension.getWidth() / 82.3
                    , marginRight: screenDimension.getWidth() / 1.22


                }}>

                    <Lock name="arrow-back" size={45} color="black" />
                </TouchableOpacity>

                <View style={{
                    flex: 3.2,
                    alignItems: 'center',
                    justifyContent: 'flex-end'

                }}>
                    <View>{this.sizeLogo(this.state.risizeLogo)}</View>
                    <Text style={{
                        fontSize: 30,
                        marginTop: screenDimension.getHeight() / 59.63,
                        fontFamily: 'Roboto',
                        fontWeight: 'bold',

                    }}>Register</Text>
                </View>

                <View style={{
                    flex: 6.7
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
                                onKeyPress={() => {
                                    this.setState({ risizeLogo: this.state.risizeLogo = false }, () => {
                                        on
                                        this.setState({ risizeLogo: this.state.risizeLogo = true })
                                    })
                                }}


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


                        }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',


                        }}>

                            <Icon name="phone" size={25} color="#11CCCC" />
                            <TextInput placeholder="Your Phone"

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
                            <TextInput placeholder="Confirm Password" style={{
                                width: screenDimension.getHeight() * 0.30,
                                fontSize: 15
                            }} />
                            <TouchableOpacity>
                                <Lock name="eye-outline" size={25} color="#DCC2C2" />
                            </TouchableOpacity>
                        </View>

                    </View>


                    <View style={{
                        flex: 3.3,
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

                            }}>Register</Text>

                        </TouchableOpacity>


                    </View>
                </View>
            </View>
        )
    }
}
