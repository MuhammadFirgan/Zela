import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
  return (
    <View>
      <Text style={styles.title}>Zela</Text>
    
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007bff',
    marginTop: 10,
    marginLeft: 10
  }
})

export default Header