import React, {useState,useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Header from '../Components/Header';



const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");
const { getDatabase, ref, child, get,onValue } = require("firebase/database");
const { getFirestore, doc,getDoc} = require("firebase/firestore");


const firebaseConfig = {
    apiKey: "AIzaSyBTPocirA2780dKVRJN39eH2CA-CFS4YOQ",
    authDomain: "bustrackerproject-4b0d4.firebaseapp.com",
    databaseURL: "https://bustrackerproject-4b0d4-default-rtdb.firebaseio.com",
    projectId: "bustrackerproject-4b0d4",
    storageBucket: "bustrackerproject-4b0d4.appspot.com",
    messagingSenderId: "253245996193",
    appId: "1:253245996193:web:8aaae455f1ba124dc3c4e0",
    measurementId: "G-ELM1BEK3HW"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const a=[]



onValue(ref(db, 'GPS/'), (snapshot) => {
  const username =snapshot.val()
  a[0]=username.f_latitude
  a[1]=username.f_longitude
});


export default function MapScreen() {
  const mapRegion={
            latitude:a[0],
             longitude: a[1],
             latitudeDelta: 0.05,
             longitudeDelta: 0.02
  }
  return (
    <View>
            <Header></Header>

            <View style={styles.container}>
            
            <Text style={styles.text}>MAP</Text>

            <View style={styles.mapContainer}>
                <MapView style={styles.map} region={mapRegion}>
                <Marker coordinate={mapRegion} title="marker"/>
                </MapView>
            </View>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: 350,
    height: 450,
  },

  mapContainer: {
    padding: 30
  },

  text: {
    fontWeight: '900',
    fontSize: 45,
    paddingTop:25,
    fontStyle:'italic',
    
  }
});
