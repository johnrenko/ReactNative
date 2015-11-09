var React = require('react-native');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');
var EmptyPage = require('./EmptyPage');

var {
	View,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	TouchableHighlight,
	StyleSheet,
} = React;

var RegisterPage = React.createClass({

  getInitialState: function() {
    return {
      login: "",
      pw: "",
    };
  },

  _handleBackButtonPress: function() {
    this.props.navigator.pop();
  },

  _loginRedirect: function() {
    this.props.navigator.push({
      title: 'Empty Page',
      component: EmptyPage,
      rightButtonTitle: 'Log Out',
      leftButtonTitle: ' '
    });
  },

  _createAccount: function() {
    var user = new Parse.User();
    user.set("username", this.state.login);
    user.set("password", this.state.pw);
    user.set("email", this.state.login);
  
    user.signUp(null, {
      success: function(user) {
        // Hooray! Let them use the app now.
        this._loginRedirect();
      }.bind(this),
      error: function(user, error) {
        // Show the error message somewhere and let the user try again.
        alert(" " + error.message);
      }
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
        <TouchableHighlight style={styles.button} onPress={this._createAccount} underlayColor={'#d3d3d3'}>
        <Text style={styles.buttonText}>
            Register
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
    padding: 10,
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

module.exports = RegisterPage;