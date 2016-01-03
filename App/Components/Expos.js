/* @flow */
'use strict';

var React = require('react-native');
var NewExhibition = require('./NewExhibition');

var {
  StyleSheet,
  View,
  TouchableHighlight,
  Text
} = React;

var Expos = React.createClass({

	_createExpo: function () {
	this.props.navigator.push({
    	title: 'New Exhibition',
    	component: NewExhibition
    });
	},

	render: function() {
	  return (
	    <View style={styles.pageContainer}>
	      <TouchableHighlight style={styles.button} onPress={this._createExpo} underlayColor={'#d3d3d3'}>
	      <Text style={styles.buttonText}>
	          New exhibition
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
    backgroundColor: '#FFF',
    padding: 20,
    paddingBottom: 0
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

});


module.exports = Expos;

