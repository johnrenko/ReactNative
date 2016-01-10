/* @flow */
'use strict';

var React = require('react-native');
var Parse = require('parse/react-native');
var ParseReact = require('parse-react/react-native');
var t = require('tcomb-form-native');
var UIImagePickerManager = require('NativeModules').UIImagePickerManager;
var {
  StyleSheet,
  ScrollView,
  View,
  Image,
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

var NewExhibition = React.createClass({

  getInitialState: function () {
    return{
      avatarSource: 0
    }
  },

  test: function(){
    var options = {
      title: 'Select exhibition image', // specify null or empty string to remove the title
      cancelButtonTitle: 'Cancel',
      takePhotoButtonTitle: 'Take Photo...', // specify null or empty string to remove this button
      chooseFromLibraryButtonTitle: 'Choose from Library...', // specify null or empty string to remove this button
      cameraType: 'back', // 'front' or 'back'
      mediaType: 'photo', // 'photo' or 'video'
      videoQuality: 'high', // 'low', 'medium', or 'high'
      maxWidth: 500, // photos only
      maxHeight: 500, // photos only
      quality: 1, // photos only
      allowsEditing: true, // Built in iOS functionality to resize/reposition the image
      noData: false, // photos only - disables the base64 `data` field from being generated (greatly improves performance on large photos)
      storageOptions: { // if this key is provided, the image will get saved in the documents directory (rather than a temporary directory)
        skipBackup: true, // image will NOT be backed up to icloud
        path: 'images' // will save image at /Documents/images rather than the root
      }
    };

    /**
    * The first arg will be the options object for customization, the second is
    * your callback which sends bool: didCancel, object: response.
    *
    * response.didCancel will inform you if the user cancelled the process
    * response.error will contain an error message, if there is one
    * response.data is the base64 encoded image data (photos only)
    * response.uri is the uri to the local file asset on the device (photo or video)
    * response.isVertical will be true if the image is vertically oriented
    * response.width & response.height give you the image dimensions
    */

    UIImagePickerManager.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('UIImagePickerManager Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        // You can display the image using either data:
        const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};


        this.setState({
          avatarSource: source
        });
      }
    });
  },

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
            />
            <TouchableHighlight style={styles.button} onPress={this.test} underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>Add image</Text>
            </TouchableHighlight>
            <Image source={this.state.avatarSource} style={styles.uploadAvatar} />
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
    paddingBottom: 0,
  },
  pageContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#f5f5f5',
    padding: 20,
    paddingBottom: 50
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
  uploadAvatar: {
    borderWidth: 1,
    backgroundColor: "#000",
    borderRadius: 4,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'stretch',
    height : 150,
    resizeMode: 'cover',
  }
});


module.exports = NewExhibition;

