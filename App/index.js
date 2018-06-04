import React, { Component } from 'react';
import { View } from 'react-native'
import { NativeRouter, Route, Switch } from 'react-router-native'
import ListaPacotes from './views/ListaPacotes'
import DetalhePacote from "./views/DetalhePacote"

export default class App extends Component {
  render() {
    return (
      <NativeRouter>
        <View style={{ flex: 1 }}>
          <Switch>
            <Route path='/:pacoteId' component={DetalhePacote} />
            <Route component={ListaPacotes} />
          </Switch>
        </View>
      </NativeRouter>
    );
  }
}
