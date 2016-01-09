var React = require('react-native');

var {
	View,
	Text,
	TextInput,
	NavigatorIOS,
	TouchableWithoutFeedback,
	TouchableHighlight,
	StyleSheet,
  Image
} = React;

var Card = React.createClass({

  render: function() {
    return (

      <View style={styles.cardContainer}>
        <View style={styles.imageBorder}>
          <Image source={{uri: this.props.image}} style={styles.cardImage} />
        </View>
        <Text style={styles.cardTitle}>
          {this.props.title}
        </Text>
      </View>

    );
  }
});

var styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'stretch',
    backgroundColor: '#FFF',
    borderWidth: .5,
    borderRadius: 4,
    borderColor: '#d3d3d3',
    shadowColor: "rgba(0,0,0,.12)",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 2
    },
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 22,
    margin: 20,
    fontWeight: 'bold'
  },
  imageBorder: {
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    overflow: 'hidden',
  },
  cardImage: {
    alignItems: 'stretch',
    height : 150,
    resizeMode: 'cover',
  }
});

module.exports = Card;