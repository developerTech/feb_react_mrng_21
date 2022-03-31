import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Display from './Component/DisplayList'

const url = "https://zomatoajulypi.herokuapp.com/restaurant";


function App() {

  const [count,setCount] = useState(0);
  const [city,setCity] = useState();
  const updateCount = () => {
    setCount(count+1)
  }
  useEffect(() => {
    fetch(url, {method:'GET'})
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        setCity(data)
    })
  },[])

  return (
    <View style={styles.container}>
      <Text>React Native App</Text>
      <Text>Count Is {count}</Text>
      <Button title="Counter" onPress={updateCount}/>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Display list={city}/>
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
});

export default App
