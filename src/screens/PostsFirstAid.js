import React, { Component } from 'react'
import { Text, TouchableOpacity, View, Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import screenDimension from '../helpers/screenDimension';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Bookmark from 'react-native-vector-icons/Feather';
import Swiper from 'react-native-swiper';
import Note from '../components/Note';
import ItemFirstAid from '../components/ItemFirstAid';
import Firstaid from '../components/Firstaid';
import FirstWelcom from './FirstWelcom';
export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [
                { id: 1, text: ' Đặt bệnh nhân ở tư thế nằm nghỉ, mở cửa thông thoáng không khí.', color: '#f5cd79', image: '' },
                { id: 2, text: 'Cho bệnh nhân nhảy lò cò xung quanh đống lửa', color: '#f3a683', image: '' },
                { id: 3, text: 'Cho bệnh nhân vắt chân đi 2 hàng lên trên đầu', color: '#f5cd79', image: '' },
            ],
            firstaid: [
                { id: 1, title: 'Để bệnh nhân lăn lê bò lết dưới sàn ', image: '' },
                { id: 2, title: 'Để bệnh nhân bay nhảy trên nóc nhà và không được mặc quần', image: '' },
                { id: 3, title: 'Cho phép bệnh nhân đang gãy chân chạy bộ khỏi bệnh viện', image: '' },
            ]
        };
    };


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
                    flex: 0.4577,
                    flexDirection: 'column',
                }}>

                    <Note notes={this.state.notes} />

                </View>
                <View style={{
                    flex: 0.4,
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <View style={{
                        marginHorizontal: screenDimension.getWidth() / 13.9,
                        marginVertical: screenDimension.getWidth() / 13.5,
                    }}>


                        <Firstaid firstaid={this.state.firstaid} />


                    </View>
                </View>
                <View style={styles.groupTool}>
                    <View style={{
                        flex: 1,
                    }}>
                        <TouchableOpacity
                            style={styles.buttonTool}>
                            <Icon name="home" size={35} color="black" />
                            <Text>Trang chủ</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 1,
                    }}>
                        <TouchableOpacity
                            style={styles.buttonTool}>
                            <Icon name="comments" size={35} color="black" />
                            <Text>Đóng góp</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 1,
                    }}>
                        <TouchableOpacity
                            style={styles.buttonTool}>
                            <Icon2 name="newspaper-sharp" size={35} color="black" />
                            <Text>Bài viết</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 1,
                    }}>
                        <TouchableOpacity
                            style={styles.buttonTool}>
                            <Icon2 name="settings" size={35} color="black" />
                            <Text>Cài đặt</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    groupTool: {
        flex: 0.0724,
        flexDirection: 'row',
        borderWidth: 0.5,
        justifyContent: 'space-around'
    },
    buttonTool: {
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center'
    },

})