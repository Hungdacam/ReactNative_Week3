import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    flexDirection: 'column',
    backgroundColor: '#00CCF9',
      
  },
  button: {
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: 100,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
  titleText: {
    fontFamily: 'Arial',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold', 
  },
  descriptionText: {
    fontFamily: 'Arial',
    fontSize: 15,
    textAlign: 'center',
    width: 350,
    fontWeight: 'bold', 
  },
  image: {
    flex: 2, 
    justifyContent: 'center',       
    alignItems: 'center',
 },
 views: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
 },
 footer: {
   flex: 1,
   flexDirection:'row',
   justifyContent: 'space-around',
   alignItems: 'center'
 }
});

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.image}> 
        <Image source={require('./Ellipse8.png')} />
      </View>
      
      <View style={styles.views}> 
        <Text style={styles.titleText}>
          GROW {"\n"} YOUR BUSINESS
        </Text>
      </View>

      <View style={styles.views} > 
        <Text style={styles.descriptionText}>
          We will help you to grow your business using online server
        </Text>
      </View>

      <View style={styles.footer}> 
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
