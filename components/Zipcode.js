import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  Button,
  Alert,
  Keyboard,
  ActivityIndicator,
  View
} from 'react-native';

import styles from '../styles'

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
				<View style={styles.card2}>
		          <Sae
		            style={styles.input}
		            label={'Enter Zipcode'}
		            onChangeText={(text) => { this.setState({zipCode: text}) }}
		            inputStyle={{ color: 'black' }}
		            iconClass={FontAwesomeIcon}
		            iconName={'pencil'}
            		iconColor={'black'}
		          />
		          <Button title='Submit' onPress={()=>this.onSubmit()}/>
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