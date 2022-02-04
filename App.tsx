import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Home } from './src/screens/Home';
import AppLoading from 'expo-app-loading';
import { FONTS_LOADED } from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts(FONTS_LOADED);

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <Home />
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
    fontFamily: 'RobotoCondensed_700Bold'
  },
});
