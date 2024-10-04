import React from "react";
import LottieView from 'lottie-react-native';

import {Text , View } from 'react-native';

export default function Splash({ navigation }){
    return(
        
        <View style={{flex: 1, backgroundColor: '#157ef8'}}>
            <LottieView 
                source={require('../../../assets/animacao.json')}
                autoPlay
                // onAnimationFinish={() => navigation.navigate("Inicial")}
                style={{width: '100%', height: '100%'}}
            />
        </View>
    )
}