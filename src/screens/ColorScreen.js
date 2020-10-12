import React, { useState } from 'react'
import { Text, View, Button, StyleSheet, FlatList } from 'react-native';


//  Steps to add change state 
// 1.  what to update
// 2. what will be default value of that of data
// 3.what will be the data type which is going to update

const ColorScreen = () => {

    const [colors, setColors] = useState([]); //  STEP: 2   [] is default/starting value

    console.log(colors);
    return (
        <View>

            <Button
                onPress={() => {
                    // this is the concept of state management i.e this basially re-render the current screen and the view gets the updated value
                    setColors([...colors, randomRgb()])  // randomRgb() method will put the value in colors array and setColors method will re-render the Screen and will update the view
                }}
                title="Add Color" />


            <FlatList
                data={colors}

                keyExtractor={(item) => item}
                renderItem={({item}) => {
                    return <View style={{ width: 100, height: 100, backgroundColor: item }} />

                }} 
                />
        </View>
    );
}


const randomRgb = () => {

    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
}
const styles = StyleSheet.create({

    // viewStyle: {
    //     width: 100,
    //     height: 100,
    //     backgroundColor: randomRgb()
    // }
})


export default ColorScreen;