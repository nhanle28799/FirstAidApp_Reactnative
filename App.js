import React, { Component } from 'react'
import { SafeAreaView, Settings, Text, View } from 'react-native'
import ChangePassword from './src/screens/ChangePassword'
import Feedback from './src/screens/Feedback'
import FirstWelcom from './src/screens/FirstWelcom'
import GetPassword from './src/screens/GetPassword'
import HomePage from './src/screens/HomePage'
import ListFirstAid from './src/screens/ListFirstAid'
import LoginScreen from './src/screens/LoginScreen'
import PostsFirstAid from './src/screens/PostsFirstAid'
import Register from './src/screens/Register'
import SavePosts from './src/screens/SavePosts'
import SecondWelcom from './src/screens/SecondWelcom'
import Setting from './src/screens/Setting'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <HomePage />
      </SafeAreaView>
    )
  }
}
