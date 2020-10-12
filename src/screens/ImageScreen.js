import React from 'react';
import {Text,StyleSheet, View} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageSceen = () => {

    return <View>
        <ImageDetail title = "Forest"  imageSource = {require('../../assets/forest.jpg')} score = {9}/>
        <ImageDetail title = "Beach"  imageSource = {require('../../assets/beach.jpg')}  score = {8} />
        <ImageDetail title = "Hills"   imageSource = {require('../../assets/mountain.jpg')} score = {10} />
    </View>
};

const style = StyleSheet.create({});

export default ImageSceen;