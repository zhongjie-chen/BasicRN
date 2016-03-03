'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  Navigator,
  View
} from 'react-native'
import Header from './component/Header'
import Icons from './asset/Icons'
import {Router, Route, Schema, Animations, TabBar} from 'react-native-router-flux'
import Launch from './component/launch'
import FirstPageComponent from './component/firstPageComponent'
import HomeComponent from './component/HomeComponent'
class BasicRN extends Component {
  render() {
         var defaultName = 'HomeComponent';
         var defaultComponent = HomeComponent;
         return (
         <Navigator
           initialRoute={{ name: defaultName, component: defaultComponent }}
           configureScene={Router.renderScene}
           renderScene={(route, navigator) => {
             let Component = route.component;
             return <Component {...route.params} navigator={navigator} />
           }} />
         );
       }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('BasicRN', () => BasicRN);
