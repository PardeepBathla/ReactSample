import React from 'react';
import { Text, StyleSheet, View ,Image} from 'react-native';

// const ImageDetail = (props) => {
    const ImageDetail = ({imageSource,title,score}) => {

    // console.log(props);

return <View>

{/* <Image source = {props.imageSource}/>
<Text>{props.title}</Text>
<Text>Imag Score - {props.score}</Text> */}

 {/* we can do like this as well */}
<Image source = {imageSource}/>
<Text>{title}</Text>
<Text>Imag Score - {score}</Text>

</View>


}

const style = StyleSheet.create({});

export default ImageDetail;