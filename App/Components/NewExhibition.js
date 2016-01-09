/* @flow */
'use strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  TouchableHighlight,
  Text
} = React;

var NewExhibition = React.createClass({
	render: function() {
	  return (
	    <View style={styles.pageContainer}>
	      <Text style={styles.buttonText}>
	          New exhibition
	      </Text>
	    </View>
	  );
  }
});


var styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 100,
    backgroundColor: '#f5f5f5',
    padding: 20,
    paddingBottom: 0
  },
  button: {
    backgroundColor: '#fff',
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


module.exports = NewExhibition;

