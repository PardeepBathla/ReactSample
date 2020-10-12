import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const HomeScreen = (props) => {

    console.log(props);


    return <View>

        <Button
            onPress={() => props.navigation.navigate('Component')}     // 'Component is the same of screen which is declared in App.js'
            title="Go to Components Demo" />

        <TouchableOpacity onPress={() => {
            console.log("List Pressed")
            props.navigation.navigate('List')
        }
        }>
            <Text>Go to List Demo</Text>
            <Text>Go to List Demo</Text>
            <Text>Go to List Demo</Text>
        </TouchableOpacity>

        <Button
            onPress={() => props.navigation.navigate('Image')}
            title="Go to Image Demo" />

        <Button

            // onPress={() => props.navigation.navigate('Counter')}
            onPress={() => props.navigation.navigate('Counter2')}  //using reducer
            title="Go to Counter Demo" />

        <Button
            onPress={() => props.navigation.navigate('Color')}
            title="Go to Color Demo" />

        <Button
            // onPress={() => props.navigation.navigate('Square')}
            onPress={() => props.navigation.navigate('Square2')} // using reducer
            title="Go to Sqaure Demo" />

        <Button
            title="Text Input"
            onPress={() => props.navigation.navigate('Input')} />

        <Button
            title="GO To Box Screen"
            onPress={() => props.navigation.navigate('Box')} />

    </View>

}

const style = StyleSheet.create({

    textStle: {
        fontSize: 40,
        marginTop: 10
    },

    textStle1: {
        fontSize: 20
    }
});
export default HomeScreen;