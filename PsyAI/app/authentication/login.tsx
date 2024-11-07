import { useRouter } from 'expo-router';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function LoginScreen() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    router.push('/(tabs)/'); // Redireciona para a tela inicial
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput style={styles.input} placeholder="Username" onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="Password" onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 8,
    padding: 10,
  },
});
