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
      <View style={{
            flex: 1,
            alignItems: 'center'
          }}>
            <View style={{width: 320, height: 50, paddingTop: 100, alignItems:"center", justifyContent:"center"}}>
              <Text style={{ fontSize:40, fontWeight:"bold"}}>Weather Now</Text>
            </View>
            <View style={{width: 320, height: 200, paddingTop: 50}} >
              <Zipcode  onZipCodeSelected={this.onZipCodeSelected}/>
            </View>
            <View style={{width: 320, height: 100, justifyContent:"center"}} >
              <Weather zipCode={this.state.zipCode}/>
            </View>
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
