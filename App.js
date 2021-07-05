import * as React from 'react';
import {Text,View,StyleSheet,TextInput,TouchableOpacity,Image} from 'react-native';
import Constants from 'expo-constants';
import * as Speech from 'expo-speech';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

/*// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';*/

export default class App extends React.Component {
constructor() {
    super();
    this.state = {
      text: '',
      
    };
  }

  speak = () => {
    var thingToSay = this.state.text;
    Speech.speak(thingToSay);
    console.log(thingToSay)
  }

 
  render(){

return (
      <SafeAreaProvider>
    <View style={styles.container}>
   
     <Header
            
            backgroundColor={'grey'}
            centerComponent={{
              text: 'Text to Speech',
              style: { color: 'black', fontSize: 25 },
            }}
          />

  <TextInput
            style = {styles.inputBox}
            onChangeText={text => {
              this.setState({ text: text });
            }}
            value={this.state.text}
      
            placeholder = "Type your word here"
  />
  <TouchableOpacity 
  
style = {styles.talkButton}     
  
  onPress = {() => {
  this.speak()
  }}
  >

          <Text style = {{marginLeft:30, marginTop:15}}> Say out loud </Text>
          
  </TouchableOpacity>
    
    </View>
      </SafeAreaProvider>
  );

  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '(rgb(20,200,200))',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  talkButton: {
   marginTop:40, marginLeft: 90, backgroundColor:"green", width:150, borderRadius:30, height: 50
  },

  
});
