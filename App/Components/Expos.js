/* @flow */
'use strict';

var React = require('react-native');
var NewExhibition = require('./NewExhibition');
var Card = require('./Card');

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
        <View style={styles.cardContainer}>
          <Card title="Exhibition" image="http://www.joomlaworks.net/images/demos/galleries/abstract/7.jpg"/>
          <Card title="Exhibition2" image="http://www.joomlaworks.net/images/demos/galleries/abstract/7.jpg"/>
        </View>
	    </View>
	  );
  }
});


var styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5f5f5',
    paddingTop: 80,
    padding: 20,
    paddingBottom: 0
  },
  cardsContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: '#F5f5f5',
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

});


module.exports = Expos;

