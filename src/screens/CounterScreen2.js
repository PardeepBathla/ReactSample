import React, { useReducer } from 'react';
import { Text, StyleSheet, View ,Button} from 'react-native';

const reducer = (state, action) => {
    //state ==={curentCount:number}
    //action === {type :'Increment' || 'Decrement',payload :15}


    switch (action.type) {

        case 'Increment':
            return { ...state, currentCount: state.currentCount + action.payload }
        case 'Decrement':
            return { ...state, currentCount: state.currentCount -  action.payload }
        default:
            return state;

    }
}


const PAYLOAD = 15;
const CounterScreen2 = () => {


    const [state, myReducer] = useReducer(reducer, { currentCount: 0 }) //always pass the value in {}

    const { currentCount } = state;

    console.log(currentCount);

    return (
        <View>
            <Button

                onPress={() => {
                    // don't do this
                    // counter++;
                    myReducer({ type: "Increment", payload: PAYLOAD }); //passing action object // this is the concept of state Management  i.e changing state of the value on Screen ,  this basially re-render the current screen and the view gets the updated value
                }}
                title="Increase"
            />


            <Button

                onPress={() => {
                    // don't do this  
                    // counter--;
                    myReducer({ type: "Decrement", payload: PAYLOAD  });//passing action object // this is the concept of state Management  i.e changing state of the value on Screen

                }}
                title="Decrease" />


            <Text>Current Count is  : {currentCount} </Text>
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
export default CounterScreen2;