import * as React from 'react';
import {Text,View,TextInput,StyleSheet,TouchableOpacity,ScrollView,Image} from 'react-native';

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      newItem : '',
      listOfItems : []
    }
  }
  deleteItem(id){
    //get all the list items
    const list = this.state.listOfItems;

    //filter the list and create another list which is basically the list item to be deleted
    const updatedList = list.filter(item => item.id !== id)

    //set the state with the updated list
    this.setState({
      listOfItems : updatedList
    })
  }
  updateInput(key,value){

    //updating react state
    this.setState({
      [key] : value
    })
  }
  addItem = () => {
    if(this.state.newItem != ''){
      //create a new item with unique id
      const newItemJSON = {
        id : 1 + Math.random(),
        value : this.state.newItem.charAt(0).toUpperCase()+this.state.newItem.slice(1)
      }
      //copy current list of items
      const list = this.state.listOfItems;

      //add the new item to this list
      list.push(newItemJSON);

      //update state with new list, reset the new item
      this.setState({
        listOfItems : list,
        newItem : ''
      })
    }
  }
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
              onChangeText ={(text) => {
                this.setState({newItem : text})
              }}
              value = {this.state.newItem}
          >
           </TextInput>
           <TouchableOpacity style = {styles.addButton} onPress = {this.addItem}>
             <Text style = {{color: 'white'}}>ADD</Text>
           </TouchableOpacity>
        </View>
        <ScrollView>{
          this.state.listOfItems.map((item) => {
            return(
              <View style = {styles.listView}>
                <Text style = {styles.textStyle}>{item.value}</Text>
                <TouchableOpacity onPress = {() => {
                  this.deleteItem(item.id)
                }}>
                  <Image source = {require("./assets/deleteIcon.png")} style = {styles.listText}/>
                </TouchableOpacity>
              </View>
            )
          })
        }
        </ScrollView>
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
  textStyle : {
    borderWidth : 2,
    borderRadius :15,
    marginTop : 2,
    width : 200,
    height : 40,
    textAlign : 'center',
    padding :5,
    textSize :15,
    backgroundColor : '#ffc4ec',
    fontSize : 15,
    fontWeight : 'bold'
  },
  listView : {
    flexDirection : 'row',
    margin : 2
  },
  listText : {
    width : 20,
    height : 20,
    padding : 20
  }
})