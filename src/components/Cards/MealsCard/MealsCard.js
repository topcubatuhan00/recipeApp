import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';

import styles from './MealsCard.style';

const DetailsCard = ({ detail, onSelect }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Image source={{ uri: detail.strMealThumb }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{detail.strMeal}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );

};

export default DetailsCard;
