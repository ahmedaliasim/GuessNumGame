import 'react-native-gesture-handler';
import React,{Component} from 'react';


import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


import S1 from './startgame';
import S2 from './screen2';
import S3 from './score';

const App=createStackNavigator(

  {

    S1 :{screen:S1},
    S2 :{screen:S2},
    S3 :{screen:S3},

  }
);

export default createAppContainer(App);