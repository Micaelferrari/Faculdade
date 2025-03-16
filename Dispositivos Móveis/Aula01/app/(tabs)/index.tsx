import { Image, StyleSheet, Platform, View } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TextInput, Text, SafeAreaView, KeyboardAvoidingView, ScrollView, Button, Modal } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

//importando o useState
import React, { useState } from 'react';

export default function HomeScreen() {

  /*const itens = [
    {
      id: 1,
      description: "produto 1",
      url: "https://picsum.photos/id/1/200/300"
    },

    {
      id: 2,
      description: "produto 2",
      url: "https://picsum.photos/id/1/200/300"
    },
    {
      id: 3,
      description: "produto 3",
      url: "https://picsum.photos/id/1/200/300"
    },
    {
      id: 1,
      description: "produto 1",
      url: "https://picsum.photos/id/1/200/300"
    },

    {
      id: 2,
      description: "produto 2",
      url: "https://picsum.photos/id/1/200/300"
    }

  ]*/

  const [text, setText] = useState('')
  const [password, setPassword] = useState('')
  const [modalVisivel, setModalVisivel] = useState(false)

  return (
    <SafeAreaView>
      {/*exercicio 1*/}
      {/* <ScrollView>

      <Text style={styles.title}> Exercicio 1</Text>
        {itens.map((item) => (
          <Card key={item.id} style={styles.card}>
            <Card.Title title={item.description}/>
             <Card.Cover source={{ uri: item.url }} /> 
          </Card>
          
          ))}
           <View>
         <Text>  Corinthians</Text>
          </View>
          </ScrollView>*/}

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
        <View style={styles.box}>
          <Text style={styles.h1}> Exercicio 2</Text>
          <TextInput style={styles.input} placeholder='email' value={text} onChangeText={setText} />
          <TextInput style={styles.input} placeholder='password' value={password} onChangeText={setPassword} />
          <Button title='clique aqui' onPress={() => { setModalVisivel(true) }} />
        </View>
        {/*  <Modal visible={modalVisivel} transparent={true} animationType='fade' onRequestClose={() => setModalVisivel(false)}>
               <View>
                <Text>senha incorreta</Text>

                <Button title='fechar' onPress={ () => {setModalVisivel(false)}}/>
                </View>
              </Modal>
        */}

        <Modal
          visible={modalVisivel}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setModalVisivel(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Senha incorreta</Text>

              <Button
                title="Fechar"
                onPress={() => setModalVisivel(false)}
              />
            </View>
          </View>
        </Modal>


      </KeyboardAvoidingView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0'
  },

  box: {
    fontSize: 20,
    marginBottom: 10,
    padding: 50,
    margin: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'

  },

  input: {
    height: 40,
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10
  },
  card: {
    margin: 10,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },

  h1: {
    padding: 50,
    display: "flex"
  }
});
