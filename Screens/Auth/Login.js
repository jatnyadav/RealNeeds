import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
//import {Signin} from '../../utils/api'
import global from '../../utils/global'
import Axios from 'axios';
import { Toast, Popup } from 'popup-ui';
import Icon from 'react-native-vector-icons/Feather';
import Loading from '../../components/Loading'
import { Signin } from '../../utils/api'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			phone: "", //1234567890        for testing only
			password: "",//1234            for testing only
			pressed: false,
			backgroundColor: 'black',
			backgroundColor2: 'black',

		}
	}
	Signin() {
		Loading.show();
		console.log("data isssssssssssssssssssssssssssss")
		Axios({
			method: "post",
			url: "https://realneed.i4dev.in/api/login",
			data: {
				phone: this.state.phone,
				password: this.state.password,
			},
			validateStatus: () => {
				return true; // I'm always returning true, you may want to do it depending on the status received
			},
		}).then(
			function (response) {
				if (response.data.status == true) {
					Loading.hide();
					// Popup.show({
					//   type: "Success",
					//   title: "Congratulations 🎉🎉",
					//   button: true,
					//   textBody: response.data.message,
					//   buttonText: "Welcome",
					//   callback: () => {
					//     Popup.hide();
					this.props.navigation.navigate("App");
				} else {
					Loading.hide();
					Popup.show({
						type: "Danger",
						title: global.CONSTANT.APPNAME + " Alert❗",
						button: true,
						textBody: response.data.message,
						buttontext: "Ok",
						callback: () => Popup.hide(),
					});
				}
			}.bind(this)
		);
	}
	handleValidate = () => {
		if (this.state.phone == "") {
			Alert.alert(global.CONSTANT.APPNAME, "Please enter phone number ");
		} else if (this.state.password == "") {
			Alert.alert(global.CONSTANT.APPNAME, "Please enter password");
		} else if (
			!(
				this.state.password.length == 4
			)
		) {
			Alert.alert('')
		}
		else {
			this.Signin();
		}
	};

	render() {
		return (
			<View style={styles.container}>
				<Text style={{ fontSize: 32, color: 'white', fontWeight: 'bold', textAlign: 'left', marginTop: 80, marginLeft: 30, }}>Welcome Back</Text>
				<Text style={{ fontSize: 20, color: 'white', fontWeight: '400', textAlign: 'left', marginLeft: 30, marginBottom: 30, marginTop: 2 }}>Login to get started</Text>
				<View style={styles.downview}>

					<View style={styles.SectionStyle}>
						<Icon name={'user'} size={24} style={{marginLeft:8}}
             color ={this.state.backgroundColor}
            />
						<TextInput
							style={{ flex: 1, backgroundColor: '#F4F4FC', marginLeft: 8 }}
							placeholder="Phone Number"
							maxLength ={11}
							color={this.state.backgroundColor}
							selectionColor='#0B1088'
							underlineColorAndroid="transparent"
							autoCapitalize='none'
							keyboardType='phone-pad'
							onChangeText={(v) => this.setState({ phone: v })}
							value={this.state.phone}
							onFocus={() => {
								this.setState({ backgroundColor: '#0B1088' });
							}}
							onBlur={() => {
								this.setState({ backgroundColor: '#8FAAB2' });
							}}
						/>
					</View>

					<View style={styles.SectionStyle1}>
						<Icon name={'lock'} size={24} style={{marginLeft:8}}
            color ={this.state.backgroundColor2}
            />
						<TextInput
							style={{ flex: 1, backgroundColor: '#F4F4FC', marginLeft: 8 }}
							placeholder="Password"
							underlineColorAndroid="transparent"
							secureTextEntry={true}
              color={this.state.backgroundColor2}
							selectionColor='#0B1088'
							maxLength={4}
							keyboardType='numeric'
							onChangeText={(v) => this.setState({ password: v })}
							value={this.state.password}
              onFocus={() => {
								this.setState({ backgroundColor2: '#0B1088' });
							}}
							onBlur={() => {
								this.setState({ backgroundColor2: '#8FAAB2' });
							}}

						/>
					</View>
					<TouchableOpacity onPress={() => { this.props.navigation.navigate("ForgotPassword"); }}>
						<Text style={{ fontSize: 14, color: '#1C0D57', height: 20, fontWeight: '400', alignSelf: 'flex-end', marginRight: 30 }}>Forgot Password?</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => this.handleValidate()}
						style={{ marginRight: 30, marginLeft: 30, height: 48, backgroundColor: '#037ECF', borderRadius: 8, marginTop: 19 }}>
						<Text style={{ color: 'white', textAlign: 'center', marginTop: 12, fontSize: 16, fontWeight: '500' }}>Login</Text>
					</TouchableOpacity>

					<View style={{ flexDirection: 'row', alignSelf: 'center', marginBottom: 600 }}>
						<Text style={{ marginTop: 27, fontSize: 16, }}>No Account Yet?</Text>
						<TouchableOpacity onPress={() => { this.props.navigation.navigate("Catagory"); }}>
							<Text style={{ marginTop: 27, marginLeft: 5, fontSize: 16, fontWeight: 'bold', textDecorationLine: 'underline', }}>Create Account Here!</Text>
						</TouchableOpacity>
					</View>
				</View>
				<StatusBar style="auto" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#037ECF',
	},
	downview: {
		backgroundColor: '#fff',
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30
	},
	SectionStyle: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F4F4FC',
		height: 55,
		borderRadius: 5,
		margin: 5,
		marginRight: 30,
		marginLeft: 30,
		marginTop: 42
	},
	ImageStyle: {
		margin: 5,
		height: 22,
		width: 22,
		resizeMode: 'stretch',
		alignItems: 'center'
	},
	SectionStyle1: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F4F4FC',
		height: 55,
		borderRadius: 5,
		margin: 5,
		marginRight: 30,
		marginLeft: 30,
		marginTop: 10
	},
});
