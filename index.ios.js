/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Parse = require('parse').Parse;
var {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} = React;

Parse.initialize(
  'gFl0ssOIuxTuizjG1AB786PTWioPcjdnHVDlyQNF',
  'vJKvQk3pnhfjMU3JyIzoPrV2G00JPm5Fe8cPHiUe'
);

var reactNative = React.createClass({

  getInitialState: function() {
    return {
      login: "",
      pw: "",
    };
  },

  render: function() {
    return (
      <View style={styles.pageContainer}>
        <View style={styles.containerRight}>
          <Text style={styles.label}>
            Email
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(login) => this.setState({login})}
            value={this.state.text}
          />
          <Text style={styles.label}>
            Password
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(pw) => this.setState({pw})}
            value={this.state.pw}
          />
        </View>
        <TouchableHighlight style={styles.button} onPress={this._onPressButton} underlayColor={'#d3d3d3'}>
        <Text style={styles.buttonText}>
            Login
        </Text>
        </TouchableHighlight>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20,
  },
  containerRight: {
    alignItems: 'flex-start',
  },
  containerLeft: {
    alignItems: 'flex-end',
  },
  button: {
    backgroundColor: '#f5f5f5',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#d3d3d3',
    padding: 16,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
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
  input: {
    height: 40,
    borderColor: '#d3d3d3',
    borderWidth: 1,
    marginTop: 3,
    marginBottom: 10,
    padding: 10,
    borderRadius:4,
    backgroundColor: '#fff'
  },
  label: {
    fontSize:12,
    textAlign: 'left',
  },
  labelSwitch: {
    fontSize:12,
    flex: 1,
  },
  switch: {
    flex: 1,
  }
});

AppRegistry.registerComponent('reactNative', () => reactNative);
