import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';



const ListScreen = () => {

    const friends = [

        { name: 'Friends #1', age: 20 },
        { name: 'Friends #2', age: 24 },
        { name: 'Friends #3', age: 27 },
        { name: 'Friends #4', age: 28 },
        { name: 'Friends #5', age: 30 },
        { name: 'Friends #6', age: 31 }
    ]
    return (
        <FlatList
            // horizontal
            // showsHorizontalScrollIndicator = {true}
            vertical
            showsVerticalScrollIndicator={true}
            keyExtractor={friends => friends.name}
            data={friends}
            renderItem={({ item }) => {
                // renderItem = {(element) => {
                //element =  {item:{name : 'Friend #1'},index 0}
            return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>
            }}
        />
    );
}


const styles = StyleSheet.create({

    textStyle: {
        fontSize: 20,
        marginVertical: 70
    }
});

export default ListScreen