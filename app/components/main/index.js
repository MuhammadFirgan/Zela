import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';
import { useState, useEffect } from 'react'
import Axios from 'axios'

const APIKEY = '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'

const Main = () => {
  const [prompt, setPrompt] = useState('')
  const [chat, setChat] = useState('')
  
  useEffect(() => {
    const fetchingData = async (userInput) => {
      
      try {
        const response = await Axios.post('https://api.openai.com/v1/chat/completions', {
          prompt: userInput,
          temperature: 0.7,
          model: 'gpt-3.5-turbo',
          apiKey: APIKEY
        })
        console.log(response.data)
      }
      catch(err) {
        console.log(err)
      }
    }
    fetchingData(chat)
  }, [prompt])
    const handlePress = () => {
      setChat(prompt)
      
      setPrompt('')
    }


  const handleInput = (text) => setPrompt(text)
  
  
  

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset={Platform.select({ ios: 0, android: 25 })}>
      <ScrollView>
        <View style={styles.box}>
          <Text style={{ color: 'white' }}>Hai namaku Zela, berikan aku pertanyaan tentang apapun</Text>
        </View>

        <View>
          <Text style={[styles.box2, chat.length < 1 && styles.hide]}>{chat}</Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TextInput style={styles.keyword} placeholder="Tanya Zela..." value={prompt} onChangeText={handleInput} />
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Icon name="send" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    backgroundColor: '#111827',
    alignSelf: 'flex-start',
    maxWidth: 250,
    padding: 8,
    borderRadius: 8,
    marginVertical: 5
  },
  box2: {
    flex: 1,
    alignSelf: 'flex-end',
    backgroundColor: '#007bff',
    maxWidth: 250,
    padding: 8,
    borderRadius: 8,
    marginVertical: 5,
    color: 'white',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 7,
    backgroundColor: '#111827',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 6,
    borderRadius: 5
  },
  keyword: {
    flex: 1,
    color: 'white',
    marginRight: 10,
    border: 'none'
  },
  hide: {
    display: 'none'
  }
})

export default Main
