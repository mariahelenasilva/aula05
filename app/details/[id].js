import { View, Text, StyleSheet, Image } from "react-native";
import dados from "../produtos";
import { Link, useLocalSearchParams } from "expo-router";

export default function Details() {

    const {id} = useLocalSearchParams();
    const produto = dados.find(p => p.id === parseInt(id));
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.titulo}>Detalhes do Produto Id: {id}</Text>
                <Image source={{uri: produto.imagem}} style={{width: 220, height: 350}} />
                <Text>{produto.nome}</Text>
                <Text>{produto.valor}</Text>
                <Link href="/ProductScreen" style={styles.botao}>Voltar</Link>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    titulo: {
        fontSize: 30,
        fontWeight: 700,
    },
    botao: {
        backgroundColor: 'rgba(53, 89, 234, 1)',
        margin: 20,
        padding: 20,
        fontSize: 20,
        color: '#fff',
        borderRadius: 10,
        width: '80%',
        textAlign: 'center',
    }
})
