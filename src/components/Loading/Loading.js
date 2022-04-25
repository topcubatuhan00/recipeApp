import React from 'react';
import LottieView from 'lottie-react-native'

import {LogBox} from "react-native";

LogBox.ignoreLogs([
"exported from 'deprecated-react-native-prop-types'.",
])

const Loading = () => {
    return <LottieView source={require('../../assets/99274-loading.json')} autoPlay/>;
    
};

export default Loading;

