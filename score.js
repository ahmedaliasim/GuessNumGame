import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import calculator, { initialState } from "./util/calculator";
import Row from "./components/Row";
import Button from "./components/Button";




const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#202020",
      justifyContent: "flex-end"
      
    },
    value: {
      color: "#fff",
      fontSize: 40,
      textAlign: "right",
      marginRight: 20,
      marginBottom: 10
     
    },
  
    borderz: {
      textAlign: "left"
    }
  
  });




export default class score extends React.Component {
    state = initialState;

    
  
    handleTap = (type, value) => {
        this.setState(state => calculator(type, value, state));
      };

    render() {
        return (

          

<View style={styles.container}>
<StatusBar barStyle="light-content" />
<SafeAreaView>
<Text style= {styles.borderz}>
            <Text style={styles.value}>
            
            {(this.state.hintNum).toLocaleString()}
          </Text>
            </Text>
          


  
  <Row>
    
           <Button
              text="Score"
              theme="secondary"
              onPress={() => this.handleTap('show')}
            />
   </Row>
</SafeAreaView>
</View>
);
}
};






