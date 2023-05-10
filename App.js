import { StatusBar } from 'expo-status-bar';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { db } from './src/config/firebase';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native';
import { addDoc } from 'firebase/firestore';

export default function App() {
  const [produtos, setProdutos] = useState([]);
  const [nomeProduto, setNomeProduto] = useState('');
  const [descricaoProduto, setDescricaoProduto] = useState('');
  const [precoProduto, setPrecoProduto] = useState('');


  async function buscarProduto() {
    const produtosRef = collection(db, 'produto');//collection é a tabela do banco de dados que eu quero acessar
    const produtosSnapshot = await getDocs(produtosRef); //getDocs é o select * from 
    const produtosLista = produtosSnapshot.docs.map(doc => {
      return { ...doc.data(), id: doc.id }
    });
    setProdutos(produtosLista[0]);
    console.log(produtosLista);
  }

  async function cadastrarProduto() {
    const produtosRef = collection(db, 'produto');
    const docRef = await addDoc(produtosRef, {
      nome: nomeProduto,
      descricao: descricaoProduto,
      preco: precoProduto
    });
    buscarProduto();
  } 


  useEffect(() => {
    buscarProduto();
  }, []);





  return (
    <View style={styles.container}>
      <Text>Quero dormir -_-</Text>
      <Text>Nome do produto: {produtos.nome}</Text>
      <Text>Descrição do produto: {produtos.descricao}</Text>
      <Text>Preço do produto: {produtos.preco}</Text>

      <TextInput placeholder='Digite o nome do produto'
      style={{borderWidth: 1, borderColor: '#000', width: 200, height: 40}}
      value={nomeProduto}
      onChangeText={text => setNomeProduto(text)}
      />
      <TextInput placeholder='Digite a descrição do produto'
      style={{borderWidth: 1, borderColor: '#000', width: 200, height: 40}}
      value={descricaoProduto}
      onChangeText={text => setDescricaoProduto(text)}/>
      <TextInput placeholder='Digite o preço do produto'
      style={{borderWidth: 1, borderColor: '#000', width: 200, height: 40}}
      value={precoProduto}
      onChangeText={text => setPrecoProduto(text)}/>

      <Button style={styles.botao} title='Cadastrar' onPress={cadastrarProduto}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    backgroundColor: '#D8BFD8',
    width: 200,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

});
