import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

import Row from "./components/Row";
import Button from "./components/Button";
import calculator, { initialState } from "./util/calculator";

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

export default class screen2 extends React.Component {
  state = initialState; 


  scorezz = () => {


    alert(this.state.score);
    this.props.navigation.navigate('S3');

}

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
            {(this.state.currentValue).toLocaleString()}
          </Text>
          </Text>

        
          <Text style={styles.value}>
            {(this.state.hintNum).toLocaleString()}
          </Text>
          
          <Row>
            
          <Button
              text="guess"
              theme="accent"
              onPress={() => this.handleTap("equal")}
            />
             <Button
              text="Score"
              theme="secondary"
              onPress={() => this.scorezz()}
            />
             <Button
              text="Count"
              theme="secondary"
              onPress={() => this.handleTap( "")}
            />

          </Row>

          <Row>
            <Button text="7" onPress={() => this.handleTap("number", 7)} />
            <Button text="8" onPress={() => this.handleTap("number", 8)} />
            <Button text="9" onPress={() => this.handleTap("number", 9)} />
            <Button
              text="gen"
              theme="secondary"
              onPress={() => this.handleTap("gen")}
            />
            
            
           
          </Row>

          <Row>
            <Button text="4" onPress={() => this.handleTap("number", 4)} />
            <Button text="5" onPress={() => this.handleTap("number", 5)} />
            <Button text="6" onPress={() => this.handleTap("number", 6)} />
            <Button
              text="Hint"
              theme="secondary"
              onPress={() => this.handleTap("hint")}
            />
           
          
          </Row>

          <Row>
            <Button text="1" onPress={() => this.handleTap("number", 1)} />
            <Button text="2" onPress={() => this.handleTap("number", 2)} />
            <Button text="3" onPress={() => this.handleTap("number", 3)} />
            <Button
              text="Rev"
              theme="secondary"
              onPress={() => this.handleTap( "rev")}
            />
          
           
          </Row>


          <Row>
            
          <Button
              text="C"
              theme="secondary"
              onPress={() => this.handleTap("clear")}
            />
            <Button
              text="0"
              size="secondary"
              onPress={() => this.handleTap("number", 0)}
            />
            
            <Button
              text="Reset"
              theme="secondary"
              onPress={() => this.handleTap( "reset")}
            />
           
           
              

          </Row>
        </SafeAreaView>
      </View>
    );
  }
}
