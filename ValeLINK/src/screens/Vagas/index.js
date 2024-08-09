import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import logo from '../../../assets/logo.png';
import { Picker } from '@react-native-picker/picker';

export default function Vagas(){
    const [selectedTypeOfWork, setSelectedTypeOfWork] = useState("");

    return(
        <View style={styles.container}>
            <View style={styles.margin}>
                <View style={styles.header}>
                    <Image source={logo} style={styles.logoimage}></Image>
                    <Text style={{fontSize: 24}}>VAGAS</Text>     
                </View>
                <View style={styles.searchview}>
                    <TextInput 
                        style={styles.course}
                        placeholder='Vaga'
                    ></TextInput>
                    <TextInput 
                        style={styles.course}
                        placeholder='Cidade'
                    ></TextInput>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedTypeOfWork={selectedTypeOfWork}
                            onValueChange={(itemValue, itemIndex) => setSelectedTypeOfWork(itemValue)}
                            style={styles.pickertypeofwork}
                            itemStyle={styles.pickeritem}
                        >
                            <Picker.Item label='Carlos' value='Carlos'/>
                        </Picker>
                    </View>
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedTypeOfWork={selectedTypeOfWork}
                            onValueChange={(itemValue, itemIndex) => setSelectedTypeOfWork(itemValue)}
                            style={styles.pickertypeofwork}
                            itemStyle={styles.pickeritem}
                        >
                            <Picker.Item label='Carlos' value='Carlos'/>
                        </Picker>
                    </View>
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedTypeOfWork={selectedTypeOfWork}
                            onValueChange={(itemValue, itemIndex) => setSelectedTypeOfWork(itemValue)}
                            style={styles.pickertypeofwork}
                            itemStyle={styles.pickeritem}
                        >
                            <Picker.Item label='Carlos' value='Carlos'/>
                        </Picker>
                    </View>
                </View>
                <TouchableOpacity style={styles.button}><Text style={styles.textbutton}>Buscar</Text></TouchableOpacity>
            </View>
        </View>
    )
};