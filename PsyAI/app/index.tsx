import { Redirect } from 'expo-router';

export default function Page() {
  const isLogged = false

  if (isLogged) {
    return <Redirect href="/(tabs)/" />
  } else {
    return <Redirect href="/authentication/login" />
  }
}