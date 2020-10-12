import React, { useState } from 'react';
import { Text, StyleSheet, TextInput, View } from 'react-native';

const BoxScreen = () => {

    const [name, setName] = useState('')
    return (

        <View style = {styles.viewStyle}>
           
           <Text style = {styles.textStyle}>This is Box Screen</Text>

        </View>
    )
}


const styles = StyleSheet.create({
    viewStyle: {
        borderColor: 'black',
        margin: 15,
        borderWidth: 1,
        padding:10

    },

    textStyle :{
        borderWidth : 1,
        borderColor : 'red',
        padding : 10
    }
})
export default BoxScreen;
