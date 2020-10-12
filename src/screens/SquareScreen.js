import React, { useState } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import ColorCounter from '../components/ColorCounter'


const COLOR_INCREMENT = 15;
const SquareScreen = () => {

    const [red, setRed] = useState(0);// 0 in useState() will be default value for red ==== we can use reducer to update the state or use this useState()
    const [blue, setBlue] = useState(0);// 0 in useState() will be default value for blue ==== we can use reducer to update the state or use this useState()
    const [green, setGreen] = useState(0);// 0 in useState()will be default value for green ==== we can use reducer to update the state or use this useState(

    // check Square2Screen class for Reducer concept


    const setColor = (color, change) => {

        // here we learn switch statement , turnary if else
        switch (color) {
            case 'red':
                red + change > 255 || red + change < 0 ? null : setRed(red + change)
                return;

            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change)
                return;

            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
                return;

            default:
                return;
        }
    }

    console.log(red);
    console.log(blue);
    console.log(green);


    return <View>
        <ColorCounter
            onIncrease={() => setColor('red', COLOR_INCREMENT)}
            onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
            color="Red" />


        <ColorCounter
            onIncrease={() => setColor('blue', COLOR_INCREMENT)}
            onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
            color="Blue" />


        <ColorCounter
            onIncrease={() => setColor('green', COLOR_INCREMENT)}
            onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
            color="Green" />

        <View
            style={{
                width: 150,
                height: 150,
                backgroundColor: `rgb(${red},${green},${blue})`
            }}
        />

    </View>

}

const styles = StyleSheet.create({});

export default SquareScreen;