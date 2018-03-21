import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Zipcode from '../components/Zipcode'
import Weather from '../components/Weather'

export default class WeatherFinder extends React.Component {
  constructor(){
    super();

    const SFO=94016;

    this.state={
      zipCode:SFO
    }

    this.onZipCodeSelected=this.onZipCodeSelected.bind(this);
  }

  onZipCodeSelected(zipCode){
    console.log("Zipcode is selected:" + zipCode)
    this.setState({
      zipCode:zipCode
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Weather NOW</Text>
        <Zipcode onZipCodeSelected={this.onZipCodeSelected}/>
        <Weather zipCode={this.state.zipCode}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
