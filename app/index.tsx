import Button from "@/components/Button/Button";
import { Colors, Fonts } from "@/constants/tokens";
import React, { useCallback } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import { Sora_600SemiBold, Sora_400Regular, useFonts } from '@expo-google-fonts/sora';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded, error] = useFonts({Sora_600SemiBold, Sora_400Regular});

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || error) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <ImageBackground
        source={require('../assets/images/coffee-background.jpg')}
        resizeMode="cover"
        style={StyleSheet.absoluteFillObject}
      />

      <View style={styles.content}>
        <Text style={styles.title}>Одно из самых вкусных кофе в городе!</Text>
        <Text style={styles.subtitle}>
          Свежие зёрна, настоящая арабика и бережная обжарка
        </Text>
        <Button style={styles.button} text="Начать"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative', // по умолчанию, но наглядно показываем
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    padding: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  title: {
    fontSize: Fonts.f34,
    fontFamily: 'Sora_600SemiBold',
    textAlign: 'center',
    color: Colors.white,
  },
  subtitle: {
    marginTop: 82,
    maxWidth: 300,
    fontSize: Fonts.f14,
    fontFamily: 'Sora_400Regular',
    color: Colors.grey,
    textAlign: 'center',
  },
  button: {
    marginTop: 24,
    width: '100%',
  },
})

export default App;