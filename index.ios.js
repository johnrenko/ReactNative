/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Parse = require('parse').Parse;
var LoginPage = require('./App/Components/LoginPage');
var RegisterPage = require('./App/Components/RegisterPage');

var {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  TextInput,
  TouchableHighlight,
  View,
} = React;

Parse.initialize(
  'gFl0ssOIuxTuizjG1AB786PTWioPcjdnHVDlyQNF',
  'vJKvQk3pnhfjMU3JyIzoPrV2G00JPm5Fe8cPHiUe'
);



var reactNative = React.createClass({

  render: function() {
    return (
      <NavigatorIOS
        style = {styles.container}
        initialRoute={{
          title: 'Login Page',
          component: LoginPage
        }} />
       
    );
  }
});

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});


AppRegistry.registerComponent('reactNative', () => reactNative);
