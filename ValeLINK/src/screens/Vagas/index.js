import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import logo from '../../../assets/logo.png';
import { Picker } from '@react-native-picker/picker';
import company from '../../../assets/companyexemple.png'

export default function Vagas({ navigation }){
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
                <TouchableOpacity onPress = {() => navigation.navigate('AnaliseDeVagas')}>
                    <View style={styles.vacancies}>
                        <Image source={company} style={styles.imagecompany}></Image>
                        <View style={styles.line}></View>
                        <View style={{left: 5}}>
                            <Text style={styles.texttitlevacancie}>Desenvolvimento Web</Text>
                            <Text style={styles.textnamecompany}>Company</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress = {() => navigation.navigate('BuscasVagas')}><Text style={styles.textbutton}>Buscar</Text></TouchableOpacity>
            </View>
        </View>
    )
};