import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Components from './src/screens/Components';
import HomeScreen from './src/screens/HomeScreen';
import ImageSceen from './src/screens/ImageScreen';
import ImageDetail from './src/components/ImageDetail';
import ListScreen from './src/screens/ListScreen'
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import ColorCounter from './src/components/ColorCounter';
import Square2Screen from './src/screens/Square2Screen';
import CounterScreen2 from './src/screens/CounterScreen2';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen'

const navigator = createStackNavigator(

  {
    Home: HomeScreen,
    Component: Components,
    List: ListScreen,
    Image: ImageSceen,
    Detail: ImageDetail,
    Counter: CounterScreen,
    Counter2: CounterScreen2,
    Color: ColorScreen,
    Square: SquareScreen,
    Square2: Square2Screen,
    ColorCounter: ColorCounter,
    Input: TextScreen,
    Box: BoxScreen
  },
  {

    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);