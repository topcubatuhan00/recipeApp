import React from 'react';
import { View, FlatList } from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import styles from './Meals.style';
import MealsCard from '../../components/Cards/MealsCard'

import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Meals = ({ route, navigation }) => {
    const { category } = route.params;
    const url = Config.API_FILTER_URL + '=' + category;
    const { data, error, loading } = useFetch(url);

    const handleSelect = (id) => {
        navigation.navigate("Detail", { id});
    };

    const renderDetails = ({ item }) => <MealsCard detail={item} onSelect={() => handleSelect(item.idMeal)} />;
    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data.meals}
                renderItem={renderDetails}
                initialNumToRender={5}
            />
        </View>
    );


};

export default Meals;
