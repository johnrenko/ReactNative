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
        <Image source={{uri: this.props.image}} style={styles.cardImage} />
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
    borderWidth: 1,
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
  cardImage: {
    alignItems: 'stretch',
    height : 150,
    resizeMode: 'cover',
    borderRadius: 4,
  }
});

module.exports = Card;