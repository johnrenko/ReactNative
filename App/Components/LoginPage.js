var React = require('react-native');
var RegisterPage = require('./RegisterPage');

var {
	View,
	Text,
	TextInput,
	NavigatorIOS,
	TouchableWithoutFeedback,
	TouchableHighlight,
	StyleSheet,
} = React;

var LoginPage = React.createClass({

  getInitialState: function() {
    return {
      login: "",
      pw: "",
    };
  },

  _handleNavigationRequest: function() {
    this.props.navigator.push({
    	title: 'Register',
    	component: RegisterPage
    });
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
            value={this.state.text} />
          <Text style={styles.label}>
            Password
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(pw) => this.setState({pw})}
            value={this.state.pw} />
        </View>
        <TouchableHighlight style={styles.button} onPress={this._onPressButton} underlayColor={'#d3d3d3'}>
        <Text style={styles.buttonText}>
            Login
        </Text>
        </TouchableHighlight>
        <TouchableWithoutFeedback style={styles.button} onPress={this._handleNavigationRequest} underlayColor={'#d3d3d3'}>
        <Text style={styles.buttonLink}>
            Dont have an account?
        </Text>
        </TouchableWithoutFeedback>
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
    paddingBottom: 0
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
  buttonLink: {
  	textAlign: 'center',
    fontSize: 16,
    paddingTop: 20,
    color: 'blue',
    textDecorationLine: 'underline'
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
});

module.exports = LoginPage;