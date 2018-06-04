import React, { Component } from 'react'
import { Text, View, Alert, ImageBackground, Linking, StyleSheet, PixelRatio } from 'react-native'
import NavigationBar from '../component/NavigationBar'
import Footer from '../component/Footer'

export default class DetalhePacote extends Component {

  state = {
    dados: undefined
  }

  componentDidMount() {
    const { pacoteId } = this.props.match.params

    fetch(`http://deveup.com.br/gotour/api/pacote/${pacoteId}/detalhes`) // as crases são as strings do ecmascript
      .then(T => T.json())
      .then(dados => this.setState({ dados })) 
      .catch(() =>Alert.alert('Erro', 'Não foi possível recuperar os detalhes do pacote'))
  }

  openLink(url) {
    Linking.canOpenURL(url)
      .then(supported => supported && Linking.openURL(url))
      .catch(err => console.error('An error occurred', err))
  }

  render() {
    const { dados } = this.state

    if (!dados) {
      return (
        <View />
      )
    }

    return (
      <View style={styles.container} >
        <NavigationBar goBack={() => this.props.history.push('/')} />
        <View style={styles.content} >
          <ImageBackground
            resizeMode='cover'
            style={styles.imageBackground}
            source={{ uri: dados.urlImagem }}>

            <View style={styles.imageContent} >
              <Text>
                {dados.pacote.nome.toUpperCase()}
              </Text>
            </View>

          </ImageBackground>

          <View style={styles.bodyContainer}>
            
            <Text style={styles.textDescription} >
              {'Descrição:'.toUpperCase()}
            </Text>
            <Text style={styles.textDescription}>
              {dados.descricao}
            </Text>

            <Text 
              onPress={() => this.openLink(`tel:${dados.telefone}`)} 
              style={styles.textDescription}>
              {dados.telefone}
            </Text>

            <Text 
              onPress={() => this.openLink(dados.site)} 
              style={styles.textDescription}>
              {dados.site}
            </Text>
          </View>

          <View style={styles.priceContainer} >
            <Text style={styles.priceValue} >
              Preço: {dados.pacote.valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
            </Text>
          </View>

          <View style={{ flex: 0.1 }} >
            <Footer />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#224ad0'
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  imageBackground: {
    flex: 0.3,
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    borderBottomColor: '#f6db54',
    borderBottomWidth: 4,
  },
  phoneNumber: {
    color: '#FFF',
    fontSize: 14 / PixelRatio.getFontScale(),
    fontWeight: 'bold',
    marginTop: 5,
  },
  imageContent: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 34,
    flex: 0.7,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    elevation: 1,
  },
  title: {
    fontSize: 16 / PixelRatio.getFontScale(),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bodyContainer: {
    flex: 0.5,
    paddingLeft: 30,
    paddingRight: 30,
  },
  textDescription: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14 / PixelRatio.getFontScale(),
    paddingBottom: 10,
    marginTop: 5,
  },
  priceContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 'auto',
    backgroundColor: '#F6db54',
  },
  priceValue: {
    fontSize: 20 / PixelRatio.getFontScale(),
    fontWeight: 'bold',
    textAlign: 'center',
  },
})