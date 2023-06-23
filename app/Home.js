import { View, Text, TextInput, StyleSheet } from 'react-native'
import Header from './components/header'
//import ChatBox from './components/chatbox'
import Main from './components/main'
// <ChatBox chat={chat} style={{ display: 'none' }}/>
const Home = () => {
  return (
    <View style={styles.body}>
      <Header />
      
      <Main />
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#030712',
    flex: 1,
    color: 'white',
    paddingHorizontal: 10,
    position: 'relative'
  }
})

export default Home