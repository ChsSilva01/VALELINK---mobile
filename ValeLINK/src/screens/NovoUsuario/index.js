import React, { useState, useEffect } from 'react';
import {ScrollView, Platform, Alert, Picker, Text, TextInput, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { styles } from './style';
import { showMessage, hideMessage } from "react-native-flash-message";

import api from '../../services/api';

//  ParamList = {
//     Detail: {
//        CPF_reg: string,        
//     }
// };


const NovoUsuario= FC= () => {

    const [CPF, setCPF] = useState(""); 
    const [nome, setNome] = useState(""); 

    async function add(){
        const obj= {nome,CPF};
        
        // if(id > 0){
        //   const res= await axios.post(api + "editar.php", obj);
        //   if(res.data.success === true)
        //   {
        //     limparCampos();
        //   }
        //
        await axios.post(api + 'apiVALELINK/usuarios/salvar.php',obj);  
      }

    const navigation = any = useNavigation();

    // const route = useRoute<RouteProp<ParamList; 'Detail';
    // const CPF_reg = route?.params?.CPF_reg;
       
      
       
    // const [sucess, setSucess] = useState(false);
    // const [loading, setLoading] = useState(false);
   
    // async function saveData() {            
       
              
    //        if (nome == "") {
    //         showMessage({
    //             message: "Erro ao Salvar",
    //             description: 'Preencha os Campos Obrigatórios!',
    //             type: "warning",
    //         });
    //         return;
    //     }

    //     try {
    //         const obj = {
    //             // id: CPF_reg,
    //             nome: nome,               
                
    //         }
     
    //         const res = await api.post('apiVALELINK/usuarios/salvar.php', obj);

    //         if (res.data.sucesso === false) {
    //             showMessage({
    //                 message: "Erro ao Salvar",
    //                 description: res.data.mensagem,
    //                 type: "warning",
    //                 duration: 3000,
    //             });

    //             return;
    //         }

    //         setSucess(true);
    //         showMessage({
    //             message: "Salvo com Sucesso",
    //             description: "Registro Salvo",

    //             duration: 800,
    //         });
    //         navigation.push("Usuario")

    //     } catch (error) {
    //         Alert.alert("Ops", "Alguma coisa deu errado, tente novamente.");
    //         setSucess(false);
    //     }
    // }


    // if (loading === true) {
    //     return (
    //         <View style={{ flex: 1, backgroundColor: '#fff' }}>
    //             <ActivityIndicator style={{ marginTop: 100 }} color="#000" size="large" />
    //         </View>
    //     )
    // }

    // if (sucess) {
    //     return <Alert></Alert>
    // }
    

    return (
        <View style={{ flex: 1, marginTop: 20 }}>
            <View style={styles.Header}>
                <TouchableOpacity
                    style={styles.BackButton}
                    onPress={() => navigation.push("Usuario")}
                >
                    <Ionicons name="caret-back-circle-outline" size={35} color="#484a4d"> </Ionicons>

                </TouchableOpacity>
                
                    <View style={styles.Title}>
                        <Text style={styles.TitleText}>Inserir Registro</Text>
                    </View>

            </View>

             <ScrollView>   
            <View>
                <Text style={styles.TitleInputs}>Nome completo</Text>

                <TextInput
                    placeholder="Nome completo"
                    onChangeText={(nome) => setNome(nome)}
                    value={nome}
                    style={styles.TextInput}
                />
            </View>
            <View>
                <Text style={styles.TitleInputs}>CPF completo</Text>

                <TextInput
                    placeholder="CPF completo"
                    onChangeText={(CPF) => setCPF(CPF)}
                    value={CPF}
                    style={styles.TextInput}
                />
            </View>
           
        
           
                <TouchableOpacity
                    style={styles.Button}
                    onPress={() => {
                        add();
                    }}
                >
                    <Text style={styles.ButtonText}>Salvar Registro</Text>
                </TouchableOpacity>

                </ScrollView>

               
    

        </View>
    );
}

export default NovoUsuario;