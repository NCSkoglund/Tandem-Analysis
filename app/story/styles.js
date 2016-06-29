import { Animated, StyleSheet, View, Text, Dimensions } from 'react-native';

let styles = StyleSheet.create({
  body: {
    backgroundColor: '#eaedf1',
    flex: 1,
  },
  firstRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#00afd1',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      heigth: 1,
      width: 0
    }
  },
  publication: {
    flex: 3
  },
  publicationText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  headline: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 11,
    borderBottomColor: '#eaedf1',
    backgroundColor: '#ffffff',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      heigth: 1,
      width: 0
    }
  },
  headlineText: {
    flex: 1,
    flexWrap: 'wrap',
    color: '#5d5d5d',
    fontSize: 18
  },
  moodScore: {
    flex: 1,
    marginLeft: 10
  },
  bar: {
    flex: 1,
    borderRadius: 5,
    height: 4,
    backgroundColor: '#ffffff',
  },
  trendRow: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10
  },
  full: {
    flex: 1

  }
});

export default styles;
