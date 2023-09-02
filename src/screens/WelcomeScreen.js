import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const WelcomeScreen = () => {
  return (
    <div>
      <View style={style.container}>
        <Text>Welcome to Foodie</Text>
        <View style={style.logoout}>
          <Image />
        </View>
        <View style={hr80} />
      </View>
    </div>
  )
}

const styles = StyleSheet.create({
  conatiner: {}
})

export default WelcomeScreen
