/* @flow */
'use strict';

var React = require('react-native');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');
var t = require('tcomb-form-native');
var {
  StyleSheet,
  ScrollView,
  View,
  TouchableHighlight,
  Text
} = React;

var Form = t.form.Form;

var Exhibition = t.struct({
  name: t.String,              // a required string
  start: t.Date,             // a required number
  end: t.Date,
  location: t.String
});

var options = {}; // optional rendering options (see documentation)

var NewExhibition = React.createClass({

  onPress: function () {
    var Expo = Parse.Object.extend("Exhibition");
    var expo = new Expo();
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      console.log(value); // value here is an instance of Exhibition
      expo.set("name", value.name);
      expo.set("start", value.start);
      expo.set("end", value.end);
      expo.set("location", value.location);
      expo.save(null, {
        success: function(expo) {
          this._createSuccesful();
        }.bind(this),
        error: function(expo, error) {
          alert(" " + error.message);
        }
      });
    }
  },

  _createSuccesful: function () {
    this.props.navigator.pop();
  },

	render: function() {
	  return (
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        style={styles.scrollView}>      
          <View style={styles.pageContainer}>
            {/* display */}
            <Form
              ref="form"
              type={Exhibition}
              options={options}
            />
            <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableHighlight>
          </View>
      </ScrollView>
	  );
  }
});


var styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 50,
  },
  pageContainer: {
    flex: 1,
    justifyContent: 'flex-start',
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

