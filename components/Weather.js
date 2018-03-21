import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  ActivityIndicator,
  View
} from 'react-native';

class Weather extends Component{
	constructor(props){
		super(props);

		this.state={
			zipCode:props.zipCode,
			currentWeather:{
				area:'',
				description:'',
				temparature:''
			}
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
		let url=`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=6644e680d2025e3820e93d0f13adb2ff`;
		console.log(url)
		fetch(url)
		.then(response=>response.json())
		.then(weatherInfo=>{
			console.log("Weather for new zipcode:" + zipCode + " is  " + JSON.stringify(weatherInfo))
			if(weatherInfo){
				let tempFarnheit=Math.round(9/5 * (weatherInfo.main.temp-273)+32);
				this.setState({
		          currentWeather : {
		          	area:weatherInfo.name,
		          	description:weatherInfo.weather[0].description,
					temparature:tempFarnheit
		          }
		        })
			}
		})
		.catch((err)=>{
			console.log("failed to get weather" + JSON.stringify(err))
		})
	}

	render(){
		return (
			<View style={{justifyContent:"center",alignItems:"center"}}>
				<Text style={{fontSize:30}}>
	              {this.state.currentWeather.area}
	            </Text>
	            <Text style={{fontSize:25,paddingTop:20}}>
	              Current Condition
	            </Text>
	            <Text style={{fontSize:20}}>
	              {this.state.currentWeather.description}
	            </Text>
	             <Text style={{fontSize:25,paddingTop:20}}>
	              Temparature
	            </Text>
	            <Text style={{fontSize:20}}>
	              {this.state.currentWeather.temparature}°F
	            </Text>
          </View>
		)
	}
}

export default Weather;