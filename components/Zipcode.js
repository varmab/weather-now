import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Alert,
  Keyboard,
  ActivityIndicator,
  View
} from 'react-native';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';

class Zipcode extends Component {

	constructor(props){
		super(props);
		this.state={
			zipCode:props.zipCode
		}

		this.onSubmit=this.onSubmit.bind(this);
	}

	onSubmit(){
		Keyboard.dismiss();
		this.props.onZipCodeSelected(this.state.zipCode)
	}

	componentWillMount(){
		var url = 'https://freegeoip.net/json/';
		var that = this;
	    fetch(url)
	      .then((response) => response.json())
	      .then((responseJson) => {
	        console.log("Zip code from api:" + JSON.stringify(responseJson.zip_code));
	        that.setState({
	          zipCode: responseJson.zip_code
	        });
	      })
	      .catch((error) => {
	       Alert.alert(JSON.stringify(error));
	      });
	}

	render(){
		if(this.state.zipCode != null){
			console.log("rendering zipcode")
			return(
				<View style={{flexDirection:'row',alignItems:"center",justifyContent:"center"}}>
				  <Text style={{fontSize:25}}>Zipcode: </Text>
				  <TextInput
				  	  value={this.state.zipCode}
				  	  style={{width:80,textDecorationStyle:"solid",borderBottomWidth:1,borderBottomColor:"black",fontSize:25}}
			          keyboardType = 'numeric'
			          onChangeText={(text) => this.setState({zipCode:text})}
			        />
		           <Button style={{fontSize:40,marginLeft:30}} title='Go' onPress={()=>this.onSubmit()}/>
        		</View>
			)
		}
		else
		{
			console.log("rendering pls wait")
			return(
				<View>
		   			<Text>Please wait..</Text>
	          	</View>
			)
		}
		
	}

}

export default Zipcode;