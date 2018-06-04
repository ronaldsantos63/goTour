import React, { Component } from 'react'
import { StyleSheet, Text, View, PixelRatio } from 'react-native'

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>https://www.themasters.com.br</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e42ba',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 14 / PixelRatio.getFontScale(),
    opacity: 0.8,
  },
});
