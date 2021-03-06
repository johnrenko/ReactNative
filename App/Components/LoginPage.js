var React = require('react-native');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');
var RegisterPage = require('./RegisterPage');
var Expos = require('./Expos');

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
  mixins: [ParseReact.Mixin],

  getInitialState: function() {
    return {
      login: "",
      pw: "",
    };
  },

  observe: function() {
    return {
      user: ParseReact.currentUser
    };
  },

  _handleNavigationRequest: function() {
	this.props.navigator.push({
    	title: 'Registration Page',
    	component: RegisterPage
    });
  },

  _loginRedirect: function() {
	this.props.navigator.push({
    	title: 'Expos',
    	component: Expos,
      rightButtonTitle: 'Log Out',
      onRightButtonPress: () => { 
        Parse.User.logOut();
        this.props.navigator.popToTop(); },
      leftButtonTitle: ' '
    });
  },

  _loginAccount: function() {
    Parse.User.logIn(this.state.login, this.state.pw, {
	  success: function() {
	  	console.log('success');
      this._loginRedirect();
	  }.bind(this),
	  error: function(user, error) {
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
            value={this.state.text} 
            placeholder='johndoe@email.com'
            keyboardType={'email-address'} />
          <Text style={styles.label}>
            Password
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(pw) => this.setState({pw})}
            value={this.state.pw}
            placeholder='******' />
        </View>
        <TouchableHighlight style={styles.button} onPress={this._loginAccount} underlayColor={'#d3d3d3'}>
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
    backgroundColor: '#F5F5F5',
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
    backgroundColor: '#FFF',
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

module.exports = LoginPage;