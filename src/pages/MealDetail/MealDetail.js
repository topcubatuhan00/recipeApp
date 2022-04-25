import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import useFetch from '../../hooks/useFetch';

import Loading from '../../components/Loading';
import Error from '../../components/Error';

import styles from './MealDetail.style';

const MealDetail = ({ route }) => {
    const { id } = route.params;
    const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id;
    const { data, error, loading } = useFetch(url);

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }

    return (
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={{ uri: data.meals[0].strMealThumb }} />
            <View style={styles.innerContainer}>
                <View style={styles.header}>
                    <Text style={styles.title}>{data.meals[0].strMeal}</Text>
                    <Text style={styles.area}>{data.meals[0].strArea}</Text>
                </View>
                <Text style={styles.description}>{data.meals[0].strInstructions}</Text>
                <TouchableOpacity  onPress={() => Linking.openURL(data.meals[0].strYoutube)} style={styles.button}>
                    <Text style={styles.buttonText}>Watch On YouTube</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default MealDetail;
