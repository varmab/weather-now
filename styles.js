import {
  StyleSheet,
} from 'react-native';

var Dimensions = require('Dimensions')
var windowSize = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000000',
    paddingTop:60
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold'
  },
  input: {
    marginTop: 4,
  },
  card2: {
   width: 200
 },
 buttonView:{
   marginTop:30
 },
 spinnerView:{
   height:windowSize.height,width:windowSize.width,position:'absolute',backgroundColor:'transparent',justifyContent:'center'
 },
});

module.exports = styles
