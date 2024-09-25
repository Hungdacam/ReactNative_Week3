import { Text, SafeAreaView, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';


export default function App() {
  return (
    <LinearGradient 
    colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']} 
    style={styles.container}>
      
        <View style={styles.image}>
          <Image source={require('./Img.png')}/>
        </View>

        <View style={styles.views}>
          <Text style={styles.title}>
            GROW {'\n'} YOUR BUSINESS
          </Text>
        </View>

        <View style={styles.views}>
          <Text style={styles.descriptionText}>
            We will help you to grow your business using
            online server
          </Text>
        </View>
        
        <View style={styles.view4}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              LOGIN
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              SIGN UP
            </Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            HOW WE WORK?
          </Text>
        </View>

    
    </LinearGradient>
    
  );
}

const styles = StyleSheet.create({
  container: {
    background: 'linear-gradient(135deg, #C7F4F6, #D1F4F6, #E5F4F5, #37D6F8, #00CCF9)',
    flex:1,
  },
  image:{
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
    },
  views: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  title: {
    fontWeight:'bold',
    textAlign: 'center',
    fontSize: 25
  },
  descriptionText: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight:'bold',
    width: 332,
    height: 36
  },
  view4: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button:{
    backgroundColor: '#E3C000',
    height: 45,
    width: 125 , 
    justifyContent: 'center',
    alignItems:'center',
    padding: 10
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  footer: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center'
  },
  footerText: {
    fontWeight: 'bold',
    fontSize: 18
  }
});
