import React, { useState, useEffect } from 'react';
import { Platform, StyleSheet, View, Text, Button } from 'react-native';
import * as Location from 'expo-location';
import MapboxGL from '@react-native-mapbox-gl/maps';
MapboxGL.setAccessToken('pk.eyJ1IjoiZGFua25pOTUiLCJhIjoiY2t3cmE0OXlsMGQ3bzMxbHNjMm82bDkzeCJ9.1XATyS82VYWyaSB5NQ3j9g');

export const Mapbox = () => {

    const [coordinates] = useState([11.0653, 59.9263]);

    const [location, setLocation] = React.useState(null);
    const [errorMsg, setErrorMsg] = React.useState(null);

    React.useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);

        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }


    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <MapboxGL.MapView style={styles.map} pitchEnabled={true}
                    styleURL="mapbox://styles/dankni95/ckwryw6wp4t1u16p3867udb73">
                    <MapboxGL.Camera zoomLevel={19} centerCoordinate={coordinates} pitch={100} heading={320} />
                    <MapboxGL.UserLocation visible={true} renderMode={"normal"} showsUserHeadingIndicator />
                    <MapboxGL.PointAnnotation coordinate={coordinates} id="Test" />
                </MapboxGL.MapView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'blue',
    },
    map: {
        flex: 1,
    },
});
