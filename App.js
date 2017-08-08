import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import animations from './animations';
import MainNavigator from './navigation/MainNavigator';

import store from './store';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    Animatable.initializeRegistryWithDefinitions(animations);
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
