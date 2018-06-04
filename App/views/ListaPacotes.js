import React, { Component } from 'react';
import { StyleSheet, View, Alert, PixelRatio, Text, ScrollView } from 'react-native';
import CardPacote from '../component/CardPacote'
import NavigationBar from '../component/NavigationBar'
import Footer from '../component/Footer'
import ImageTitle from '../component/ImageTitle'

export default class ListaPacotes extends Component {

  state = {
    pacotes: undefined
  }

  componentDidMount() {
    fetch('http://deveup.com.br/gotour/api/pacotes')
      .then(T => {
        if (T.status === 405) {
          throw new Error(T.statusText)
        }
        return T.json()
      })
      .then(pacotes => this.setState({ pacotes }))
      .catch(error => {
        if (error.message === '405') {
          Alert.alert('Erro', 'Erro interno da API')
        } else {
          Alert.alert('Erro', 'Não foi possível recuperar os pacotes')
        }
      })
  }


  render() {

    const { pacotes } = this.state

    if (!pacotes) {
      return (
        <View />
      )
    }

    return (
      <View style={styles.container}>
        <NavigationBar />
        <ScrollView style={styles.content}>
          <ImageTitle style={{ marginBottom: 30 }} />
            {pacotes.map((pacote, key) => (
              <CardPacote 
                key={key} 
                detalhes={pacote} 
                onPress={() => this.props.history.push(`/${pacote.id}`)} />
            ))}
            {pacotes.length === 0 && (
              <Text style={styles.textWithoutItems}>
                Nenhum pacote encontrado!
              </Text>
            )}
        </ScrollView>
        <View style={styles.footer} >
          <Footer />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  content: {
    flex: 0.8,
    flexDirection: 'column',
    backgroundColor: '#224ad0',
  },
  textWithoutItems: {
    fontSize: 15 / PixelRatio.getFontScale(),
    textAlign: 'center',
    color: '#FFF',
  },
  footer: {
    flex: 0.1,
  }
})