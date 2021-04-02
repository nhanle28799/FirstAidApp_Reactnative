import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import SecondWelcomImage from '../assets/image/SecondWelcomimage.png'
import screenDimension from '../helpers/screenDimension'
import scwc1 from '../assets/image/scwc1.png'
import scwc2 from '../assets/image/scwc2.png'
export default class SecondWelcom extends Component {
    render() {
        return (
            <View style={{
                flex: 3,
                flexDirection: 'column'
                , justifyContent: 'space-around'
                , borderColor: 'white',

            }}>
                <View style={{
                    flex: 1,
                    backgroundColor: '#11CCCC',
                    flexDirection: 'column'
                }}>
                    <View style={{
                        flex: 0.92,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center'

                    }}>
                        <Image source={scwc1} />
                        <Text style={{
                            fontFamily: 'Roboto',
                            fontSize: 36,
                            color: 'white',
                            fontWeight: 'bold',
                            shadowColor: 'rgba(0, 0, 0, 0.25)',
                            textShadowOffset: { width: 0, height: 4 }
                            , textShadowRadius: 5

                        }}>Timely</Text>
                    </View>
                    <View style={{
                        flex: 0.08,
                        backgroundColor: 'white',
                        marginRight: screenDimension.getWidth() / 2

                    }}></View>

                </View>
                <View style={{
                    flex: 1,
                    backgroundColor: '#11CCCC',
                    flexDirection: 'column'
                }}>
                    <View style={{
                        flex: 0.92,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center'

                    }}>
                        <Text style={{
                            fontFamily: 'Roboto',
                            fontSize: 36,
                            color: 'white',
                            fontWeight: 'bold',
                            shadowColor: 'rgba(0, 0, 0, 0.25)',
                            textShadowOffset: { width: 0, height: 4 }
                            , textShadowRadius: 5

                        }}>Right Way</Text>
                        < Image source={scwc2} />

                    </View>
                    <View style={{
                        flex: 0.08,
                        backgroundColor: 'white',
                        marginLeft: screenDimension.getWidth() / 2

                    }}></View>
                </View>
                <View style={{
                    flex: 1,
                    backgroundColor: '#11cccc',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    justifyContent: 'flex-end'
                }}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={{
                            flexDirection: 'column',
                            backgroundColor: 'white',
                            marginBottom: screenDimension.getHeight() / 7,
                            alignItems: 'center',
                            marginHorizontal: screenDimension.getWidth() / 3.87,
                            height: screenDimension.getWidth() / 10,
                            justifyContent: 'center',
                            borderRadius: 40,
                            borderWidth: 0.5,
                            shadowColor: 'black',
                            shadowOffset: { width: 0, height: 3 },
                            elevation: 6,


                        }}>
                        <Text style={{
                            fontFamily: 'Secular One',
                            fontSize: 25,
                            fontWeight: 'bold',

                        }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
