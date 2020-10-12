import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';


const CounterScreen = () => {

    const [counter, setCounter] = useState(0);  // 0 is default/starting value

    return (
        <View>
            <Button

                onPress={() => {
                    // don't do this
                    // counter++;
                    setCounter(counter + 1);  // this is the concept of state Management  i.e changing state of the value on Screen ,  this basially re-render the current screen and the view gets the updated value
                }}
                title="Increase"
            />


            <Button

                onPress={() => {
                    // don't do this  
                    // counter--;
                    setCounter(counter - 1);// this is the concept of state Management  i.e changing state of the value on Screen

                }}
                title="Decrease" />


            <Text>Counter Text : {counter} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: {
        marginTop: 20
    }
});

export default CounterScreen;