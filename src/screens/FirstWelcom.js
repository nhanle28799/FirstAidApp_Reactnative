import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import Logo1 from '../assets/image/Logo1.png'
import screenDimension from '../helpers/screenDimension'
export default class FirstWelcom extends Component {
    render() {
        return (

            <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: '#11CCCC',

            }}>
                <View style={{
                    flex: 0.8,
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: screenDimension.getHeight() / 4.03

                }}>
                    <Image source={Logo1} style={{
                        width: screenDimension.getHeight() / 3.93,
                        height: screenDimension.getHeight() / 3.93
                    }} />
                    <View style={{
                        marginTop: screenDimension.getHeight() / 42.16,
                    }}>
                        <Text style={{
                            fontFamily: 'Roboto',
                            fontSize: 36,
                            color: 'white',
                            fontWeight: 'bold',
                            shadowColor: 'rgba(0, 0, 0, 0.25)',
                            textShadowOffset: { width: 0, height: 4 }
                            , textShadowRadius: 5

                        }}>First Aid</Text>
                    </View>
                </View>

                <View style={{
                    flex: 0.2,
                    flexDirection: 'column'
                    , justifyContent: 'flex-end'
                }}>
                    <TouchableOpacity

                        activeOpacity={0.7}
                        style={{

                            backgroundColor: 'white',
                            alignItems: 'center',
                            marginBottom: screenDimension.getHeight() / 7,
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

                        }}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>


        )
    }
}
