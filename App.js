import * as React from 'react';
import {Text,View,TextInput,StyleSheet,TouchableOpacity} from 'react-native';

export default class App extends React.Component{
  render(){
    return(
      <View style = {styles.parentContainer}>
        <View style = {styles.headerContainer}>
          <Text style = {styles.headerText}>Todo List</Text>
        </View>
        <View style = {styles.inputContainer}>
          <TextInput
              placeholder = "Type item here..."
              style = {styles.inputBox}
          >
           </TextInput>
           <TouchableOpacity style = {styles.addButton}>
             <Text style = {{color: 'white'}}>ADD</Text>
           </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  parentContainer : {
    marginTop : 60
  },
  headerContainer : {
    backgroundColor : '#37489e',
  },
  headerText : {
    color : 'white',
    padding: 20,
    fontSize : 22,
    fontWeight : 'bold',
    textAlign : 'center'
  },
  inputContainer : {
    marginTop : 20
  },
  inputBox : {
    borderColor : 'black',
    borderWidth : '2px',
    borderRadius : 30,
    height : 40
  },
  addButton : {
    padding :10,
    borderWidth : '2px',
    backgroundColor : '#37489e',
    width : '65px',
    height : '40px',
    margin : '20px',
    borderRadius : 20,
  },
})