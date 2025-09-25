import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { Link } from 'expo-router';
import dados from './produtos';


export default function ProductScreen()
{
    //const data = dados;
    //ver os dados da lista no console
    //console.log(data);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Produtos</Text>
            <Link href="/" style={styles.botao}>Voltar</Link>

            <FlatList
                style={{width: '80%'}}
                data={dados}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                <Link href={`/details/${item.id}`} styles={styles.card}>
                    <View style={styles.card}>
                        <Image source={{uri: item.imagem}} style={{width: 220, height: 350}} />
                        <View style={styles.cardInfo}>
                            <Text>{item.nome}</Text>
                            <Text>{item.valor}</Text>
                        </View>
                    </View>
                </Link>
            )}
            ></FlatList>

        </View>
    );
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
    },
    
})
