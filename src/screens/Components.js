import React from 'react';
import { View, StyleSheet,Text } from 'react-native';


const Components = () => {

    const name = 'Pardeep';
    const age = 28;
    const greeting  = <Text>Hello Greeting to you</Text>
    return <View>

        <Text style = {style.textStle}>This is component Screen</Text>
        <Text style = {style.textStle1} >My name is {name}</Text>
        <Text>Age is {age}</Text>
        {greeting}

    </View>


}

const style = StyleSheet.create({

    textStyle: {
        fontSize: 40
    }
});
export default Components;