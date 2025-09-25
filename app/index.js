import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function index()
{
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Pagina Inicial</Text>
            <Link href="/ProductScreen" style={styles.botao}>Produtos</Link>
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
    }
})
