
import React from 'react';
import { Mapbox } from './src/components/Mapbox';
import { StatusBar } from 'expo-status-bar';
import NavBar from "./src/components/NavBar/NavBar.jsx";
import {Text} from "react-native";



const App = () => {
  return (
    <>
      <Text style={{backgroundColor: 'rgb(0,0,0)', height: "4%"}}/>
      <StatusBar style={"inverted"}/>
      <Mapbox />
      <NavBar/>
    </>
  );
};


export default App;


