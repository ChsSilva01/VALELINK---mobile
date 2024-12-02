import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import logo from '../../../assets/logo.png';
import { Picker } from '@react-native-picker/picker';
import company from '../../../assets/companyexemple.png';
import fonts from '../../styles/fonts';
import api from '../../services/api';
import url from '../../services/url';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

export default function Vagas({ navigation }) {
    const [lista, setLista] = useState([]);
    const [page, setPage] = useState(1);
    const [cod, setCod] = useState("");
    const [refreshing, setRefreshing] = useState(false); // Estado para pull-to-refresh
    const [isLoading, setIsLoading] = useState(false); // Estado para carregamento inicial

    useEffect(() => {
        listarDados();
    }, [])

    async function listarDados(refresh = false) {
        try {
            if (!refresh) setIsLoading(true); // Mostrar loader inicial, se não for um refresh
            const res = await api.get(`apiVALELINK/vagas/listar.php?pagina=${refresh ? 1 : page}&limite=10`);
            await AsyncStorage.setItem('@cod_vagas', JSON.stringify(res.data.resultado[0].cod_vagas));
            setLista(refresh ? res.data.resultado : [...lista, ...res.data.resultado]); // Atualiza a lista com novos dados
            setPage(refresh ? 2 : page + 1); // Reseta ou incrementa a página
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        } finally {
            setIsLoading(false);
            setRefreshing(false);
        }
    }

    async function salvarCod(cod_vagas) {
        try {
            await AsyncStorage.setItem('@cod_vagas', JSON.stringify(cod_vagas));
            navigation.navigate('AnaliseDeVagas');
        } catch (error) {
            console.error('Erro ao salvar o código da vaga:', error);
        }
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => salvarCod(item.cod_vagas)} key={item.cod_vagas} style={{ paddingTop: 5 }}>
            <View style={styles.vacancies}>
                <Image
                    source={{ uri: `${url}apiVALELINK/empresa/imgs/${item.foto_empresa}` }}
                    style={styles.imagecompany}
                />
                <View style={styles.line}></View>
                <View style={{ left: 25 }}>
                    <Text style={styles.texttitlevacancie}>{item.area_vagas}</Text>
                    <Text style={styles.textnamecompany}>{item.nome_empresa}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.margin}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate("Empresas")}>
                        <Ionicons name="arrow-back" size={30}></Ionicons>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 24, right: 15, bottom: 0, fontFamily: fonts.title }}>Vagas</Text>
                    <View></View>
                </View>
                <View style={styles.searchview}>
                    <TextInput style={styles.course} placeholder='   Vaga'></TextInput>
                    <TextInput style={styles.course} placeholder='   Cidade'></TextInput>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', top: 40 }}>
                    <TouchableOpacity style={styles.filters}><Text style={styles.filterstext}>Trabalho</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.filters}><Text style={styles.filterstext}>Senioridade</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.filters}><Text style={styles.filterstext}>Cidade</Text></TouchableOpacity>
                </View>

                {isLoading && <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />}

                <FlatList
                    data={lista}
                    keyExtractor={(item) => item.cod_vagas.toString()}
                    renderItem={renderItem}
                    onRefresh={() => listarDados(true)} // Atualiza a lista ao puxar para baixo
                    refreshing={refreshing} // Estado de carregamento do pull-to-refresh
                    ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20 }}>Nenhuma vaga encontrada</Text>}
                    style={{ height: 350, top: 60 }}
                />

                <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('BuscasVagas'); console.log(cod) }}>
                    <Text style={styles.textbutton}>Buscar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
