import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  ActivityIndicator,
  View
} from 'react-native';

import styles from '../styles'

class Weather extends Component{
	constructor(props){
		super(props);

		this.state={
			zipCode:props.zipCode,
			currentWeather:{
				description:'',
				temparature:''
			},
			showSpinner:false
		}

		this.getWeatherInfo=this.getWeatherInfo.bind(this);
	}

	componentWillReceiveProps(newProps){
		console.log("New props received:" + JSON.stringify(newProps.zipCode))
		this.getWeatherInfo(newProps.zipCode)
	}

	componentDidMount(){
		console.log("Mounting and getting weather info:" + JSON.stringify(this.state.zipCode))
		this.getWeatherInfo(this.state.zipCode)
	}

	getWeatherInfo(zipCode){
		console.log("Getting weather for new zipcode:" + zipCode)
		fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=6644e680d2025e3820e93d0f13adb2ff`)
		.then(response=>response.json())
		.then(weatherInfo=>{
			console.log("Weather for new zipcode:" + zipCode + " is  " + JSON.stringify(weatherInfo))
			if(weatherInfo){
				let tempFarnheit=Math.round(9/5 * (weatherInfo.main.temp-273)+32);
				this.setState({
		          showSpinner:false,
		          currentWeather : {
		          	description:weatherInfo.weather[0].description,
					temparature:tempFarnheit
		          }
		        })
			}
		})
		.catch((err)=>{
			console.log("failed to get weather")
		})
	}

	render(){
		return (
			<View style={{marginTop:30}}>
	            <Text style={styles.welcome}>
	              {this.state.currentWeather.description}
	            </Text>
	            <Text style={styles.welcome}>
	              {this.state.currentWeather.temparature}°F
	            </Text>
          </View>
		)
	}
}

export default Weather;