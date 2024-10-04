import React from "react";
import LottieView from 'lottie-react-native';

import {Text , View } from 'react-native';

export default function Splash({ navigation }){
    return(
        
        <View style={{flex: 1, backgroundColor: '#157ef8'}}>
            <LottieView 
                source={require('../../../assets/animacao_dois (1).json')}
                // onAnimationFinish={() => navigation.navigate("Inicial")}
                style={{width: 10, height: 10}}
            />
        </View>
    )
}