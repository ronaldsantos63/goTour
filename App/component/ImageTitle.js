import React, { Component } from 'react'
import { StyleSheet, Text, View, ImageBackground, PixelRatio } from 'react-native'
import backgroundImageUri from '../assets/background-image-slide.png'


export default class ImageTitle extends Component {
  render() {
    return (
      <ImageBackground
        resizeMode='cover'
        style={styles.background}
        source={backgroundImageUri}>
        <View style={styles.container}>
          <Text style={styles.title}>
            {'Turismo é o nosso negócio'.toUpperCase()}
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: 136,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 0.5,
    backgroundColor: '#f6db54',
    padding: 6,
    borderRadius: 1,
  },
  title: {
    fontSize: 11 / PixelRatio.getFontScale(),
    textAlign: 'center',
    fontWeight: 'bold',
  }
});
