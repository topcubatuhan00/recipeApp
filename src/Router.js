import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Categories from './pages/Categories';
import Meals from './pages/Meals';
import MealDetail from './pages/MealDetail';

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{
				headerTitleAlign: 'center',
				headerTitleStyle: { color: '#FFA500' },
				headerTintColor: '#FFA500',
			}}>
				<Stack.Screen name="Categories" component={Categories} />
				<Stack.Screen name="Meals" component={Meals} />
				<Stack.Screen name="Detail" component={MealDetail} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;