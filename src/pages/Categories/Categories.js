import React from 'react';
import { View, FlatList } from 'react-native';
import useFetch from '../../hooks/useFetch';
import CategoryCard from '../../components/Cards/CategoryCard';
import Config from 'react-native-config';
import styles from './Categories.style';

import Loading from '../../components/Loading';
import Error from '../../components/Error';

const Categories = ({navigation}) => {
    const { data, error, loading } = useFetch(Config.API_URL_BYCATEGORY);
    const handleSelect = (category) => {
        navigation.navigate('Meals', {category});
    }

    const renderCategory = ({item}) => <CategoryCard category={item} onSelect={() => handleSelect(item.strCategory)}/>

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data.categories}
                renderItem={renderCategory}
                initialNumToRender={5}
            />
        </View>
    );
};

export default Categories;