import React from 'react';
import {View, StyleSheet} from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';
import IconScan from 'react-native-vector-icons/AntDesign';


const styles = StyleSheet.create({
	container: {
		backgroundColor: "#335C67",
		position: "absolute",
		bottom: 0,
		width: "100%",
		height: "10%",
		display: "flex",
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-around"
	},
})


const NavBar = () => {
	return (
		<View style={styles.container}>
			<Icon name="home" size={40} color="#fff" />
			<IconScan name="scan1" size={40} color="#fff" />
			<Icon name="user" size={40} color="#fff" />
		</View>
	);
};

export default NavBar;
