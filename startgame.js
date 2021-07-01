import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, Button } from 'react-native';



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#202020",
      justifyContent: "flex-end",
      paddingBottom: 400,
      paddingLeft: 80,
      paddingRight: 80
     
      
    },
    value: {
      color: "#fff",
      fontSize: 40,
      textAlign: "right",
      marginRight: 20,
      marginBottom: 10,
    
     
    },
    button: {
        backgroundColor: "#2a6948",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 5
      },
  
  });


export default class startgame extends React.Component {

    show = () => {

        this.props.navigation.navigate('S2');

    }

    render() {
        return (

            <View style = {styles.container}>

               
                <Button title = 'Start Game' onPress={this.show} > </Button>

            </View>

        )
    
    };






}