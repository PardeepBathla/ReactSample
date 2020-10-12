import React, { useReducer } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter'


const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    // state === {red:number ,green:number , blue:number};
    // action === {colorToChange :'red',amount : 15 or -15}}
    //                                 OR
    // action === {colorToChange :'green',amount : 15 or -15}}


    switch (action.type) {
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0
                ? state
                : { ...state, red: state.red + action.payload }   //...state means is copy of state object above because we never change argument directly

        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
                ? state
                : { ...state, green: state.green + action.payload }   //...state means is copy of state object above because we never change argument directly
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
                ? state
                : { ...state, blue: state.blue + action.payload }   //...state means is copy of state object above because we never change argument directly
        default:
            return state;
    }

}
const Square2Screen = () => {

    const [state, runMyReducer] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
    //state value is excatly gonna be {red:0,green:0,blue:0}
    //runMyReducer could be any name either dispatch abc ,its job is to run the reducer this will make change to state

    const { red, green, blue } = state;

    console.log(red);
    console.log(blue);
    console.log(green);


    return <View>
        <ColorCounter
            onIncrease={() => runMyReducer({ type: 'change_red', payload: COLOR_INCREMENT })}
            onDecrease={() => runMyReducer({ type: 'change_red', payload: -1 * COLOR_INCREMENT })}
            color="Red" />


        <ColorCounter
            onIncrease={() => runMyReducer({ type: 'change_blue', payload: COLOR_INCREMENT })}
            onDecrease={() => runMyReducer({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })}
            color="Blue" />


        <ColorCounter
            onIncrease={() => runMyReducer({ type: 'change_green', payload: COLOR_INCREMENT })}
            onDecrease={() => runMyReducer({ type: 'change_green', payload: -1 * COLOR_INCREMENT })}
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

export default Square2Screen;