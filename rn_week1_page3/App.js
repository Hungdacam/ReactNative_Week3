import { Text, SafeAreaView, StyleSheet, View, Image, TextInput, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome'


export default function App() {
  return (
    <LinearGradient 
    colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}
    style={styles.container}>
      <View style={styles.view3}>
        <Image source={require('./lock.png')} />
      </View>

      <View style={styles.view2}>
        <Text style={styles.textView2_title}>
          FORGET {'\n'} PASSWORD
        </Text>
        <Text style={styles.textView2_content}>
          Provide your account’s email for which you want to reset your password
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="gray" style={styles.icon} />
        <TextInput 
        style={styles.input}
        placeholder='Email'
        placeholderTextColor="black"
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>
            NEXT
          </Text>
        </TouchableOpacity>

      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  view3:{
    flex:2,
    justifyContent:'center',
    alignItems: 'center'
  },
  inputContainer: {
    flex:1,
    flexDirection: 'row',
    position:'relative',
    justifyContent:'center',
    alignItems: 'center'
  },
  textView2_title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    paddingBottom: 30
  },
  textView2_content: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15
  },

  input: {
    backgroundColor: '#C4C4C4',
    width: 305,
    height: 45,
    fontSize: 15,
    paddingHorizontal: 40,
  },
  icon: {
    position: 'absolute',
    left: 43,
    top: 68
  },
  buttonContainer: {
    flex:1,
    justifyContent:'flex-start',
    alignItems: 'center'
  },
  btn: {
    backgroundColor: '#E3C000',
    width: 305,
    height: 45,
    justifyContent:'center',
    alignItems: 'center'
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 18
  },
 
 
});
